import Head from 'next/head'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Contact Next First</title>
        <meta name="description" content="Contact Next First" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
