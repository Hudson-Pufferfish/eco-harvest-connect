import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CounterProvider } from './context/CounterContext'
import { ServicesProvider } from './context/ServicesProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <ServicesProvider>
        <App />
      </ServicesProvider>
    </CounterProvider>
  </React.StrictMode>,
)
