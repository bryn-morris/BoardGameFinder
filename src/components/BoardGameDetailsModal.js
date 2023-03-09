import React from "react";
import {Modal, Image, Icon, Header} from 'semantic-ui-react'

function BoardGameDetailsModal ({boardGameModalObj, setIsModalOpen, isModalOpen, handleFavoriteUpdate}) {

// possible function for hitting favorite button on details card
// and having it update db and dom
// const handleLikeClick = (eventObj) => {

//     handleFavoriteUpdate()

// }

return(
    <div className="modalContainer">         
        <Modal
            onClose={() => setIsModalOpen(false)}
            open={isModalOpen}
            size= 'large'
        >
        <Modal.Header>{`${boardGameModalObj.name}`}</Modal.Header>
            <Modal.Content>
                 <Image size = 'large' src = {boardGameModalObj.image} centered/>
                 <Icon name='users' size = "large" />{boardGameModalObj.playerCount}
                 <Icon name='clock' size = "large"/>{boardGameModalObj.playTime}
                 <Header as='h3' block>
                    {boardGameModalObj.longdescription}
                 </Header>
            </Modal.Content>
        </Modal>
    </div>)
}

export default BoardGameDetailsModal