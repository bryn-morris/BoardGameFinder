import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import BoardGameContainer from "./BoardGameContainer.js";
import LANDING_PAGE from "./Landing_Page"


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
    <NavBar />
      <Route exact path ="/">
        <Header />
        <LANDING_PAGE boardGameArray = {boardGameArray}/>
        <Footer />
      </Route>
      <Route path="/boardgamecontainer">
        <Header />
        <BoardGameContainer {...boardGameContainerPropsObj}/>
        <Footer />
      </Route>
      
  </div>
  )
}

export default App;

