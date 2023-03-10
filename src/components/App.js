import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BoardGameContainer from "./BoardGameContainer.js";
import LandingPage from "./Landing_Page"


function App() {

  const [boardGameArray, setBoardGameArray] = useState([]);
  const [favoritedArray, setFavoritedArray] = useState([])

    useEffect(()=>{


        fetch("http://localhost:4000/boardgames")
            .then(r=>r.json())
            .then(setBoardGameArray)
            
    },
    [])

    useEffect(() => {
        
        fetch("http://localhost:4000/boardgames")
            .then(r=>r.json())
            .then(boardGameData => {
                setFavoritedArray( ()=>{
                    const newFavoritedArray = boardGameData.filter(eachBoardGame=>eachBoardGame.favorited)
                    newFavoritedArray.unshift()
                    
                    return newFavoritedArray
                })
            })
        },[])


     
    
    function handleFavoriteUpdate(updateID, favoriteBoolean){

        fetch(`http://localhost:4000/boardgames/${updateID}`,{
            method: "PATCH",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({favorited: favoriteBoolean})
        })
        
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

    function paragraphBreaker (string) {
        return string.split("\n")
    }


    const [searchString, setSearchString] = useState("");

    const searchedValue = aNewStringFromSearchBar => {
      console.log(aNewStringFromSearchBar);
      setSearchString(aNewStringFromSearchBar);
    }
  
    const searchedBoardGames = boardGameArray.filter(eachBO => {
      return eachBO.name.toLowerCase().includes(searchString.toLowerCase());
    })


    const boardGameContainerPropsObj = {
      boardGameArray: searchedBoardGames,
      handleFavoriteUpdate: handleFavoriteUpdate,
      handleFormSubmission: handleFormSubmission,
      paragraphBreaker: paragraphBreaker
    }

    const landingPagePropsObj = {
        favoritedArray : favoritedArray,
        paragraphBreaker: paragraphBreaker
    }


  return (
  <div className="siteContainer">
    <div className ="otherSiteContainer">
        <Header searchedValue={searchedValue}/>
        <Switch>
            <Route path="/boardgamecontainer">
                <BoardGameContainer {...boardGameContainerPropsObj}/>
            </Route>
            <Route path ="/"> 
                <LandingPage {...landingPagePropsObj}/>
            </Route>
        </Switch>
    </div>
    <Footer />
  </div>
  )
}

export default App;

