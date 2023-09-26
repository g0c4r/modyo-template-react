import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const widgetName: string = 'your-widget-name'

ReactDOM.createRoot(document.getElementById(widgetName)!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
