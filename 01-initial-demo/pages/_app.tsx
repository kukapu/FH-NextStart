import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
}

export default function App({ Component, pageProps }: AppProps) {

  const ComponentWithLayout = Component as NextPageWithLayout
  const getLayout = ComponentWithLayout.getLayout || ((page: ReactNode) => page)

  return (
    // <>
    //   <Component {...pageProps} />
    // </>

    getLayout( <Component {...pageProps} /> )
  )
}
