import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { MenuOutlined } from '@mui/icons-material';
import Link from 'next/link';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlined />
        </IconButton>

        {/* <NextLink href='/' passHref legacyBehavior>
          <Link underline='none' color="white">
            <Typography variant='h6' color='white'> CookieMaster </Typography>
          </Link>
        </NextLink> */}

        <Link component={ NextLink } href='/' underline='none' color="white">
          <Typography variant='h6' color='white'> CookieMaster </Typography>
        </Link>

        <div style={{ flex: 1 }}></div>

        {/* <NextLink href='/' passHref legacyBehavior>
          <Link underline='none' color="white">
            <Typography variant='h6' color='white'> Cambiar Tema </Typography>
          </Link>
        </NextLink> */}

        <Link component={ NextLink } href='/theme-changer' underline='none' color="white">
          <Typography variant='h6' color='white'> Cambiar Tema </Typography>
        </Link>

      </Toolbar>
    </AppBar>
  )
}
