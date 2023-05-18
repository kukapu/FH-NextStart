import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}


const UI_INITIAL_STATE: UIState = {
    sideOpen: false,
    isAddingEntry: false,
    isDragging: false,
}


export const UIProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );

    const openSide = () => {
      dispatch({ type: 'UI - openSide' })
    }
  
    const closeSide = () => {
      dispatch({ type: 'UI - closeSide' })
    }

    const setIsAddingEntry = ( isAddingEntry: boolean ) => {
      dispatch({ type: 'UI - setIsAddingEntry', payload: isAddingEntry })
    }

    const startDragging = () => {
      dispatch({ type: 'UI - startDragging' })
    }

    const endDragging = () => {
      dispatch({ type: 'UI - endDragging' })
    }

    return (
        <UIContext.Provider value={{
            ...state,
            
            openSide,
            closeSide,
            setIsAddingEntry,

            startDragging,
            endDragging,
        }}>
            { children }
        </UIContext.Provider>
    )
};