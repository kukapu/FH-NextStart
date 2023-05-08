import { pokeApi } from '@/api'
import { Layout } from '@/components/layouts'
import { FavoritePokemons, PokemonCard } from '@/components/pokemon'
import { NoFavorites } from '@/components/ui';
import { PokemonList, SmallPokemon } from '@/interfaces'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

interface Props {
  pokemons: SmallPokemon[]
}

const Favorites = ( pokemons: Props ) => {

  const [favPokemons, setfavPokemons] = useState<SmallPokemon[]>([]);
  // console.log(pokemons)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

    function filtrarPorIds(arrayObjetos:any[], arrayIds:any[]) {
      return arrayObjetos.filter(obj => arrayIds.includes(obj.id));
    }

    const pokeFav: SmallPokemon[] = filtrarPorIds(pokemons.pokemons, favorites)
    
    setfavPokemons(pokeFav)


  }, [])
  

  return (
    <Layout title='Pokemons - Favoritos'>

      {/* {
        favPokemons.length === 0 
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons pokemons={ favPokemons } /> )
    
      } */}

    </Layout>
  )
}

export default Favorites


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
