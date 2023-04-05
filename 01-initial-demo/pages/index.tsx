import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'


export default function Home() {
  return (
    <MainLayout>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
        <div>
          <Link href="/about">
            About
          </Link>
        </div>
      </div>
      <h1 className={'title'}>
        Home Page
      </h1>
    </MainLayout>
  )
}
