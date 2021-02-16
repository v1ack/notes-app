import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {filters, setFilter} from "../features/configsSlice"

const leftside = [
    {name: "Все задачи", key: "all", color: filters.all.background[0]},
    {name: "Предстоящие", key: "wait", color: filters.wait.background[0]},
    {name: "Завершенные", key: "done", color: filters.done.background[0]},
]

function LeftSideItem(props) {
    const style = {
        "--color": props.color + "ff",
        "--color-active": props.color + "25",
        "--color-active-hover": props.color + "15",
    }

    return <div className={
        "LeftSideItem " +
        "clickable " +
        (props.active ? "active" : "")
    } style={style} onClick={props.click}>{props.name}</div>
}

export function LeftSide() {
    const [active, setActive] = useState(1)
    const dispatch = useDispatch()

    function click(index) {
        setActive(index)
        let clicked = leftside[index]
        dispatch(setFilter(clicked.key))
    }

    return <aside className="container">
        <header className="app-header">✔ ToDo</header>
        {leftside.map((ls, index) =>
            <LeftSideItem {...ls} active={active === index} click={() => click(index)} key={ls.name}/>)}
    </aside>
}
