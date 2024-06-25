import {cn} from '@/lib/utils'
import {ReactNode} from 'react'

type ContentWrapperProps = {
  children: ReactNode
  className?: string
}

export default function ContentWrapper({children, className}: ContentWrapperProps) {
  return <div className={cn('max-w-7xl w-full h-full mx-auto', className)}>{children}</div>
}
