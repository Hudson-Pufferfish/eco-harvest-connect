import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ExampleProvider } from './context/ExampleContext'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <ExampleProvider>
        <Counter />
      </ExampleProvider>
    </>
  )
}

export default App
