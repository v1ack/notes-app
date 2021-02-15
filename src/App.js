import React, {useState} from "react"
import "./App.css"
import {NotesContainer} from "./components/list"
import {LeftSide} from "./components/leftside"

function App() {
    const [filter, setFilter] = useState(() => () => true)
    return <main className="App">
        <LeftSide setFilter={setFilter}/>
        <NotesContainer filter={filter}/>
    </main>
}

export default App
