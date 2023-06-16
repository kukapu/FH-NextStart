import { useContext } from 'react';
import NextLink from 'next/link';
import { UIContext } from "@/context/ui";
import { MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"

export const Navbar = () => {

  const { openSide } = useContext( UIContext )
  

  return (
    <AppBar position="sticky" elevation={ 0 }>
      <Toolbar>
        <IconButton
          size="large"
          edge="start" 
          onClick={ openSide }  
        >
          <MenuOutlined />
        </IconButton>
       
          <Link component={ NextLink } href='/' underline='none' color="white">
            <Typography variant="h6">OpenJira</Typography>
          </Link>
        
      </Toolbar>
    </AppBar>
  )
}
