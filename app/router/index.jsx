import React from "react";
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import firebase from "app/firebase";
import Main from "Main";
import Login from "Login";

var requireLogin = (nextState,replace,next) => {
  if(!firebase.auth().currentUser){
    replace("/");
  }
  next();
}

var redirectIfLoggedIn = (nextState,replace,next) => {
  if(firebase.auth().currentUser){
    replace("/todos");
  }
  next();
}

export default(
  <Router history={hashHistory}> 
    <Route path="/">
      <Route path="todos" component={Main} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);