import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App.jsx'
import { GLOBAL } from './lib/global.js'
import './styles/tokens.css'
import './styles/tailwind.css'

window.__GLOBAL__ = GLOBAL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
