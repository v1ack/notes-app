import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setFilter} from "../features/configsSlice"
import {selectTags} from "../features/notesSlice"

const leftside = [
    {label: "Все задачи", key: "all", colors: ["#4d74d4", "#43d2ab"], filter: {}},
    {label: "Предстоящие", key: "wait", colors: ["#654ea3", "#eaafc8"], filter: {completed: false}},
    {label: "Завершенные", key: "done", colors: ["#11998e", "#38ef7d"], filter: {uncompleted: false}},
]

function LeftSideItem(props) {
    const style = {
        "--color": props.colors[0] + "ff",
        "--color-active": props.colors[0] + "25",
        "--color-active-hover": props.colors[0] + "15",
    }

    return <div className={
        "LeftSideItem " +
        "clickable " +
        (props.active ? "active" : "")
    } style={style} onClick={props.click}>{props.label}</div>
}

export function LeftSide() {
    const tags = useSelector(selectTags)
    const [active, setActive] = useState("l1")
    const dispatch = useDispatch()

    function clickedList(index) {
        let clicked = leftside[index]
        setActive(`l${index}`)
        dispatch(setFilter({
            filter: clicked.filter,
            background: clicked.colors,
        }))
    }

    function clickedTag(index) {
        let clicked = Object.values(tags)[index]
        setActive(`t${index}`)
        dispatch(setFilter({
            filter: {tags: [clicked.id]},
            background: clicked.colors,
        }))
    }

    return <aside className="container LeftSide">
        <header className="app-header">✔ ToDo</header>
        <div className="LeftSideContainer">
            {leftside.map((ls, index) =>
                <LeftSideItem
                    {...ls}
                    active={active === `l${index}`}
                    click={() => clickedList(index)}
                    key={ls.label}
                />)}
            <hr/>
            {Object.values(tags).map((ls, index) =>
                <LeftSideItem
                    {...ls}
                    active={active === `t${index}`}
                    click={() => clickedTag(index)}
                    key={ls.id}
                />)}
        </div>
        <footer><a href="https://github.com/v1ack/notes-app/">Репозиторий на GitHub</a></footer>
    </aside>
}
