import {client} from '@/lib/hono'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {InferResponseType} from 'hono'
import {toast} from 'sonner'

type ResponseType = InferResponseType<(typeof client.api.accounts)[':id']['$delete']>

export const useDeleteAccount = (id?: string) => {
  const quertyClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.accounts[':id']['$delete']({param: {id}})
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Account deleted')
      quertyClient.invalidateQueries({queryKey: ['account', {id}]})
      quertyClient.invalidateQueries({queryKey: ['accounts']})
      // TODO: Invalidate summary and transactions
    },
    onError: () => {
      toast.error('Failed to delete account')
    },
  })

  return mutation
}
