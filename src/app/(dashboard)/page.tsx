'use client'

import ContentWrapper from '@/components/common/ContentWrapper'
import {Button} from '@/components/ui/button'
import {useNewAccount} from '@/features/accounts/hooks/use-new-account'

export default function Home() {
  const {onOpen} = useNewAccount()

  return (
    <ContentWrapper className="">
      <center className="py-20 h-full">
        <Button onClick={onOpen}>Test</Button>
      </center>
    </ContentWrapper>
  )
}
