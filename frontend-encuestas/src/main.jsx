import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login/index.jsx'

const Main = () => {
  return (
    <Login />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
