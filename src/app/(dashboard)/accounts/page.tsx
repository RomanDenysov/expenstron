'use client'

import ContentWrapper from '@/components/common/ContentWrapper'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {DataTable} from '@/components/ui/data-table'
import {Skeleton} from '@/components/ui/skeleton'
import {useBulkDeleteAccount} from '@/features/accounts/api/use-bulk-delete-accounts'
import {useGetAccounts} from '@/features/accounts/api/use-get-accounts'
import {useNewAccount} from '@/features/accounts/hooks/use-new-account'
import {Loader2, Plus} from 'lucide-react'
import {columns} from './columns'

const AccountsPage = () => {
  const newAccount = useNewAccount()
  const deleteAccount = useBulkDeleteAccount()
  const accountsQuery = useGetAccounts()
  const accounts = accountsQuery.data || []

  const isDisabled = accountsQuery.isLoading || deleteAccount.isPending

  if (accountsQuery.isLoading) {
    return (
      <ContentWrapper className="pb-10 -mt-24 min-h-screen">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[360px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper className="pb-10 -mt-24 min-h-screen">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts page</CardTitle>
          <Button onClick={newAccount.onOpen}>
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={accounts}
            filterKey="name"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id)
              deleteAccount.mutate({ids})
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </ContentWrapper>
  )
}

export default AccountsPage
