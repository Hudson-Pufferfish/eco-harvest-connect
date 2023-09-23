import React, { useContext } from 'react'
import { ExampleContext, ActionTypes } from '~/context/ExampleContext'
// import { ExampleContext, ActionTypes } from './ExampleContext'

const Counter: React.FC = () => {
  const { state, dispatch } = useContext(ExampleContext)

  const increment = () => {
    dispatch({ type: ActionTypes.INCREMENT })
  }

  const decrement = () => {
    dispatch({ type: ActionTypes.DECREMENT })
  }

  const reset = () => {
    dispatch({ type: ActionTypes.RESET })
  }

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
