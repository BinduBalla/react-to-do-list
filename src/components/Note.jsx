import React from "react";

function Note(props) {
    const handleClick = () => {
        props.delNote(props.id)
    }
    const handleEdit = () => {
        props.editNote(props.id)
    }
    return (
        <div className="note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <div className="overlay">
                <button onClick={handleEdit}><span className="material-icons-outlined">edit</span></button>
                <button onClick={handleClick}><span className="material-icons-outlined">delete</span></button>
            </div>
        </div>
    )
}
export default Note;