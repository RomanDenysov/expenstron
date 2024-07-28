import {QueryProvider} from './query-provider'
import {SheetProvider} from './sheet-provider'
import {ThemeProvider} from './theme-provider'

export default function MainProvider({children}: {children: React.ReactNode}) {
  return (
    <QueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <SheetProvider />
        {children}
      </ThemeProvider>
    </QueryProvider>
  )
}
