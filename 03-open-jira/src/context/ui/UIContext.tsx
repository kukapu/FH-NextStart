import { createContext } from 'react';


interface ContextProps {
    sideOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    //Methods
    openSide: () => void;
    closeSide: () => void;
    setIsAddingEntry: (isAddingEntry: boolean) => void
    startDragging: () => void;
    endDragging: () => void;
}


export const UIContext = createContext({} as ContextProps );