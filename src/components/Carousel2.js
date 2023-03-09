import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { Image,} from 'semantic-ui-react'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';


function Carousel2 ({favoriteFilterArray, setShowDetails}) {

    const [indexObj, setIndexObj] = useState({start: 0,end:3})
    const [displayedCards, setDisplayedCards] = useState([])
    const [isArrow, setIsArrow] = useState({leftArrow:true, rightArrow:true})

    useEffect(()=>{
        setDisplayedCards(favoriteFilterArray.slice(indexObj.start,indexObj.end))
    },[favoriteFilterArray, indexObj.start, indexObj.end])

    function rightArrow (eventObj) {
        
        const {start, end} = indexObj

        // const newData =  {start: "", end: ""}
    
        // if (start > favoriteFilterArray.length()) {
        //     newData.start = 0
        // } else if (start < 0) {
        //     newData.start = favoriteFilterArray.length();
        // } else {
        //     newData.start = (start+1)
        // }

        // if (start > favoriteFilterArray.length()) {
        //     newData.end = 0
        // } else if (start < 0) {
        //     newData.end = favoriteFilterArray.length();
        // } else {
        //     newData.end = (end+1)
        // }

        const newStartIndex = start+1; 
        const newEndIndex = end+1;

        setIndexObj({start: newStartIndex, end: newEndIndex});
        setDisplayedCards(favoriteFilterArray.slice(newStartIndex,newEndIndex))

        setShowDetails(false);
    }

    function leftArrow (eventObj) {

        const {start, end} = indexObj

        const newStartIndex = start-1;
        const newEndIndex = end-1;

        setIndexObj({start: newStartIndex, end: newEndIndex});
        setDisplayedCards(favoriteFilterArray.slice(newStartIndex,newEndIndex))

        setShowDetails(false);
    }

    const handleCardClick = () => {
        setShowDetails(true);
    }

    return(
        <div className="ui grid middle aligned carousel">
            <div className = "ui centered grid container">
                <div className="column one wide centered middle aligned">
                    <div onClick = {leftArrow}><MdOutlineArrowBackIosNew size={70}/></div>
                </div>
                        {displayedCards.map((eBO)=>{
                            return(
                                <div key = {eBO.id} className ="column four wide centered middle aligned">
                                    <Link to = {`/${eBO.id}`}>
                                        <Image.Group size="medium" onClick={handleCardClick}>
                                            <Image src={eBO.image} alt = {eBO.name} wrapped ui={false} />
                                        </Image.Group>
                                    </Link>
                                </div>
                                )})
                        }
                <div className ="column one wide centered middle aligned">
                    <div onClick = {rightArrow}><MdOutlineArrowForwardIos size={70}/></div>
                </div>
            </div>
        </div>
    )

}

export default Carousel2;