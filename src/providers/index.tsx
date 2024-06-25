import {QueryProvider} from './query-provider'
import {ThemeProvider} from './theme-provider'

export default function MainProvider({children}: {children: React.ReactNode}) {
  return (
    <QueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </QueryProvider>
  )
}
