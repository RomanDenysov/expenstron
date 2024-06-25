'use client'

import {Button} from '@/components/ui/button'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {NAV_ITEMS} from '@/constants/navigation'
import {cn} from '@/lib/utils'
import {Menu} from 'lucide-react'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {useState} from 'react'
import {useMedia} from 'react-use'

type NavButtonProps = {
  href: string
  label: string
  isActive?: boolean
}

const NavButton = ({href, label, isActive}: NavButtonProps) => {
  return (
    <Button
      variant={'outline'}
      size={'sm'}
      className={cn(
        'w-full lg:w-auto justify-between text-sm font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition',
        isActive ? 'bg-white/10 text-white' : 'bg-transparent',
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}

const NavItems = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()
  const isMobile = useMedia('(max-width: 1024px)', false)

  const onClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant={'outline'}
            size={'sm'}
            className={
              'font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'
            }
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-4">
          <nav className="flex flex-col gap-y-4 pt-6">
            {NAV_ITEMS.map((item, index) => (
              <Button
                key={index}
                variant={item.href === pathname ? 'secondary' : 'ghost'}
                onClick={() => onClick(item.href)}
                className="w-full justify-start text-base"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    )
  } else {
    return (
      <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {NAV_ITEMS.map((item, index) => (
          <NavButton
            key={index}
            href={item.href}
            label={item.label}
            isActive={item.href === pathname}
          />
        ))}
      </nav>
    )
  }
}

export default NavItems
