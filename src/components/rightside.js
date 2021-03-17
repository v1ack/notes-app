import {choseNote, selectChosenNote} from "../features/configsSlice"
import {useDispatch, useSelector} from "react-redux"
import {edit, selectNotes, selectTags} from "../features/notesSlice"

export function RightSide() {
    const dispatch = useDispatch()
    const note_id = useSelector(selectChosenNote)
    const tags = useSelector(selectTags)
    const note = useSelector(selectNotes).find(note => note.id === note_id)

    function handleChange(e) {
        dispatch(edit({text: e.target.textContent, id: note_id}))
    }

    function toggleTag(tag) {
        if (note.tags.includes(tag.id)) {
            let tags = note.tags.slice()
            tags.splice(note.tags.findIndex((t) => tag.id === t.id), 1)
            dispatch(edit({tags: tags, id: note_id}))
        } else {
            dispatch(edit({tags: [...note.tags, tag.id], id: note_id}))
        }
    }

    return <aside className="RightSide">
        <button onClick={() => dispatch(choseNote())} className="close-button">x</button>
        <div className="edit-field" onBlur={handleChange} contentEditable={true}
             dangerouslySetInnerHTML={{__html: note.text}}/>
        <div className="taglist">
            {Object.values(tags).map((tag) => <div key={tag.id} className={
                [note.tags.includes(tag.id) ? "active" : "", "Tag"].join(" ")
            } onClick={() => toggleTag(tag)}>{tag.label}</div>)}
            {/*<div> + </div>*/}
        </div>
    </aside>
}
