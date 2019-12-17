import React from 'react';
import Login from './components/Login';
import './App.css';
import Friends from './components/Friends';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';


function App() {
  return (
    <div className="App">
     <Route path = '/login' component = {Login} />
     <PrivateRoute path = '/plusfriend' component = {FriendForm} />
     <PrivateRoute path = '/friends' component = {Friends} />
    </div>
  );
}

export default App;
