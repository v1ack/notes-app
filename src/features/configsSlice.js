import {createSlice} from "@reduxjs/toolkit"

export const filters = {
    wait: {
        func: (note) => !note.complete, background: ["#654ea3", "#eaafc8"],
    },
    all: {
        func: () => true, background: ["#4d74d4", "#43d2ab"],
    },
    done: {
        func: (note) => note.complete, background: ["#11998e", "#38ef7d"],
    },
}

export const configsSlice = createSlice({
    name: "configs",
    initialState: {
        filter: "wait",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
})

export const {setFilter} = configsSlice.actions

export const selectFilter = state => state.configs.filter
export default configsSlice.reducer
