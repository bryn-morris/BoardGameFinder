import React, {useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {GrGroup} from "react-icons/gr"
import {FaRegClock} from "react-icons/fa"

function BoardGameCard ({eBO}) {

    const [isLiked, setIsLiked] = useState("false")

    const toggleLikeClick = (eventObj) => {
    
        setIsLiked(isLiked=>(!isLiked))

    }

    return (
        <div>
            <img src={eBO.image} alt = {eBO.name}/>
            <h3>{eBO.name}</h3>
            <p>
                {isLiked ? (<AiFillHeart onClick = {toggleLikeClick}/>) : (<AiOutlineHeart onClick = {toggleLikeClick}/>)} {eBO.likes} likes
            </p>
            <p><GrGroup /> {eBO.playerCount}</p>
            <p><FaRegClock /> {eBO.playTime}</p>
        </div>
    )
}

export default BoardGameCard;

// Possibly Look towards replacing the icon in the ternary with a more thematic representation 
//<AiFillHeart/> {eBO.likes} likes
// (<AiOutlineHeart /> {eBO.likes} likes)