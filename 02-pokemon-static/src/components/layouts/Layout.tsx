import { FC, PropsWithChildren } from "react"

import Head from "next/head"

import { Navbar } from "../ui";
import { useRouter } from "next/router";

interface Props extends PropsWithChildren {
  title?: string;
}

const origin = ( typeof window !== 'undefined' ) ? window.location.origin : ''

export const Layout: FC<Props> = ({ title, children }) => {


  // console.log(origin)


  return (
    <>  
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="kukapu" />
        <meta name="description" content={ `pokemon info ${ title }` } />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex` } />

        <meta property="og:title" content={`Informacion sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
        <meta property="og:image" content={`${origin}/img/banner.img`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px',
      }}>
        { children }
      </main>

    </>
  )
}
