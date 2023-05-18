import { UIContext } from '@/context/ui';
import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { FC, DragEvent, useContext } from 'react';

interface EntryCardProps {
  entry: Entry;
}


export const EntryCard: FC<EntryCardProps> = ({ entry }) => {

  const { startDragging, endDragging } = useContext( UIContext )

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

  return (
    <Card
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
        <Typography variant='body2'> hace 30 min </Typography>
      </CardActions>
    </CardActionArea>
      
    </Card>
  )
}
