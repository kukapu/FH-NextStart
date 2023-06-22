import '@/styles/globals.css'
import { useEffect, useState } from 'react';

import type { AppContext, AppProps } from 'next/app'
import { GetServerSideProps } from 'next';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme, darkTheme, lightTheme } from '@/themes';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string
}

export default function App({ Component, pageProps }: Props) {

  // console.log({ theme }) 

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
        ? lightTheme
        : (cookieTheme === 'dark')
          ? darkTheme
          : customTheme;
    
    setCurrentTheme( selectedTheme );
  }, [])


  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />

    </ThemeProvider>
  )
}

// App.getInitialProps = async (appContext: AppContext) => {

//   const cookies = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'dark' }

//   console.log('getInitialProps' ,cookies)

//   const { theme } = cookies
//   const validThemes = ['light', 'dark', 'custom']

//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   }
// }