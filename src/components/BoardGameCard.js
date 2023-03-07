import React, {useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {GrGroup} from "react-icons/gr"
import {FaRegClock} from "react-icons/fa"

function BoardGameCard ({eBO, handleLikeUpdate}) {

    const [isLiked, setIsLiked] = useState(false)

    const toggleLikeClick = (eventObj) => {
        setIsLiked(isLiked=>(!isLiked))
        isLiked ? handleLikeUpdate(eBO.id, eBO.likes-1) : handleLikeUpdate(eBO.id, eBO.likes+1)
    }

    return (
        <div className = "boardGameCard">
            <img src={eBO.image} alt = {eBO.name} className = "cardImage"/>
            <h3>{eBO.name}</h3>
            <p>
                {isLiked ? (<AiFillHeart onClick = {toggleLikeClick}/>) : (<AiOutlineHeart onClick = {toggleLikeClick}/>)}
                {eBO.likes}
                {(eBO.likes === 1) ? " like" : " likes" }
            </p>
            <p><GrGroup /> {eBO.playerCount}</p>
            <p><FaRegClock /> {eBO.playTime}</p>
        </div>
    )
}

export default BoardGameCard;

// Possibly Look towards replacing the icon in the ternary with a more thematic representation 
