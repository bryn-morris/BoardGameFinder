import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";


function FeaturedCardDetail () {

    const {eBGID} = useParams();

    const [game, setGame] = useState({})

    

    useEffect(()=>{
        
        fetch (`http://localhost:4000/boardgames/${eBGID}`)
            .then(r=>r.json())
            .then(setGame)

    },[eBGID])

    console.log(game)

    return(
        <div name="TESTER">
            {game.name}
        </div>
    )
}

export default FeaturedCardDetail