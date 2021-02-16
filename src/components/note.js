import React from "react"
import {useDispatch} from "react-redux"
import {
    del,
} from "../features/notesSlice"
import {Tick} from "./note/tick"

export function Note(props) {
    const dispatch = useDispatch()

    return <div className="Note clickable">
        <Tick ticked={props.complete}
              onClick={() => dispatch(del(props.id))}/>
        <span className={
            (props.complete ? "complete" : "")
        }>{props.text}</span>
    </div>
}
