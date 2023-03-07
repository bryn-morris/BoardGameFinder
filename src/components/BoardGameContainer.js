import React from "react";
import BoardGameCard from "./BoardGameCard"
import BoardGameForm from "./BoardGameForm"


function BoardGameContainer ({boardGameArray, handleFormSubmission, handleLikeUpdate }) {

    return(
        <div>
            <BoardGameForm handleFormSubmission={handleFormSubmission}/>
            {boardGameArray.map((eBO) => {
                return (
                    <BoardGameCard 
                        key = {eBO.id} 
                        eBO = {eBO}
                        handleLikeUpdate = {handleLikeUpdate}
                    />
                )
            }
            )}
        </div>
    );
}


export default BoardGameContainer;