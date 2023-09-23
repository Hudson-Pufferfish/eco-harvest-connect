import { createContext, useReducer, Dispatch, ReactElement } from 'react'

// Define the type for your state
type CounterState = {
  count: number
}

// Define the action types as an enum
export enum ActionTypes {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  RESET = 'reset',
}

// Define the actions available
type CounterAction =
  | { type: ActionTypes.INCREMENT }
  | { type: ActionTypes.DECREMENT }
  | { type: ActionTypes.RESET }

// Define the initial state
const initialCounterState: CounterState = {
  count: 0,
}

// Create the context
type ContextType = {
  state: CounterState
  dispatch: Dispatch<CounterAction>
}

export const CounterContext = createContext<ContextType | undefined>(undefined)

// Create the reducer function
const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 }
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 }
    case ActionTypes.RESET:
      return initialCounterState
    default:
      throw new Error('Unknown action')
  }
}

type ChildrenType = { children?: ReactElement | ReactElement[] }

// Create the provider component
export const CounterProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState)

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}
