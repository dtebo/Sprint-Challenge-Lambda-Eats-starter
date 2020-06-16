import React from "react";
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PizzaForm from './components/PizzaForm/PizzaForm';

const App = () => {
  return (
    <>
      <Header />    
      <Switch>
        <Route path="/Pizza">
          <PizzaForm />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};
export default App;
