import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import BoardGameContainer from "./BoardGameContainer.js";


function App() {
  return (
  <div>
    <NavBar />
      <Route path="/">
        <Header />
        <Footer />
      </Route>
      <Route path="/boardgamecontainer">
        <BoardGameContainer />
      </Route>
  </div>
  )
}

export default App;

