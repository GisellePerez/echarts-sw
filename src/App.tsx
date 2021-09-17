import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Film from './pages/Film';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <header>
            <h1>Star Wars Movies</h1>
          </header>

          <Switch>
            <Route exact path="/echarts-sw" component={Home} />
            <Route path="/echarts-sw/films/:id" component={Film} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
