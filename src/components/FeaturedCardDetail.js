import React, {useEffect} from "react"
import { useParams } from "react-router-dom";


function FeaturedCardDetail ({boardGameArray}) {

    console.log(boardGameArray)

    const {eBGID} = useParams();

    useEffect(()=>{
        


    },[boardGameArray])

    

    return(
        <div name="TESTER">
            {boardGameArray[boardGameArray.findIndex(obj => obj.id === parseInt(eBGID))].name}
        </div>
    )
}

export default FeaturedCardDetail