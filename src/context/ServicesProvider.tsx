import { createContext, useReducer, Dispatch, ReactNode } from 'react'
import { uid } from 'uid';

// Define the type for your state

export type Service = {
  id: string,
  title: string,
  description?: string,
  price: number,
  location?: string
}

type ServicesState = {
  serviceList: Service[],
}



export enum ActionTypes {
  ADD = 'add',
  REMOVE = 'remove',
}

type ServicesAction = { type: ActionTypes.ADD, payload: Service} 
  | { type: ActionTypes.REMOVE, payload: string}

const initialServicesState: ServicesState = {
  serviceList: [],
}

type ContextType = {
  state: ServicesState
  dispatch: Dispatch<ServicesAction>
}

export const ServicesContext = createContext<ContextType | undefined>(undefined)

const ServicesReducer = (
  state: ServicesState,
  action: ServicesAction,
): ServicesState => {
  switch (action.type) {
    case ActionTypes.ADD:
      if (action.payload.price < 0) {
        alert("Your price must not be negative")
        // Set the validation error message
        return state
      }

      const newService = {
        ...action.payload,
        id: uid(), // Generate a unique ID for the service
      };
      const newServiceList = {
        ...state,
        serviceList: [...state.serviceList, newService],
      };
      console.log('New State after ADD:', newServiceList); // Log the updated state
      return newServiceList;

      case ActionTypes.REMOVE:
        return {
          ...state,
          serviceList: state.serviceList.filter(
            (service) => service.id !== action.payload
          ),
        };
      default:
        return state
    }
}



type ChildrenType = { children?: ReactNode }

export const ServicesProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(ServicesReducer, initialServicesState)

  return (
    <ServicesContext.Provider value={{ state, dispatch }}>
      {children}
    </ServicesContext.Provider>
  )
}
