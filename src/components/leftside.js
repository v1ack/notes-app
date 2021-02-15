import React, {useState} from "react"

const leftside = [
    {
        name: "Предстоящие", func: () => (note) => !note.complete,
    },
    {
        name: "Все задачи", func: () => () => true,
    },
    {
        name: "Завершенные", func: () => (note) => note.complete,
    },
]

function LeftSideItem(props) {
    return <div className={
        "LeftSideItem " +
        "clickable " +
        (props.active ? "active" : "")
    } onClick={props.click}>{props.name}</div>
}

export function LeftSide(props) {
    const [active, setActive] = useState(1)

    function click(index) {
        setActive(index)
        let clicked = leftside[index]
        props.setFilter(clicked.func)
    }

    return <aside className="container">
        <header className="app-header">✔ ToDo</header>
        {leftside.map((ls, index) =>
            <LeftSideItem {...ls} active={active === index} click={() => click(index)} key={ls.name}/>)}
    </aside>
}
