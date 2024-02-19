// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DataTablePage from './components/DataTablePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/table" component={DataTablePage} />
      </Switch>
    </Router>
  );
}

export default App;
