import Link from 'next/link'

const HeaderLogo = () => {
  return (
    <Link href={'/'}>
      <div className="items-center justify-center hidden lg:flex size-fit">
        {/* <Image
					src={"/logo2.svg"}
					alt="expense tracker logo"
					width={20}
					height={50}
				/> */}
      </div>
    </Link>
  )
}

export default HeaderLogo
