import {createSlice} from "@reduxjs/toolkit"

const defaultFilter = {
    tags: undefined,
    completed: true,
    uncompleted: true,
}

export const configsSlice = createSlice({
    name: "configs",
    initialState: {
        filter: {
            tags: undefined,
            completed: false,
            uncompleted: true,
        },
        background: ["#654ea3", "#eaafc8"],
        chosenNote: undefined,
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = {...defaultFilter, ...action.payload.filter}
            state.background = action.payload.background
        },
        choseNote: (state, action) => {
            state.chosenNote = action.payload
        },
    },
})

export const {setFilter, choseNote} = configsSlice.actions

export const selectFilter = state => state.configs.filter
export const selectBackground = state => state.configs.background
export const selectChosenNote = state => state.configs.chosenNote
export default configsSlice.reducer

/**
 * Filter function
 * @param list {array<Note>}
 * @param filters {array}
 * @returns {array<Note>}
 */
export function filtered(list, filters) {
    return list.filter(note => {
        let res = true
        // Filter notes with all tags in filter
        if (filters.tags)
            res = filters.tags.map(tag => note.tags.includes(tag)).every(v => v)

        // Filter notes by completed status
        res = res && ((note.completed === filters.completed) || filters.completed) && (note.completed || filters.uncompleted)
        return res
    })
}
