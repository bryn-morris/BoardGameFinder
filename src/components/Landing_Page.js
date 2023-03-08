import React from "react";
import { Route, useRouteMatch} from "react-router-dom"
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import FeaturedCardDetail from "./FeaturedCardDetail";


function LandingPage({boardGameArray}){

    const match = useRouteMatch();
    return(
    <div>
      <Carousel2 boardGameArray={boardGameArray}/>
       {/* <Carousel boardGameArray={boardGameArray}/> */}
       <Route path = {`${match.url}:eBGID`}>
         <FeaturedCardDetail boardGameArray = {boardGameArray}/>
       </Route> 
    </div>
    )
}

export default LandingPage;
