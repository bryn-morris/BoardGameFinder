import React from "react";
import BoardGameCard from "./BoardGameCard"
import BoardGameForm from "./BoardGameForm"
import { Button, Modal, Card} from 'semantic-ui-react'
import {MdPostAdd} from "react-icons/md"


function BoardGameContainer ({boardGameArray, handleFormSubmission, handleFavoriteUpdate}) {

    const [open, setOpen] = React.useState(false)

    return(
        <div className="modalParent">
            <h1>Testing</h1>
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
            <div className = "cardContainer">
                <Card.Group itemsPerRow={4}>
                    {boardGameArray.map((eBO) => {
                        return (
                            <BoardGameCard 
                                key = {eBO.id} 
                                eBO = {eBO}
                                handleFavoriteUpdate = {handleFavoriteUpdate}
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