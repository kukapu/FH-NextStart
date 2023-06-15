import { FC, useReducer, useEffect } from 'react';

import { Entry } from '@/interfaces';
import { EntriesContext, entriesReducer } from './';
import { entriesApi } from '@/api';
import { CloseFullscreen } from '@mui/icons-material';

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
    
    const updateEntry = async ( { _id, description, status }: Entry ) => {
      try {
        const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status });

        dispatch({ type: '[Entry] - updateStatus', payload: data });
        
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
    

    return (
        <EntriesContext.Provider value={{
            ...state,

            addNewEntry,
            updateEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};