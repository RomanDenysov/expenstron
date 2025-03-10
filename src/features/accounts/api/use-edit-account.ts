import {client} from '@/lib/hono'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {InferRequestType, InferResponseType} from 'hono'
import {toast} from 'sonner'

type ResponseType = InferResponseType<(typeof client.api.accounts)[':id']['$patch']>
type RequestType = InferRequestType<(typeof client.api.accounts)[':id']['$patch']>['json']

export const useEditAccount = (id?: string) => {
  const quertyClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts[':id']['$patch']({param: {id}, json})
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Account updated')
      quertyClient.invalidateQueries({queryKey: ['account', {id}]})
      quertyClient.invalidateQueries({queryKey: ['accounts']})
      // TODO: Invalidate summary and transactions
    },
    onError: () => {
      toast.error('Failed to edit account')
    },
  })

  return mutation
}
