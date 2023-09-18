import React, { useState } from "react";

function FormArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote(preNote => {
            return {
                ...preNote,
                [name]: value
            }
        })
    }
    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitNote}>
                <textarea
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange} />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={note.content}
                    onChange={handleChange}
                    rows={2}
                    required />
                <button type="submit">
                    <span className="material-icons-outlined">add</span>
                </button>
            </form>
        </div>
    )
}

export default FormArea;
