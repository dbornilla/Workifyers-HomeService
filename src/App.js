import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Form from './ProfileManagement/form.js';
import Account from './ProfileManagement/account.js';
import Favorite from './ProfileManagement/favoriteprof.js';
import Booked from './ProfileManagement/bookhistory.js';
function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
