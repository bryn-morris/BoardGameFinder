import React, {useState} from "react";

function BoardGameForm({handleFormSubmission, setOpen}) {

    const emptyFormObj = {
        name: "",
        image: "",
        likes: "",
        description: "",
        playerCount: "",
        playTime: ""
    }

    const [formObject, setFormObject] = useState(emptyFormObj)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleFormSubmission({...formObject, likes: 0})
        setFormObject(emptyFormObj)
        setOpen(false)
        }
        

    const handleFormInputChange = (e) => {
        setFormObject(
            ()=>{return{...formObject, [e.target.name]: e.target.value}}
    )}

    return (
        <div>
            <form id = "newBoardGameSubmit" onSubmit={handleFormSubmit} className ="ui form">
                <div className="field">
                    <label>Boardgame Name</label>
                    <input onChange={handleFormInputChange} name="name" type="text" value={formObject.name} placeholder="Name"/> <br />
                </div>
                <div className="field">
                    <label>BoardGame Image</label>
                    <input onChange={handleFormInputChange} name="image" type="text" value={formObject.image} placeholder="Image"/> <br />
                </div>
                <div className="field">
                    <label>BoardGame Description</label>
                    <textarea onChange={handleFormInputChange} name="description" type="text" value={formObject.description} placeholder="Description"></textarea>
                </div>
                <div className="field">
                    <label>BoardGame PlayerCount:</label>
                    <input onChange={handleFormInputChange} name="playerCount" type="text" value={formObject.playerCount} placeholder="Player Count"/> <br />
                </div>
                <div className="field">
                    <label>BoardGame PlayTime:</label>
                    <input onChange={handleFormInputChange} name="playTime" type="text" value={formObject.playTime} placeholder="Play Time"/> <br />
                </div>
            </form>
        </div>
    )
}

export default BoardGameForm;