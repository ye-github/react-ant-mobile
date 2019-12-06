import React from 'react';
import  RouterList from './router/router'
import { Provider } from "react-redux";
import store from './store'
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor} from './store'

export  default  class  App  extends  React.Component{
  constructor(props) {
    super(props)
    store.subscribe(() => {
      console.log('state状态改变了，新状态如下')
      console.log(store.getState())
    })
  }
  render(){
     return(
       <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterList />
          </PersistGate>
       </Provider>
     )
  }

}



