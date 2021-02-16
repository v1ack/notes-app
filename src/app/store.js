import {configureStore} from "@reduxjs/toolkit"
import notesReducer from "../features/notesSlice"
import configsReducer from "../features/configsSlice"

export default configureStore({
    reducer: {
        notes: notesReducer,
        configs: configsReducer,
    },
})
