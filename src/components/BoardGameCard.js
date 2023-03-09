import React, {useState} from "react";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

function BoardGameCard ({eBO, handleFavoriteUpdate, handleDetailsObject, setIsModalOpen, paragraphBreaker}) {

    const [toggleFavorited, setToggleFavorited] = useState(eBO.favorited)

    const handleFavoriteClick = (eventObj) => {
        const isFavorited = !toggleFavorited;
        setToggleFavorited(isFavorited)
        handleFavoriteUpdate(eBO.id, isFavorited)
    }

    

    function handleDetailsClick () {

        handleDetailsObject(eBO.id)
        setIsModalOpen(true)
    }

    return (
                    <Card>
                        <Image 
                            label={{ as: 'a', corner: 'right', icon: toggleFavorited ? ("heart") : ("heart outline") }}
                            src={eBO.image} 
                            alt = {eBO.name} 
                            wrapped
                            onClick = {handleFavoriteClick} 
                        />
                        <Card.Content>
                            <Card.Header>{eBO.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                {paragraphBreaker(eBO.longdescription)[0]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p>
                                <Icon name='users' />
                                {eBO.playerCount}
                            </p>
                            <p>
                                <Icon name='clock'/>
                                {eBO.playTime}
                            </p>
                            <p>
                                <Button onClick = {handleDetailsClick}>More Details</Button>
                            </p>
                        </Card.Content>
                    </Card>
    )
}

export default BoardGameCard;