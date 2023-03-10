import React from "react";
import {Modal, Image, Icon, Header, Segment} from 'semantic-ui-react'

function BoardGameDetailsModal ({boardGameModalObj, setIsModalOpen, isModalOpen, handleFavoriteUpdate, paragraphBreaker}) {

// possible function for hitting favorite button on details card
// and having it update db and dom
// const handleLikeClick = (eventObj) => {

//     handleFavoriteUpdate()

// }

const paragraphArray = paragraphBreaker(boardGameModalObj.longdescription)




return(
    <div className="modalContainer">         
        <Modal
            onClose={() => setIsModalOpen(false)}
            open={isModalOpen}
            size= 'large'
        >
        <Modal.Header>{`${boardGameModalObj.name}`}</Modal.Header>
            <Modal.Content>
                 <Image size = 'huge' centered src = {boardGameModalObj.image}/>
                 <Icon name='users' size = "large" />{boardGameModalObj.playerCount}
                 <Icon name='clock' size = "large"/>{boardGameModalObj.playTime}
                 <Header as="h3" attached='top'> Description</Header>
                 <Segment attached>
                    {paragraphArray.map(eachStr =>  <p key={eachStr[0] + eachStr[1] + eachStr[2]}>{eachStr}</p>)}
                 </Segment>
            </Modal.Content>
        </Modal>
    </div>)
}

export default BoardGameDetailsModal