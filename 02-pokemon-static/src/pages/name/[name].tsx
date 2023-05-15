import { useEffect, useState } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confeti from 'canvas-confetti';

import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { PokemonList, pokemonFull } from '@/interfaces';
import { getPokemonInfo, localFavorite } from '@/utils';

type PokemonPageProps = {
  pokemon: pokemonFull;
}

const PokemonNamePage: NextPage<PokemonPageProps> = ({ pokemon }) => {

  const [isFavorite, setIsFavorite] = useState<boolean>( localFavorite.isPokemonFavorite(pokemon.id) )

  // console.log(pokemon)
  const onToggleFavorite = () => {
    localFavorite.toggleFavotite(pokemon.id)
    setIsFavorite(!isFavorite)

    if( isFavorite ) return

    confeti({
      zIndex: 999,
      particleCount: 100,
      spread: 130,
      angle: -100,
      origin: {
        x:1,
        y:0
      }
    })
      
    
  }

  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={ pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.front_default }
                alt={ pokemon.name }
                width='100%'
                height={ 200 }
                objectFit='contain'
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform='capitalize'>{ pokemon.name }</Text>

              <Button
                color="gradient"
                ghost={ !isFavorite }
                onPress={onToggleFavorite}
                style={isFavorite ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}
              >
                {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
              </Button>

            </Card.Header>
            <Card.Body>
              <Text size={ 30 }>Sprites: </Text>

              <Container display='flex' direction='row' >
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>

            </Card.Body>
          </Card>    
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async() => {

  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  const pokemonNames151 = data.results.map( pokemon => pokemon.name )

  return {
    paths: pokemonNames151.map( name => ({
      params: { name }
    })),
    // fallback: false,
    fallback: 'blocking',
  }
}


export const getStaticProps: GetStaticProps = async (ctx) =>{

  const { params } = ctx
  const { name } = params as { name: string }

  const pokemon = await getPokemonInfo( name )

  if( !pokemon ) {

    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props:{
      pokemon,
    },
    revalidate: 86400,
  }
}
export default PokemonNamePage