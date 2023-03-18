import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
