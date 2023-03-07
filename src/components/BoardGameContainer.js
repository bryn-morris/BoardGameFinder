import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import BoardGameCard from "./BoardGameCard"
import BoardGameForm from "./BoardGameForm"
import Search from "./Search"

function BoardGameContainer () {

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

    return(
        <div>
            {boardGameArray.map((eBO) => {
                return (
                    <BoardGameCard 
                        key = {eBO.id} 
                        eBO = {eBO}
                        handleLikeUpdate = {handleLikeUpdate}
                    />
                )
            }
            )}
        </div>
    );
}


export default BoardGameContainer;