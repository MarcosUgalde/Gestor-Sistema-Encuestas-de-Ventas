import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, Redirect } from 'wouter'
import Login from './pages/Login/index.jsx'
import Provider from './context/Provider.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/login' component={Login} />
        <Redirect to='/login'/>
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
