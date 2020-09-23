import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import Error from './components/Error';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <LogIn/>
        </Route>
        <Route exact path={"/signup"}>
          <SignUp/>
        </Route>
        <Route path={"/profile/:email"}>
          <Profile/>
        </Route>
        <Route path={"/feed"}>
          <Feed/>
        </Route>
          
        <Route path={'*'}>
          <Error/>
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
