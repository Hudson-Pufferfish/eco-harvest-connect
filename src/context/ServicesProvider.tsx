import { createContext, useReducer, Dispatch, ReactNode } from 'react'

// Define the type for your state

type Service = {
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
      return {
        ...state,
        serviceList: [...state.serviceList, action.payload],
      };
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
