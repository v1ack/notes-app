import {Note} from "./note"
import {useDispatch, useSelector} from "react-redux"
import {add, selectNotes} from "../features/notesSlice"
import {useTransition, animated} from "react-spring"
import {selectFilter, filtered, selectBackground} from "../features/configsSlice"
import {Tick} from "./note/tick"

export function NotesList() {
    const notes = useSelector(selectNotes)
    const filter = useSelector(selectFilter)

    const transitions = useTransition(filtered(notes, filter), item => item.id, {
        from: {opacity: 0, transform: "scale(0)"},
        enter: {opacity: 1, transform: "scale(1)"},
        leave: {opacity: 0, transform: "scale(0)", position: "absolute", width: "100%"},
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
    const filter = useSelector(selectFilter)

    function handleEnter(e) {
        if (e.key !== "Enter" || !e.target.value)
            return
        dispatch(add({text: e.target.value, tags: filter.tags}))
        e.target.value = ""
    }

    return <div className="add-note">
        <Tick/>
        <input type="text" onKeyDown={handleEnter} placeholder="Добавить задачу"/>
    </div>
}

export function NotesContainer() {
    const background = useSelector(selectBackground)
    const style = {
        background: `linear-gradient(45deg, ${background[0]}, ${background[1]})`,
    }

    return <div className="container NotesContainer" style={style}>
        <NotesList/>
        <AddNote/>
    </div>
}
