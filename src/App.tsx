import './App.css'
import { CounterProvider } from './context/CounterContext'
import Counter from './components/Counter'
import { ServicesProvider } from './context/ServicesProvider'

function App() {
  return (
    <>
      <CounterProvider>
        <ServicesProvider>  
          <Counter /> 
        </ServicesProvider>
      </CounterProvider>
    </>
  )
}

export default App
