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
      </Route>
      <Route path="/boardgamecontainer">
        <BoardGameContainer />
      </Route>
      <Footer />
  </div>
  )
}

export default App;

