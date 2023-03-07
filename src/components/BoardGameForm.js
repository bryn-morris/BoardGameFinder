import React, {useState} from "react";

function BoardGameForm({handleFormSubmission}) {

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
        }
        

    const handleFormInputChange = (e) => {
        setFormObject(
            ()=>{return{...formObject, [e.target.name]: e.target.value}}
    )}

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleFormInputChange} name="name" type="text" value={formObject.name} placeholder="Name"/>
                <input onChange={handleFormInputChange} name="image" type="text" value={formObject.image} placeholder="Image"/>
                <input onChange={handleFormInputChange} name="description" type="text" value={formObject.description} placeholder="Description"/>
                <input onChange={handleFormInputChange} name="playerCount" type="text" value={formObject.playerCount} placeholder="Player Count"/>
                <input onChange={handleFormInputChange} name="playTime" type="text" value={formObject.playTime} placeholder="Play Time"/>
                <button type="submit">Form Submit</button>
            </form>
        </div>
    )
}

export default BoardGameForm;