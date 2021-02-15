import {Note} from "./note"
import {useDispatch, useSelector} from "react-redux"
import {add, selectNotes} from "../features/notesSlice"
import circle from "./note/circle.svg"

export function NotesList(props) {
    const notes = useSelector(selectNotes)

    return <div className="NotesList">
        {notes.filter(props.filter).map((note) =>
            <Note {...note} key={note.id}/>)
        }
    </div>
}

export function AddNote() {
    const dispatch = useDispatch()

    function handleEnter(e) {
        if (e.key !== "Enter")
            return
        dispatch(add(e.target.value))
        e.target.value = ""
    }

    return <div className="add-note">
        <img src={circle} alt="icon"/>
        <input type="text" onKeyDown={handleEnter} placeholder="Добавить задачу"/>
    </div>
}

export function NotesContainer(props) {
    return <div className="container NotesContainer">
        <NotesList filter={props.filter}/>
        <AddNote/>
    </div>
}
