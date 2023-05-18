
import { UIState } from './';


type UIActionType = 
   | { type: 'UI - openSide' } 
   | { type: 'UI - closeSide' } 
   | { type: 'UI - setIsAddingEntry', payload: boolean } 
   | { type: 'UI - startDragging' }
   | { type: 'UI - endDragging' }


export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {

   switch (action.type) {
      case 'UI - openSide':
         return {
            ...state,
            sideOpen: true
          }

      case 'UI - closeSide':
      return {
        ...state,
        sideOpen: false
      }

      case 'UI - setIsAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }

      case 'UI - startDragging':
      return {
        ...state,
        isDragging: true
      }

      case 'UI - endDragging':
      return {
        ...state,
        isDragging: false
      }

       default:
          return state;
   }

}