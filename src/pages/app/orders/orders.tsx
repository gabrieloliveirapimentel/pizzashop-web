import { Table, TableBody } from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'

import { OrderTableFilters } from './components/order-table-filters'
import { OrderTableHeader } from './components/order-table-header'
import { OrderTableRow } from './components/order-table-row'
import { Pagination } from '@/components/pagination'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="border rounded-md">
            <Table>
              <OrderTableHeader />
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
