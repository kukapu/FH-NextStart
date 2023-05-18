import { UIContext } from "@/context/ui";
import { MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { useContext } from 'react';

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

        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
