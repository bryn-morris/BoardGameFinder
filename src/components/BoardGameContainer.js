import React, {useState} from "react";
import BoardGameCard from "./BoardGameCard"
import BoardGameForm from "./BoardGameForm"
import { Button, Modal, Card} from 'semantic-ui-react'
import {MdPostAdd} from "react-icons/md"
import BoardGameDetailsModal from './BoardGameDetailsModal'


function BoardGameContainer ({boardGameArray, handleFormSubmission, handleFavoriteUpdate, paragraphBreaker}) {

    const [open, setOpen] = useState(false)
    const [boardGameModalObj, setBoardGameModalObj] = useState(
        {
            id: 0,
            name: "",
            image: "",
            likes: 0,
            longdescription: "",
            playerCount: "",
            playTime: "",
            favorited: false
        }
        )
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleDetailsObject(BGMID) {
        setBoardGameModalObj(boardGameArray.find(eachObj => eachObj.id === BGMID))
    }

    return(
        <div className="modalParent">
            <div className="modalContainer">         
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button className = "big ui button modalbutton"><MdPostAdd size={40}/></Button>}
                    size= 'small'
                >
                <Modal.Header>Add a Board Game!</Modal.Header>
                    <Modal.Content>
                        <BoardGameForm setOpen = {setOpen}handleFormSubmission={handleFormSubmission} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            form="newBoardGameSubmit" 
                            type="submit" 
                        >
                            Submit
                        </Button>
                    </Modal.Actions> 
                </Modal>
            </div>
            <div>
                <BoardGameDetailsModal 
                    boardGameModalObj={boardGameModalObj} 
                    setIsModalOpen={setIsModalOpen} 
                    isModalOpen={isModalOpen}
                    handleFavoriteUpdate = {handleFavoriteUpdate}
                    paragraphBreaker={paragraphBreaker}
                />
            </div>
            <div className = "cardContainer">
                <Card.Group itemsPerRow={4}>
                    {boardGameArray.map((eBO) => {
                        return (
                            <BoardGameCard 
                                key = {eBO.id} 
                                eBO = {eBO}
                                handleFavoriteUpdate = {handleFavoriteUpdate}
                                handleDetailsObject = {handleDetailsObject}
                                setIsModalOpen = {setIsModalOpen}
                                paragraphBreaker = {paragraphBreaker}
                            />
                        )
                    }
                    )}
                </Card.Group>
            </div>
        </div>
    );
}


export default BoardGameContainer;