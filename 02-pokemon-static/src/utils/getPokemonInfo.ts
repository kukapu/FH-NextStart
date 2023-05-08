import { pokeApi } from "@/api"
import { pokemonFull } from "@/interfaces"

export const getPokemonInfo = async ( nameOrId: string ) => {

  const { data } = await pokeApi.get<pokemonFull>(`/pokemon/${ nameOrId }`)

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }

}