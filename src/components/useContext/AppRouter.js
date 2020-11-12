import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ HomeScreen }/>
          <Route exact path="/about" component={ AboutScreen }/>
          <Route exact path="/login" component={ LoginScreen }/>

          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
    
  )
}

export default AppRouter
