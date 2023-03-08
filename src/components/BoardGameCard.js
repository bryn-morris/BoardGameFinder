import React, {useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {GrGroup} from "react-icons/gr"
import {FaRegClock} from "react-icons/fa"
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

function BoardGameCard ({eBO, handleLikeUpdate}) {

    const [isLiked, setIsLiked] = useState(false)

    const toggleLikeClick = (eventObj) => {
        setIsLiked(isLiked=>(!isLiked))
        isLiked ? handleLikeUpdate(eBO.id, eBO.likes-1) : handleLikeUpdate(eBO.id, eBO.likes+1)
    }

    return (
        <Card className="four wide column" fluid>
            <Image 
                fluid
                label={{ as: 'a', corner: 'right', icon: 'heart'}}
                src={eBO.image} 
                alt = {eBO.name} 
                wrapped ui={false} 
            />
            <Card.Content>
                <Card.Header>{eBO.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra fluid>
                <a>
                    <Icon name='users' />
                    {eBO.playerCount}
                </a>
                <a>    </a>
                <a>
                    <Icon name='clock'/>
                    {eBO.playTime}
                </a>
            </Card.Content>
        </Card>



        // <div className = "boardGameCard">
        //     <img src={eBO.image} alt = {eBO.name} className = "cardImage"/>
        //     <h3>{eBO.name}</h3>
        //     <p>
        //         {isLiked ? (<AiFillHeart onClick = {toggleLikeClick}/>) : (<AiOutlineHeart onClick = {toggleLikeClick}/>)}
        //         {eBO.likes}
        //         {(eBO.likes === 1) ? " like" : " likes" }
        //     </p>
        //     <p><GrGroup /> {eBO.playerCount}</p>
        //     <p><FaRegClock /> {eBO.playTime}</p>
        // </div>
    )
}

export default BoardGameCard;

// Possibly Look towards replacing the icon in the ternary with a more thematic representation 
