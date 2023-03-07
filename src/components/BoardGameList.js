import React from "react";
import {Link} from "react-router-dom"

function BoardGameList ({boardGameArray}) {

return (
    <div>
        {boardGameArray.map((eachBoardGame)=>{
            return(
                <li key = {eachBoardGame.id}>
                    <Link to = {`/${eachBoardGame.id}`}>
                        {eachBoardGame.name}
                    </Link>
                </li>
            )}
        )}
    </div>
    )
}
    

export default BoardGameList;