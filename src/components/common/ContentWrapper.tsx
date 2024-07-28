import {cn} from '@/lib/utils'
import {ReactNode} from 'react'

type ContentWrapperProps = {
  children: ReactNode
  className?: string
}

export default function ContentWrapper({children, className}: ContentWrapperProps) {
  return <div className={cn('max-w-screen-xl size-full mx-auto px-2.5', className)}>{children}</div>
}
