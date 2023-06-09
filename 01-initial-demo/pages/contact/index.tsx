import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'

export default function contact() {
  return (
    <MainLayout>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/contact/index.tsx</code>
        </p>
        <div>
          <Link href="/">
            Home
          </Link>
        </div>
      </div>
      <h1 className={'title'}>
        Contact Page
      </h1>
    </MainLayout>
  )
}
