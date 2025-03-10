import {client} from '@/lib/hono'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {InferRequestType, InferResponseType} from 'hono'
import {toast} from 'sonner'

type ResponseType = InferResponseType<(typeof client.api.transactions)[':id']['$patch']>
type RequestType = InferRequestType<(typeof client.api.transactions)[':id']['$patch']>['json']

export const useEditTransaction = (id?: string) => {
  const quertyClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions[':id']['$patch']({param: {id}, json})
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Transaction updated')
      quertyClient.invalidateQueries({queryKey: ['transaction', {id}]})
      quertyClient.invalidateQueries({queryKey: ['transactions']})
      // TODO: Invalidate summary
    },
    onError: () => {
      toast.error('Failed to edit transaction')
    },
  })

  return mutation
}
