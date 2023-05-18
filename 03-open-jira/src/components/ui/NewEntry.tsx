import { ChangeEvent, useState, useContext } from 'react';

import { AddCircleOutline, SaveOutlined } from "@mui/icons-material"
import { Box, Button, TextField } from "@mui/material"
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {

  const { isAddingEntry, setIsAddingEntry } = useContext( UIContext )

  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const { addNewEntry } = useContext( EntriesContext )

  const onChangeInput =  ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputValue(event.target.value)
    setTouched(true)
  }

  const onSave = () => {
    if ( inputValue.length === 0 ) return

    // console.log('Guardando...')
    addNewEntry( inputValue )
    setIsAddingEntry(false)
    setTouched(false)
    setInputValue('')
     
  }

  return (
    <Box sx={{
      marginBottom: 2,
    }}>

      {
        isAddingEntry ? (
          <>
            <TextField
              fullWidth
              sx={{
                marginBottom: 2,
              }}
              placeholder="Nueva entrada"
              autoFocus
              multiline
              label="Nueva entrada"
              helperText={ inputValue.length === 0 && touched && 'La entrada no puede estar vacia'}
              error={ inputValue.length === 0 && touched }
              value={ inputValue }
              onChange={ onChangeInput }
            />
      
      
            <Box display='flex' justifyContent='space-between'>
              <Button
                variant="text"
                onClick={ () => setIsAddingEntry(false)}
              >
                Cancelar
              </Button>
              
              <Button
                variant="outlined"
                color="secondary"
                endIcon={ <SaveOutlined /> }
                onClick={ () =>{ onSave() }}
              >
                Guardar
              </Button>
      
            </Box>
            
          </>
        )

        : (
          <Button
            startIcon={ <AddCircleOutline /> }
            fullWidth
            variant="outlined"
            onClick={ () => setIsAddingEntry(true)}
          >
            Nueva entrada
          </Button>
        )
      }
    </Box>
    
      
    
  )
}
