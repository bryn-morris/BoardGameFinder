import React, {useState} from "react";
import { Route, useRouteMatch} from "react-router-dom"
import Carousel2 from "./Carousel2";
import FeaturedCardDetail from "./FeaturedCardDetail";
import { Header } from 'semantic-ui-react'


function LandingPage({favoritedArray, paragraphBreaker}){

    const [showDetails, setShowDetails] = useState(false)

    const match = useRouteMatch();
    
    return(
    <div>
      <Header as="h1" textAlign="center" className="landingPageHeader">
        Your Favorite Board Games
        <Header.Subheader>
            Here you can find all of your favorite games!
        </Header.Subheader>
      </Header>
      <Carousel2 favoritedArray={favoritedArray} setShowDetails={setShowDetails}/>

       <Route path = {`${match.url}:eBGID`}>
         <FeaturedCardDetail showDetails={showDetails} paragraphBreaker = {paragraphBreaker}/>
       </Route>
    </div>
    )
}

export default LandingPage;
