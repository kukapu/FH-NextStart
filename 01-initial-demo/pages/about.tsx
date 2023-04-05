import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { DarkLayout } from '@/components/layout/DarkLayout'
import { ReactNode } from 'react';

export default function about() {
  return (
    <div>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.tsx</code>
          </p>
          <div>
            <Link href="/">
              Home
            </Link>
          </div>
        </div>
        <h1 className={'title'}>
          About Page
        </h1>
    </div>
  )
}

about.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
