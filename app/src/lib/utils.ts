import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  })
}
