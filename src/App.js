import React from "react";
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <Header />    
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};
export default App;
