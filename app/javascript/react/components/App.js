import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./About";
import CoffeeIndex from './CoffeeIndex';
import ShopIndex from './ShopIndex';
import LocationIndex from './LocationIndex';
import Contact from './Contact';
import Menu from './Menu';
import Questions from './Questions';

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/coffee" component={CoffeeIndex} />
        <Route exact path="/store" component={ShopIndex} />
        <Route exact path="/locations" component={LocationIndex} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
