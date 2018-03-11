import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';
import styles from './Notes.css';


const Notes = ({ notes, laneId, editNote, updateNote, deleteNote, moveWithinLane }) => {
    return (<ul className="notes">{notes.map((note) =>
        <Note
            id={note.id}
            key={note.id}
            moveWithinLane={moveWithinLane}
            laneId={laneId}            
            _id={note._id}
            editing={note.editing}
        >
            <Edit
                editing={note.editing}
                value={note.task}
                onValueClick={() => editNote(note.id)}
                onUpdate={(task) => updateNote({
                    ...note,
                    task,
                    editing: false,
                }
                )}
                onDelete={() => deleteNote(note.id, laneId)}
            />
        </Note>
    )}</ul>);
};

Notes.propTypes = {
    deleteNote: PropTypes.func,
    updateNote: PropTypes.func,
    laneId: PropTypes.string,
    editNote: PropTypes.func,
    notes: PropTypes.array,
    moveWithinLane: PropTypes.func,
};

export default Notes;