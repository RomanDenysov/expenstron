import {client} from '@/lib/hono'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {InferRequestType, InferResponseType} from 'hono'
import {toast} from 'sonner'

type ResponseType = InferResponseType<(typeof client.api.transactions)['bulk-delete']['$post']>
type RequestType = InferRequestType<
  (typeof client.api.transactions)['bulk-delete']['$post']
>['json']

export const useBulkDeleteTransactions = () => {
  const quertyClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions['bulk-delete']['$post']({json})
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Transactions deleted')
      quertyClient.invalidateQueries({queryKey: ['transactions']})
      // TODO: Also invalidate summary
    },
    onError: () => {
      toast.error('Failed to delete transactions')
    },
  })

  return mutation
}
