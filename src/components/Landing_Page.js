import React from "react";
import { Route, useRouteMatch} from "react-router-dom"
import BoardGameList from "./BoardGameList";
import Carousel from "./Carousel";

function LandingPage({boardGameArray}){

    const match = useRouteMatch();

    return(
    <div>
       <BoardGameList boardGameArray={boardGameArray}/>
       <Route path = {`${match.url}:eBGID`}>
         <Carousel boardGameArray = {boardGameArray}/>
       </Route>
    </div>
    )
}

export default LandingPage;
