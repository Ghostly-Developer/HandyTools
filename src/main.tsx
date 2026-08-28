import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

document.documentElement.className = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'theme-black'
  : 'theme-light'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
