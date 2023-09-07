import React, { useState } from "react";

function EditFormArea(props) {

    const [updateNote, setUpdateNote] = useState({
        title: props.todo.title,
        content: props.todo.content
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdateNote(preNote => {
            return {
                ...preNote,
                [name]: value
            }
        })
    }

    const submitNote = (event) => {
        event.preventDefault();
        let newNoteId = props.notes[props.id]
        newNoteId.title = updateNote.title
        newNoteId.content = updateNote.content
        props.updateEdit(-1)
    }

    return (
        <div>
            <form onSubmit={submitNote}>
                <textarea
                    name="title"
                    placeholder="Title"
                    value={updateNote.title}
                    onChange={handleChange} />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={updateNote.content}
                    onChange={handleChange}
                    rows={3}
                    required />
                <button type="submit">
                    update
                </button>
            </form>
        </div>
    )
}

export default EditFormArea;