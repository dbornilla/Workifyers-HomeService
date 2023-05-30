import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Form from './form.js';
import Account from './account.js';
import Favorite from './favoriteprof.js';
import Booked from './bookhistory.js';
function App() {
  return (
    <div className="App">
      <Booked />
    </div>
  );
}

export default App;
