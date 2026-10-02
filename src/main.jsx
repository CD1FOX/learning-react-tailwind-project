import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Problem1 from './problem1/problem1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Problem1/>
  </StrictMode>,
)
