import React, { createContext, useReducer, Dispatch } from 'react'

// Define the type for your state
type State = {
  count: number
}

// Define the action type variables
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'

// Define the actions available
type Action =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof RESET }

// Define the initial state
const initialState: State = {
  count: 0,
}

// Create the context
type ContextType = {
  state: State
  dispatch: Dispatch<Action>
}

export const ExampleContext = createContext<ContextType | undefined>(undefined)

// Create the reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    case RESET:
      return initialState
    default:
      throw new Error('Unknown action')
  }
}

// Export the action type variables
export const ActionTypes = {
  INCREMENT,
  DECREMENT,
  RESET,
}

// Create the provider component
export const ExampleProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ExampleContext.Provider value={{ state, dispatch }}>
      {children}
    </ExampleContext.Provider>
  )
}
