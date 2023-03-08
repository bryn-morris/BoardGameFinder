import React from "react";
import { Route, useRouteMatch} from "react-router-dom"
import Carousel2 from "./Carousel2";
import FeaturedCardDetail from "./FeaturedCardDetail";


function LandingPage({favoriteFilterArray}){

    const match = useRouteMatch();
    return(
    <div>
      <Carousel2 favoriteFilterArray={favoriteFilterArray}/>
       {/* <Carousel boardGameArray={boardGameArray}/> */}
       <Route path = {`${match.url}:eBGID`}>
         <FeaturedCardDetail />
       </Route> 
    </div>
    )
}

export default LandingPage;
