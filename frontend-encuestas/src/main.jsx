import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, Redirect } from 'wouter'
import Login from './pages/Login/index.jsx'
import Guard from './components/Guard/index.jsx'
import Provider from './context/Provider.jsx'
import Mainpage from './pages/Main/index.jsx'
import Register from './pages/Register/index.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/'>
          <Guard component={Mainpage}/>
        </Route>
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
