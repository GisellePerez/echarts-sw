import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <header>Header</header>

          <Route exact path="/echarts-sw" component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
