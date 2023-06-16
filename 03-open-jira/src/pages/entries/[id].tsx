import { ChangeEvent, FC, useContext, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';

import { Layout } from '@/components/layout';
import { EntriesState, Entry } from '@/interfaces';
import { DeleteOutline, SaveOutlined } from '@mui/icons-material';
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material';
import { dbEntries } from '@/database';
import { EntriesContext } from '@/context/entries';
import { useRouter } from 'next/router';
import { dateFunctions } from '@/helpers';

const validStatus: EntriesState[] = ['pending', 'in-progress', 'finished']

interface Props {
  entry: Entry
}

const EntryPage: FC<Props> = ({ entry }) => {

  const { updateEntry, deleteEntry } = useContext(EntriesContext)

  const [inputValue, setInputValue] = useState(entry.description)
  const [status, setStatus] = useState<EntriesState>(entry.status)
  const [touched, setTouched] = useState(false)

  const isNotValid = useMemo(() => inputValue.length === 0 && touched, [inputValue, touched])

  const router = useRouter()

  const onChangeInput =  ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputValue( event.target.value )
    setTouched(true)
  }

  const onChangeStatus = ( event: ChangeEvent<HTMLInputElement> ) => {
    setStatus( event.target.value as EntriesState)
  }

  const onSave = () => {
    if( inputValue.trim().length === 0 ) return

    const updatedEntry: Entry = {
      ...entry,
      description: inputValue,
      status
    }

    updateEntry( updatedEntry, true )
    router.push('/')
  }

  const onDelete = () => {
    deleteEntry( entry._id )
    router.push('/')
  }

  return (
    <Layout title={inputValue.substring(0,20)} >
      <Grid 
        container
        justifyContent="center"
        sx={{ margionTop: 2 }}
      >
        <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
          <Card>
            <CardHeader 
              title={`Entrada: ${ inputValue.substring(0,20) }`}
              subheader={`Creada hace ${ dateFunctions.getFormatTimeToNow( entry.createdAt ) }`}
            />
            <CardContent>
              <TextField 
                sx={{ marginTop: 2, marginBottom: 2}}
                fullWidth
                placeholder='new entry'
                autoFocus
                multiline
                label='new entry'
                value={ inputValue }
                onBlur={ () => setTouched(true) }
                onChange={ onChangeInput }
                helperText={ isNotValid && 'La entrada no puede estar vacia' }
                error={ isNotValid }
              />

              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row
                  value={ status }
                  onChange={ onChangeStatus }
                >
                  {
                    validStatus.map((status) => (
                      <FormControlLabel
                        key={ status }
                        value={ status }
                        control={ <Radio /> }
                        label={ capitalize(status) }
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon= { <SaveOutlined />}
                variant="contained"
                fullWidth
                onClick={ onSave }
                disabled={ inputValue.length === 0 }
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>   
      </Grid>

      <IconButton 
        onClick={ onDelete }
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark',
        }}
      >
        <DeleteOutline />
      </IconButton>


    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { id } = params as { id: string }

  const entry = await dbEntries.getEntrybyId( id )

  if( !entry ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }


  return {
    props:{
      entry
    }
  }
}

export default EntryPage
