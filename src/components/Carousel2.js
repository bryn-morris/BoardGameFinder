import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { Card, Icon, Image, grid} from 'semantic-ui-react'

function Carousel2 ({boardGameArray}) {

    const [indexObj, setIndexObj] = useState({start: 0,end:3})
    const [displayedCards, setDisplayedCards] = useState([])

    useEffect(()=>{
        setDisplayedCards(boardGameArray.slice(indexObj.start,indexObj.end))
    },[boardGameArray, indexObj.start, indexObj.end])

    function rightArrow (eventObj) {
        
        const {start, end} = indexObj

        const newStartIndex = start+1; 
        const newEndIndex = end+1;

        setIndexObj({start: newStartIndex, end: newEndIndex});
        setDisplayedCards(boardGameArray.slice(newStartIndex,newEndIndex))
    }

    function leftArrow (eventObj) {

        const {start, end} = indexObj

        const newStartIndex = start-1;
        const newEndIndex = end-1;

        setIndexObj({start: newStartIndex, end: newEndIndex});
        setDisplayedCards(boardGameArray.slice(newStartIndex,newEndIndex))
    }

    return(
        <div>
            <button onClick = {leftArrow}>LeftArrow</button>
            {displayedCards.map((eBO)=>{
                return(
                    <div key = {eBO.id} className = "ui grid container">
                        <Link to = {`/${eBO.id}`}>
                            <Card className="three wide column" >
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
                                <Card.Content extra>
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