import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, Redirect } from 'wouter'
import Login from './pages/Login/index.jsx'
import Guard from './components/Guard/index.jsx'
import Provider from './context/Provider.jsx'
import Mainpage from './pages/Main/index.jsx'
import Register from './pages/Register/index.jsx'
import Create from './pages/Createencuesta/index.jsx'
import Update from './pages/Update/index.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/'>
          <Guard component={Mainpage}/>
        </Route>
        <Route path='/nueva-encuesta'>
          <Guard component={Create} />
        </Route>
        <Route path='/update/:id'>
          <Guard component={Update} />
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
