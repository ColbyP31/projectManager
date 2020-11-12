import './App.css';
import {Router} from '@reach/router';
import React from 'react';
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Details path="/:id"/>
      </Router>
    </div>
  );
}

export default App;
