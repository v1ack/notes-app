import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {
    del, selectTags,
} from "../features/notesSlice"
import {Tick} from "./note/tick"
import {choseNote} from "../features/configsSlice"

export function Note(props) {
    const dispatch = useDispatch()
    const tags = useSelector(selectTags)

    return <div className="Note clickable" onClick={() => dispatch(choseNote(props.id))}>
        <Tick ticked={props.completed}
              onClick={() => dispatch(del(props.id))}/>
        <span className={[
            "Note-text",
            (props.completed ? "complete" : ""),
        ].join(" ")}>{props.text}</span>
        {props.tags.map(tag => <span key={tag} className="Tag">{tags[tag].label}</span>)}
    </div>
}
