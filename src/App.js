import React from "react"
import "./App.css"
import {NotesContainer} from "./components/list"
import {LeftSide} from "./components/leftside"

function App() {
    return <main className="App">
        <LeftSide/>
        <NotesContainer/>
    </main>
}

export default App
