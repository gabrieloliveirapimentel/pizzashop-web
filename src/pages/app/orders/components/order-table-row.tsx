import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { Search, ArrowRight, X } from 'lucide-react'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="sm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        0195d26a-d9c4-7e70-bfea-f641aceebf89
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Gabriel Pimentel</TableCell>
      <TableCell className="font-medium">R$149,90</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="h-3 w-3 mr-2" />
          <span>Aprovar</span>
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="h-3 w-3 mr-2" />
          <span>Cancelar</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
