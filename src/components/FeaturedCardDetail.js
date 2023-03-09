import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { Header } from 'semantic-ui-react'



function FeaturedCardDetail ({showDetails, paragraphBreaker}) {

    const {eBGID} = useParams();

    const [game, setGame] = useState({})

    

    useEffect(()=>{
        
        fetch (`http://localhost:4000/boardgames/${eBGID}`)
            .then(r=>r.json())
            .then(setGame)

    },[eBGID])


    console.log(showDetails);

    return(
        <div className="featuredCardInfo">
            <Header as="h3" textAlign="center" className="featuredCardHeader">
                {showDetails ? <div>{game.name}<br /><h4>{paragraphBreaker(game.longdescription)[0]}</h4></div> : ""}
            </Header>
        </div>
    )
}

export default FeaturedCardDetail
