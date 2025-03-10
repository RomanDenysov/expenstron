import {client} from '@/lib/hono'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {InferRequestType, InferResponseType} from 'hono'
import {toast} from 'sonner'

type ResponseType = InferResponseType<(typeof client.api.categories)[':id']['$patch']>
type RequestType = InferRequestType<(typeof client.api.categories)[':id']['$patch']>['json']

export const useEditCategory = (id?: string) => {
  const quertyClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.categories[':id']['$patch']({param: {id}, json})
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Category updated')
      quertyClient.invalidateQueries({queryKey: ['category', {id}]})
      quertyClient.invalidateQueries({queryKey: ['categories']})
      // TODO: Invalidate summary and transactions
    },
    onError: () => {
      toast.error('Failed to edit category')
    },
  })

  return mutation
}
