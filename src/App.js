import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Error from './pages/Error';

import NewsState from './contexts/news/NewsState'

function App() {
  return (
    <NewsState>
      <Router>
        <div className="App container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
        </div>
      </Router>
    </NewsState>
  );
}

export default App;
