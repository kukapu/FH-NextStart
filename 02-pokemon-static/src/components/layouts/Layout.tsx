import { FC, PropsWithChildren } from "react"

import Head from "next/head"

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>  
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="kukapu" />
        <meta name="description" content={ `pokemon info ${ title }` } />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex` } />
      </Head>

      {/* Navbar */}
      
      <main>
        { children }
      </main>

    </>
  )
}
