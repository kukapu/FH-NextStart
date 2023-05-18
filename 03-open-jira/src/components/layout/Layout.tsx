import { Box } from "@mui/material"
import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar, Sidebar } from "../ui"

interface LayoutProps {
  title?: string
}



export const Layout: FC<LayoutProps> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{ title }</title>
      </Head>
      <Navbar />
      <Sidebar />

      <Box sx={{ padding: '10px 20px' }}>
        { children }
      </Box>

    </Box>
  )
}
