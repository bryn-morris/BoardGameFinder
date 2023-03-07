import React from "react";
import { Link } from "react-router-dom"

function LANDING_PAGE({boardGameArray}){

    return(
    <div>
        {boardGameArray.map((eachBoardGame)=>{
            return(
                <li key = {eachBoardGame.id}>
                    <Link to = {`/${eachBoardGame.id}`}>
                        {eachBoardGame.name}
                    </Link>
                </li>
            )
        })}
    </div>
    )
}

export default LANDING_PAGE;
