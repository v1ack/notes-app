import {createSlice} from "@reduxjs/toolkit"
import initList from "./initList.json"

export const notesSlice = createSlice({
    name: "notes",
    initialState: initList,
    reducers: {
        add: (state, action) => {
            state.notes = [...state.notes, {
                id: state.id++,
                text: action.payload.text,
                completed: false,
                tags: action.payload.tags || [],
            }]
        },
        del: (state, action) => {
            let note = state.notes.find(i => i.id === action.payload)
            note.completed = !note.completed
        },
        edit: (state, action) => {
            let note = state.notes.find(i => i.id === action.payload.id)
            if ("text" in action.payload)
                note.text = action.payload.text
            if ("tags" in action.payload)
                note.tags = action.payload.tags
        },
    },
})

export const {add, del, edit} = notesSlice.actions

export const selectNotes = state => state.notes.notes
export const selectTags = state => state.notes.tags
export default notesSlice.reducer
