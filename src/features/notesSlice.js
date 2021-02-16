import {createSlice} from "@reduxjs/toolkit"

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [{
            id: 1,
            text: "Сделать список задач",
            complete: true,
        }, {
            id: 2,
            text: "Сделать фильтрацию по статусу задачи",
            complete: true,
        }, {
            id: 3,
            text: "Добавить теги к зачам",
            complete: false,
        }, {
            id: 4,
            text: "Добавить настройку цвета",
            complete: false,
        }, {
            id: 5,
            text: "Редактирование задач",
            complete: false,
        }, {
            id: 6,
            text: "Возможность добавления подзадач",
            complete: false,
        }, {
            id: 7,
            text: "Собрать в приложение на электроне",
            complete: false,
        }, {
            id: 8,
            text: "Локальное сохранение списка задач",
            complete: false,
        }, {
            id: 9,
            text: "Deadline и важность задач",
            complete: false,
        }, {
            id: 10,
            text: "Сортировка задач",
            complete: false,
        }],
        id: 11,
    },
    reducers: {
        add: (state, action) => {
            state.notes = [...state.notes, {
                id: state.id++,
                text: action.payload,
                complete: false,
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
