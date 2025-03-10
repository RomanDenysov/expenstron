import {client} from '@/lib/hono'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {InferRequestType, InferResponseType} from 'hono'
import {toast} from 'sonner'

type ResponseType = InferResponseType<(typeof client.api.accounts)['bulk-delete']['$post']>
type RequestType = InferRequestType<(typeof client.api.accounts)['bulk-delete']['$post']>['json']

export const useBulkDeleteAccount = () => {
  const quertyClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts['bulk-delete']['$post']({json})
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Account deleted')
      quertyClient.invalidateQueries({queryKey: ['accounts']})
      // TODO: Also invalidate summary
    },
    onError: () => {
      toast.error('Failed to delete account')
    },
  })

  return mutation
}
