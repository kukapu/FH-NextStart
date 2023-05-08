import { SmallPokemon } from '@/interfaces'
import { Grid } from '@nextui-org/react'
import { NextPage } from 'next'
import React, { FC } from 'react'
import { PokemonCard } from './PokemonCard'

interface Props {
  pokemons: SmallPokemon[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <>
    <h1>Favoritos</h1>
    <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map( (pokemonId) => {
          return (
            <PokemonCard key={ pokemonId.id } pokemon={ pokemonId }  />
          )
        })
      } 
    </Grid.Container>
  </>
  )
}