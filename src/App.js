import React from "react"
import "./App.css"
import {NotesContainer} from "./components/list"
import {LeftSide} from "./components/leftside"
import {useSelector} from "react-redux"
import {selectChosenNote} from "./features/configsSlice"
import {RightSide} from "./components/rightside"

function App() {
    const chosenNote = useSelector(selectChosenNote)

    return <main className="App">
        <LeftSide/>
        <NotesContainer/>
        {chosenNote && <RightSide/>}
    </main>
}

export default App
