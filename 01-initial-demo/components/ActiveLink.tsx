import { useRouter } from "next/router";

import Link from "next/link"

type ActiveLinkProps = {
  text: string;
  href: string;
}

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({ text, href }) => {

  const { asPath } = useRouter()

  return (
    <Link href={ href }>
      <span style={ asPath  === href ? style : undefined}>{ text }</span>
    </Link>
  )
}
