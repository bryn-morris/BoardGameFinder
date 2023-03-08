import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { Card, Icon, Image, grid} from 'semantic-ui-react'

function Carousel2 ({boardGameArray}) {

    const [indexObj, setIndexObj] = useState({start: 0,end:3})
    const [displayedCards, setDisplayedCards] = useState(boardGameArray)


    console.log(displayedCards)

    useEffect(()=>{
        setDisplayedCards(boardGameArray)
    },[boardGameArray])

    function rightArrow (eventObj) {
        
        const {start, end} = indexObj
        setIndexObj({start: start+1, end: end+1});
        setDisplayedCards(boardGameArray.slice(indexObj.start,indexObj.end))
    }

    function leftArrow (eventObj) {
        const {start, end} = indexObj
        setIndexObj({start: start-1, end: end-1});
        setDisplayedCards(boardGameArray.slice(indexObj.start,indexObj.end))
    }

    return(
        <div>
            <button onClick = {leftArrow}>LeftArrow</button>
            {displayedCards.map((eBO)=>{
                return(
                    <div className = "ui grid container">
                        <Link to = {`/${eBO.id}`}>
                            <Card className="three wide column" fluid>
                            <Image src={eBO.image} alt = {eBO.name} wrapped ui={false} />
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
                                    <p>
                                        <Icon name='users' />
                                        {eBO.playerCount}
                                    </p>
                                    <p>
                                    <Icon name='clock'/>
                                    {eBO.playTime}
                                    </p>
                                </Card.Content>
                            </Card>
                        </Link>
                    </div>
                )})}
                <button onClick = {rightArrow}>Right Arrow</button>
        </div>
    )

}

export default Carousel2;