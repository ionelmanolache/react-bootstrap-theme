import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './shared/theme/theme.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
