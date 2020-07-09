import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import PetCard from "./components/PetCard";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div>
      <Route
      exact path="/"
      render={props => 
      localStorage.getItem("token") ? (
        <Redirect to="/home" />
      ) : (
        <Redirect to ="/login" />
      )
    } 
    />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/home" component={Home} />
    <Route path="/pet/:id" render={props => {
      return <PetCard {...props} />
    }} />
    </div>
  );
}

export default App;
