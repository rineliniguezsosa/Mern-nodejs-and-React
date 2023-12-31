import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Approuter } from './router/Approuter.tsx'
import './index.css'
// import dotenv from 'dotenv'

// dotenv.config()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Approuter/>
    </BrowserRouter>
  </React.StrictMode>,
)
