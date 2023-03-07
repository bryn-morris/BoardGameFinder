import React from "react"
import { useParams } from "react-router-dom"


function Carousel ({boardGameArray}) {

const params = useParams();
  console.log(params);

return(<div>Is THIS working?</div>)
}

export default Carousel