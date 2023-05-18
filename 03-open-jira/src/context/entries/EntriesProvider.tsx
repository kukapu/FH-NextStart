import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '@/interfaces';
import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
      {
        _id: uuidv4(),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        status: 'pending',
        createdAt: Date.now(),
      },
      {
        _id: uuidv4(),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        status: 'in-progress',
        createdAt: Date.now() - 1000000,
      },
      {
        _id: uuidv4(),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        status: 'finished',
        createdAt: Date.now() - 2400000,
      },
    ],
}


export const EntriesProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );

    const addNewEntry = ( description: string ) => {
      
      const newEntry: Entry = {
        _id: uuidv4(),
        description,
        status: 'pending',
        createdAt: Date.now(),
      }

      dispatch({ type: '[Entry] - add', payload: newEntry });
    } 
    
    const updateEntry = ( entry: Entry ) => {
      dispatch({ type: '[Entry] - updateStatus', payload: entry });
    }

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