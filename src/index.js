import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'
import './index.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain="dev-635ounsp7aik3c5z.us.auth0.com"
    clientId="pKHzgGDQX1MuRJVrSGOdSRXVNwQX9p9O"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)
