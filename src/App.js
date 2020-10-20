import React, {Component} from 'react';
import { FrameLayout } from './components'
import {Switch,Redirect,Route} from 'react-router-dom'
import { adminRoutes } from './routes'
const navRoutes = adminRoutes.filter(item=>item.isNav)


class App extends Component {
    render() {
        return (
          <div>
              <FrameLayout >
                  <Switch>
                      {
                          navRoutes.map(item=>{
                              return <Route path={item.path} key={item.path}
                                            render={(routeParams)=>{
                                                return <item.component {...routeParams}/>}
                                            }
                              />
                          })
                      }
                      <Redirect to='/admin/index' from='/admin' exact/>
                      <Redirect to='/404'/>
                  </Switch>
              </FrameLayout>
          </div>
        );
    }
}

export default App;
