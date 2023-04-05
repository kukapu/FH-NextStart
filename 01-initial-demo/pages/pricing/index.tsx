import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'


export default function Home() {
  return (
    <MainLayout>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/pricing/index.tsx</code>
        </p>
        <div>
          <Link href="/">
            Home
          </Link>
        </div>
      </div>
      <h1 className={'title'}>
        Pricing Page
      </h1>
    </MainLayout>
  )
}
