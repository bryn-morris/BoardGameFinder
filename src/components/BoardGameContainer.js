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

    return(
        <div>
            {boardGameArray.map((eBO) => {
                return (
                    <BoardGameCard key = {eBO.id} eBO = {eBO}/>
                )
            }
            )}
        </div>
    );
}


export default BoardGameContainer;