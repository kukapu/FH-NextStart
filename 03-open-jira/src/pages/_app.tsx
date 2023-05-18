import { EntriesProvider } from '@/context/entries'
import { UIProvider } from '@/context/ui'
import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <EntriesProvider>
        <ThemeProvider theme={ darkTheme }>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </EntriesProvider>
    </UIProvider>

  )
    
}
