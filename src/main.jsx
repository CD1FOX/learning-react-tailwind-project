import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Problem from './problem2/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Problem/>
  </StrictMode>,
)
