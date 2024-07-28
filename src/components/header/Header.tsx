import HeaderLogo from '@/components/header/HeaderLogo'
import {ClerkLoaded, ClerkLoading, UserButton} from '@clerk/nextjs'
import {Loader2} from 'lucide-react'
import ContentWrapper from '../common/ContentWrapper'
import NavItems from './NavItems'
import WelcomeMsg from './WelcomeMsg'

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
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-5 py-8 lg:px-12 pb-28 lg:pb-36">
      <ContentWrapper className="px-0">
        <div className="w-full flex items-center gap-x-10 justify-between mb-6 lg:mb-14">
          <div className="size-full mx-auto flex items-start lg:items-center justify-start lg:justify-between">
            <HeaderLogo />
            <NavItems />
          </div>
          <ClerkButton />
        </div>
        <WelcomeMsg />
      </ContentWrapper>
    </header>
  )
}
