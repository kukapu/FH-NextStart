import React, { FC, useEffect, useState } from 'react'

import { FormControl } from '@mui/base'
import { Button, Card, CardContent, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'

import { Layout } from '@/components/layouts'
import { GetServerSideProps } from 'next'
import axios from 'axios';

interface Props {
  theme: string
}

const ThemeChangerPage: FC<Props> = ({ theme }) => {

  const [currentTheme, setCurrentTheme] = useState(theme)

  const onChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value
    // console.log({ event: selectedTheme })
    setCurrentTheme( selectedTheme)

    localStorage.setItem('theme', selectedTheme)
    Cookies.set('theme', selectedTheme) 
  }

  // console.log(props)

  const onClick = async() => {
   const { data } = await axios.get('/api/hello')
   console.log(data)
  }

  useEffect(()=> {
    console.log('LocalStorage:', localStorage.getItem('theme'))
    console.log('Cookies:', Cookies.get('theme'))

  }, [])

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              value={ currentTheme }
              onChange={ onChangeTheme }
            >
              <FormControlLabel value='light' control={ <Radio /> } label='Light' />
              <FormControlLabel value='dark' control={ <Radio /> } label='Dark' />
              <FormControlLabel value='custom' control={ <Radio /> } label='Custom' />
            </RadioGroup>
          </FormControl>

          <Button
            onClick={ onClick }
          >
            Solicitud
          </Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { req } = ctx
  // console.log(req)
  const { theme = 'dark', name = 'noname'} = req.cookies
  // console.log({ cookies })

  const validThemes = ['light', 'dark', 'custom']

  return {
    props:{
      theme: validThemes.includes(theme) ? theme : 'dark',
      name
    }
  }
}

export default ThemeChangerPage
