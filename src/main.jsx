/**
 * Entry point: mounts the React app into the DOM.
 * - createRoot (React 18) replaces the legacy render() API.
 * - StrictMode helps catch side effects and deprecated APIs in development.
 * - Global styles (index.css) apply to the whole app.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
