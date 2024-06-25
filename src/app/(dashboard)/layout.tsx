import Header from '@/components/header/Header'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <>
      <Header />
      <main className="mx-auto">{children}</main>
    </>
  )
}

export default DashboardLayout
