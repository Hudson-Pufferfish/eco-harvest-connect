import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = 'dev-r2kjx6mlmhuspdwp.us.auth0.com'
const clientId = 'NP4TxHm851YC6AxLXybb5DEoSdW1mV1y'
console.log(clientId)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
)
