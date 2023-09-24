import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './pages/Farmer/CreateService.css'
import { ServicesProvider } from './context/ServicesProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ServicesProvider>
      <App />
    </ServicesProvider>
  </React.StrictMode>,
)
