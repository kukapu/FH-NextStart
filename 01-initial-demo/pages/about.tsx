import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function about() {
  return (
    <>
      <Head>
        <title>About Next First</title>
        <meta name="description" content="Home Next First" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <Link href="/">
              Home
            </Link>
          </div>
        </div>
        <h1>
          About Page
        </h1>
      </main>
    </>
  )
}