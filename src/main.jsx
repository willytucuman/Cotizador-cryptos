import React from 'react'
import ReactDOM from 'react-dom/client'
import Render from './Render'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Render />
    </BrowserRouter>
  </React.StrictMode>,
)
