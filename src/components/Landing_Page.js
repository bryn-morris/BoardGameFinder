import React from "react";
import { Route, useRouteMatch} from "react-router-dom"
import BoardGameList from "./BoardGameList";
import Carousel from "./Carousel";

function LANDING_PAGE({boardGameArray}){

    const match = useRouteMatch();
    console.log(match);

    return(
    <div>
       <BoardGameList boardGameArray={boardGameArray}/>
       <Route path = {`${match.url}/:eBGID`}>
        <Carousel boardGameArray = {boardGameArray}/>
       </Route>
       
    </div>
    )
}

export default LANDING_PAGE;
