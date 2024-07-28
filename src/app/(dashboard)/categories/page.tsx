'use client'

import ContentWrapper from '@/components/common/ContentWrapper'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {DataTable} from '@/components/ui/data-table'
import {Skeleton} from '@/components/ui/skeleton'
import {useBulkDeleteCategories} from '@/features/categories/api/use-bulk-delete-categories'
import {useGetCategories} from '@/features/categories/api/use-get-categories'
import {useNewCategory} from '@/features/categories/hooks/use-new-category'
import {Loader2, Plus} from 'lucide-react'
import {columns} from './columns'

const CategoriesPage = () => {
  const newCategory = useNewCategory()
  const deleteCategories = useBulkDeleteCategories()
  const categoriesQuery = useGetCategories()
  const categories = categoriesQuery.data || []

  const isDisabled = categoriesQuery.isLoading || deleteCategories.isPending

  if (categoriesQuery.isLoading) {
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
          <CardTitle className="text-xl line-clamp-1">Categories page</CardTitle>
          <Button onClick={newCategory.onOpen}>
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={categories}
            filterKey="name"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id)
              deleteCategories.mutate({ids})
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </ContentWrapper>
  )
}

export default CategoriesPage
