import FormArea from './FormArea';
import Note from './Note';
import EditFormArea from './EditFormArea';
import { useState } from 'react';

function ToDo() {
    const [notes, setNotes] = useState([])
    const [isEditing, setIsEditing] = useState(-1);

    const addNote = (newNote) => {
        setNotes(preNotes => {
            return [...preNotes, newNote]
        })
    }
    const deleteNote = (id) => {
        setNotes(preNotes => {
            return preNotes.filter((note, index) => {
                return index !== id;
            })
        })
    }
    const editNote = (id) => {
        setIsEditing(id)
    }
    const updateEdit = (index) => {
        setIsEditing(index)
    }

    return (
        <div className="Conatiner">
            <h1 className='Header'>To Do List</h1>
            <FormArea onAdd={addNote} />
            <h2>Your to-do notes</h2>
            <div className='noteContainer'>
                {
                    notes.map((todo, index) =>
                        isEditing === index ?
                            <EditFormArea key={index} id={index} todo={todo} notes={notes} updateEdit={updateEdit} />
                            :
                            <Note
                                key={index}
                                id={index}
                                title={todo.title}
                                content={todo.content}
                                delNote={deleteNote}
                                editNote={editNote}
                            />

                    )
                }
            </div>
        </div>
    );
}

export default ToDo;
