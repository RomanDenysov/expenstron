type Props = {
  children: React.ReactNode
}

const AuthLayout = ({children}: Props) => {
  return <main className="w-screen flex flex-col items-center justify-between">{children}</main>
}

export default AuthLayout
