import React from "react"
import { useParams } from "react-router-dom";


function Carousel ({boardGameArray}) {

    const {eBGID} = useParams();

    return(
        <div name="TESTER">
            {/* <h1>Is this working?</h1> */}
            {boardGameArray[boardGameArray.findIndex(obj => obj.id === parseInt(eBGID))].name}
        </div>
    )
}

export default Carousel