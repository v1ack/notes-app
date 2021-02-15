import {createSlice} from "@reduxjs/toolkit"

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [{
            id: 1,
            text: "Привет мир! 😘",
            complete: false,
            visible: true,
        }, {
            id: 2,
            text: "Приветики",
            complete: false,
            visible: true,
        }, {
            id: 3,
            text: "Сделанная задача",
            complete: true,
            visible: false,
        }],
        id: 4,

    },
    reducers: {
        add: (state, action) => {
            state.notes = [...state.notes, {
                id: state.id++,
                text: action.payload,
                complete: false,
                visible: true,
            }]
        },
        del: (state, action) => {
            let note = state.notes.find(i => i.id === action.payload)
            note.complete = !note.complete
        },
    },
})

export const {add, del} = notesSlice.actions

export const selectNotes = state => state.notes.notes
export default notesSlice.reducer
