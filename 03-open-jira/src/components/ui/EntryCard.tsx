import { UIContext } from '@/context/ui';
import { dateFunctions } from '@/helpers';
import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, DragEvent, useContext } from 'react';

interface EntryCardProps {
  entry: Entry;
}


export const EntryCard: FC<EntryCardProps> = ({ entry }) => {

  const { startDragging, endDragging } = useContext( UIContext )
  const router = useRouter()

  const onDragStart = ( event: DragEvent<HTMLDivElement> ) => {
    // todo: modificar estado, para indicar que estoy hacioendo drag
    // console.log(event)
    event.dataTransfer.setData('text', entry._id)
    startDragging()

  }

  const onDragEnd = ( event: DragEvent<HTMLDivElement> ) => {
    // todo: cancelar onDrag
    endDragging()
  }

  const onClick = () => {
    router.push(`/entries/${ entry._id }`)
  }

  return (
    <Card
      onClick={ onClick }
      sx={{ marginBottom: 2 }}
      draggable
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
    >
        
    <CardActionArea>
      <CardContent>
        <Typography sx={{ witheSpace: 'pre-line' }}> { entry.description } </Typography>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2px'}}>
        <Typography variant='body2'> { `Creada ${dateFunctions.getFormatTimeToNow( entry.createdAt )}` } </Typography>
      </CardActions>
    </CardActionArea>
      
    </Card>
  )
}
