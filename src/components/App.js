import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BoardGameContainer from "./BoardGameContainer.js";
import LandingPage from "./Landing_Page"


function App() {

  const [boardGameArray, setBoardGameArray] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:4000/boardgames")
            .then(r=>r.json())
            .then(setBoardGameArray)
    },
    [])

    function handleLikeUpdate(updateID, likes){

        function updateForPatch (updatedObj) {
            setBoardGameArray(
                boardGameArray.map((eachBoardGame)=>{
                    if(updateID === eachBoardGame.id) {return updatedObj} 
                    else {return eachBoardGame}
                })
            )
        }

        fetch(`http://localhost:4000/boardgames/${updateID}`,{
            method: "PATCH",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({likes: likes})
        })
            .then(r=>r.json())
            .then(updateForPatch)
    }

    const handleFormSubmission = newFormObject => {
    
        const addBoardGameToState = () => {
            fetch("http://localhost:4000/boardgames", {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(newFormObject)
        })
            .then(r=>r.json())
            .then(rtrnObj =>setBoardGameArray([...boardGameArray, rtrnObj]))
        }
        addBoardGameToState();
    }

    const boardGameContainerPropsObj = {
      boardGameArray: boardGameArray,
      handleLikeUpdate: handleLikeUpdate,
      handleFormSubmission: handleFormSubmission
    }

  return (
  <div>
    <Header />
    <Switch>
      <Route path="/boardgamecontainer">
          <BoardGameContainer {...boardGameContainerPropsObj}/>
      </Route>
      <Route path ="/"> 
          <LandingPage boardGameArray = {boardGameArray}/>
      </Route>
    </Switch>
    <Footer />
  </div>
  )
}

export default App;

