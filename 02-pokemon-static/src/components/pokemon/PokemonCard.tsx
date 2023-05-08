import { SmallPokemon } from "@/interfaces"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const router = useRouter()

  const onClick = () => {
    router.push(`/name/${ pokemon.name }`)
  }

  return (
    <Grid xs={ 6 } sm={ 3 } md={2} xl={1} key={ pokemon.id }>
      <Card onClick={ onClick } isHoverable isPressable>
        <Card.Body css={{ p: 12 }}>
          <Card.Image 
            src={ pokemon.img }
            width="100%"
            height={ 140 }
            objectFit="contain"
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize' h5>{ pokemon.name }</Text>
            <Text h5>#{ pokemon.id }</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
