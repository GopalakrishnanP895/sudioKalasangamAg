import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomepageComponent from './Pages/HomePage/HomepageComponent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomepageComponent} />
      </Switch>
    </div>
  );
}

export default App;
