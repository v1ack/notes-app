import React from "react"
import {useDispatch} from "react-redux"
import {
    del,
} from "../features/notesSlice"
import tick from "./note/tick.svg"
import circle from "./note/circle.svg"

export function Note(props) {
    const dispatch = useDispatch()

    return <div className="Note clickable">
        <img onClick={() => dispatch(del(props.id))}
             src={props.complete ? tick : circle} alt="icon"/>
        <span className={
            (props.complete ? "complete" : "")
        }>{props.text}</span>
    </div>
}
