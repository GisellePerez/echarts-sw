import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Film from './components/Film';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <header>Header</header>

          <Switch>
            <Route exact path="/echarts-sw" component={Home} />
            <Route path="/echarts-sw/film" component={Film} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
