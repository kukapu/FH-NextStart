import { FC, useReducer, useEffect } from 'react';

import { useSnackbar } from 'notistack';

import { Entry } from '@/interfaces';
import { EntriesContext, entriesReducer } from './';
import { entriesApi } from '@/api';

type Props = {
  children: React.ReactNode;  
};

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );
    const { enqueueSnackbar } = useSnackbar()

    const addNewEntry = async ( description: string ) => {
      
      // const newEntry: Entry = {
      //   _id: uuidv4(),
      //   description,
      //   status: 'pending',
      //   createdAt: Date.now(),
      // }

      const { data } = await entriesApi.post<Entry>('/entries', { description });

      dispatch({ type: '[Entry] - add', payload: data });
    } 
    
    const updateEntry = async ( { _id, description, status }: Entry, showSnackbar = false ) => {
      try {
        const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status });

        dispatch({ type: '[Entry] - updateStatus', payload: data });

        if( showSnackbar ) {
          enqueueSnackbar("Entrada actualizada", {
            variant: 'success',
            autoHideDuration: 1500,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            }
          })
        }

        
      } catch (error) {
        console.log(error)
      }
    }


    
    const refreshEntries = async () => {
      const { data } = await entriesApi.get<Entry[]>('/entries');
      // console.log(resp)
      dispatch({ type: '[Entry] - refreshData', payload: data });
    }

    useEffect(() => {
      refreshEntries()

    }, [])


    const deleteEntry = async ( _id: string ) => {
      try {
        await entriesApi.delete(`/entries/${ _id }`);
        dispatch({ type: '[Entry] - delete', payload: _id });

        enqueueSnackbar("Entrada eliminada", {
          variant: 'error',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })

      } catch (error) {
        console.log(error)
      }
    }
    

    return (
        <EntriesContext.Provider value={{
            ...state,

            addNewEntry,
            updateEntry,
            deleteEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};