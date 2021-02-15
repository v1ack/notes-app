import {Note} from "./note"
import {useDispatch, useSelector} from "react-redux"
import {add, selectNotes} from "../features/notesSlice"
import circle from "./note/circle.svg"
import {useTransition, animated} from "react-spring"

export function NotesList(props) {
    const notes = useSelector(selectNotes)

    const transitions = useTransition(notes.filter(props.filter), item => item.id, {
        from: {opacity: 0, transform: "scale(0)"},
        enter: {opacity: 1, transform: "scale(1)"},
        leave: {opacity: 0, transform: "scale(0)"},
        config: {
            duration: 250,
        },
    })

    return <div className="NotesList">
        {transitions.map(({item, props, key}) =>
            <animated.div key={key} style={props}><Note {...item}/></animated.div>,
        )}
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
