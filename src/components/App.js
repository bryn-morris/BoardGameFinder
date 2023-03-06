import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import BoardGameContainer from "./BoardGameContainer.js";


function App() {
  return (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/actors">
        <Actors />
      </Route>
      <Route path="/directors">
        <Directors />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>
  </div>
  )
}

export default App;

