import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntriesState } from "@/interfaces";
import { FC, useContext, useMemo, DragEvent } from 'react';

import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

import styles from './EntryList.module.css'

interface EntryListProps {
  status: EntriesState;
}

export const EntryList: FC<EntryListProps> = ({ status }) => {

  const { entries, updateEntry } = useContext( EntriesContext );
  const { isDragging, endDragging } = useContext( UIContext )

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ])
  
  const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
  }

  const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
    // console.log(event)
    const id = event.dataTransfer.getData('text');
    // console.log({id})
    const entry = entries.find( entry => entry._id === id )!;
    entry.status = status;
    // console.log(entry)
    updateEntry( entry )
    endDragging()
  }

  return (

    // TODO: Aqui haremos el drop

    <div
      onDragOver={ allowDrop }
      onDrop={ onDropEntry }
      className={ isDragging ? styles.dragging : '' }
    >
      <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px'}}>
        {/* Cambiara dependiendo de si estoy haciendo drag */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s' }}>
          {
            entriesByStatus.map( entry => (
              <EntryCard key={ entry._id } entry={ entry } />
            ))
          }
        
         
        </List>
      </Paper>


    </div>
  )
}
