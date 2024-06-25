import HeaderLogo from '@/components/common/HeaderLogo'
import {ClerkLoaded, ClerkLoading, UserButton} from '@clerk/nextjs'
import {Loader2} from 'lucide-react'
import ContentWrapper from '../common/ContentWrapper'
import NavItems from './NavItems'

const ClerkButton = () => {
  return (
    <>
      <ClerkLoaded>
        <UserButton afterSignOutUrl="/" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="size-8 animate-spin text-slate-400" />
      </ClerkLoading>
    </>
  )
}

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-5 py-8 lg:px-12">
      <ContentWrapper className="flex items-center gap-x-10">
        <div className="size-full mx-auto flex items-start lg:items-center justify-start lg:justify-between">
          <HeaderLogo />
          <NavItems />
        </div>
        <ClerkButton />
      </ContentWrapper>
    </header>
  )
}
