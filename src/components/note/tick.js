import {ReactComponent as TickIcon} from "./tick.svg"
import {ReactComponent as CircleIcon} from "./circle.svg"

export function Tick(props) {
    return <span onClick={props.onClick}>{props.ticked ? <TickIcon/> : <CircleIcon/>}</span>
}
