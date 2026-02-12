import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './Components/App'
import "./CSS/Main.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
