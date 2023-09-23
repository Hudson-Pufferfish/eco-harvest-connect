import React, { useContext } from 'react'
import { CounterContext, ActionTypes } from '~/context/CounterContext'

const Counter: React.FC = () => {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error(
      'Counter component must be rendered within a CounterProvider',
    )
  }

  const { state, dispatch } = context

  const increment = () => {
    console.log('hello')
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
