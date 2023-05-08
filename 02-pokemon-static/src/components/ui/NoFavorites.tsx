import { Container, Image, Text } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 100px)',
      alignSelf: 'center',
    }}>

      <Text h1>No hay Favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
        width={200}
        height={200}
        css={{ opacity: 0.2 }}
      />
    </Container>
  )
}
