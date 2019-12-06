import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routerList from './config'
import Home  from '../pages/home/home'

console.log(routerList)
export default class RouterList extends React.Component {
    render() {
        return (
            <div>
                <HashRouter> 
                    <Switch>
                      <Route exact path="/" component={Home} />
                         {
                          routerList.map((val,index) =>{
                           return <Route key={index}  path={val.part} component={val.component} />
                          })
                        }
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}