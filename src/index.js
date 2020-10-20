import React from 'react'
import App from './App'
import {render} from 'react-dom'
//配置路由
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import { baseRoutes } from './routes'
render(
  <Router>
  <Switch >
    <Route  path='/admin' render={(routerParams)=>{return <App {...routerParams}/>}}/>
    {
      baseRoutes.map(item=>{
        return <Route path={item.path} component={item.component} key={item.path}/>
      })
    }
    <Redirect to='/admin' from='/' exact/>
    <Redirect to='/404'/>
  </Switch>
</Router>,document.getElementById('root'))
