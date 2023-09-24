import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ServicesProvider } from './context/ServicesProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ServicesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServicesProvider>
  </React.StrictMode>
)
