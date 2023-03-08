import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { Image,} from 'semantic-ui-react'

function Carousel2 ({favoriteFilterArray}) {

    console.log(favoriteFilterArray)

    const [indexObj, setIndexObj] = useState({start: 0,end:3})
    const [displayedCards, setDisplayedCards] = useState([])

    useEffect(()=>{
        setDisplayedCards(favoriteFilterArray.slice(indexObj.start,indexObj.end))
    },[favoriteFilterArray, indexObj.start, indexObj.end])

    function rightArrow (eventObj) {
        
        const {start, end} = indexObj

        const newStartIndex = start+1; 
        const newEndIndex = end+1;

        setIndexObj({start: newStartIndex, end: newEndIndex});
        setDisplayedCards(favoriteFilterArray.slice(newStartIndex,newEndIndex))
    }

    function leftArrow (eventObj) {

        const {start, end} = indexObj

        const newStartIndex = start-1;
        const newEndIndex = end-1;

        setIndexObj({start: newStartIndex, end: newEndIndex});
        setDisplayedCards(favoriteFilterArray.slice(newStartIndex,newEndIndex))
    }

    return(
        <div>
            
            <div className = "ui centered column grid">
                <div className = "column">
                    <button onClick = {leftArrow}>LeftArrow</button>
                </div>
                        {displayedCards.map((eBO)=>{
                            return(
                                <div key = {eBO.id}>
                                    <Link to = {`/${eBO.id}`}>
                                        <Image.Group className = "column" size = "large">
                                            <Image src={eBO.image} alt = {eBO.name} wrapped ui={false} className = "ui segment" />
                                        </Image.Group>
                                    </Link>
                                </div>
                                )})
                        }
                <div className = "column">
                    <button onClick = {rightArrow}>Right Arrow</button>
                </div>
            </div>
        </div>
    )

}

export default Carousel2;