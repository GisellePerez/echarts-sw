import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Film from './pages/Film';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <header>Header</header>

          <Switch>
            <Route exact path="/echarts-sw" component={Home} />
            <Route path="/echarts-sw/films/:id" component={Film} />
          </Switch>
        </Router>

        <footer>Footer</footer>
      </div>
    </div>
  );
}

export default App;
