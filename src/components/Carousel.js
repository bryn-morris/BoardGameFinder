import React from "react";
import {Link} from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel ({boardGameArray}) {

    const handleDragStart = (e) => e.preventDefault();
    
    const items = boardGameArray.map((eBG)=>{return(
      <div key = {eBG.id}>
        <img src={eBG.image} onDragStart={handleDragStart} role="presentation" alt="presentation" />    
        <Link to = {`/${eBG.id}`}>
            <button>MODAL SHOW</button>
        </Link>
      </div>
      
    )})

return (<div><AliceCarousel mouseTracking items={items} /></div>)
}
    

export default Carousel;