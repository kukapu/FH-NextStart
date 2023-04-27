import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { Button, Card, Grid, Row, Text } from "@nextui-org/react";

import { PokemonList, SmallPokemon } from '@/interfaces';
import { pokeApi } from '@/api';
import { Layout } from "@/components/layouts";
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

export default function Home ( pokemons: Props ) {

  // console.log(pokemons)

  return (
    <Layout>
      
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.pokemons.map( (pokemon) => {
            return (
              <PokemonCard key={ pokemon.id } pokemon={ pokemon }  />
            )
          })
        } 
      </Grid.Container>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) =>{


  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  // console.log(data)

  const pokemons: SmallPokemon[] = data.results.map( (pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`,
    }
  })

  return {
    props:{
      pokemons: pokemons
    }
  }
}

