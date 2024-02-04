import { useState } from "react"
import { configMove } from "../Test/Test"

export const Game = () => {
    const [roomList, setRoomList] = useState({
        '0.0': { description: "This is red room.", isOpen: 1 },
        '0.1': { description: "This is green room.", isOpen: 1 },
        '0.2': { description: "This is blue room.", isOpen: 1 },
        '1.0': { description: "This is horse room.", isOpen: 1 },
        '1.1': { description: "This is cow room.", isOpen: 1 },
        '1.2': { description: "This is cat room.", isOpen: 1 },
        '2.0': { description: "This is French room.", isOpen: 1 },
        '2.1': { description: "This is German room.", isOpen: 1 },
        '2.2': { description: "This is Swedish room.", isOpen: 1 },
    })
    const [history, setHistory] = useState(['1.0'])

    const { moveDown, moveUp, moveLeft, moveRight } = configMove({
        history: history,
        rooms: roomList
    })

    const handleClick = (event, cbFunction) => {
        event.preventDefault()
        const move = cbFunction()
        setHistory(move.history)
        console.log(move.room.description);
    }

    return (
        <div>
            {/* {JSON.stringify(roomList)} */}
            <p>Current room: {history[history.length - 1]}</p>
            <p>History: {JSON.stringify(history)}</p>
            <form>
                <button onClick={event => { handleClick(event, moveLeft) }}>Go Left</button>
                <button onClick={event => { handleClick(event, moveUp) }}>Go Up</button>
                <button onClick={(event) => { handleClick(event, moveDown) }}>Go Down</button>
                <button onClick={event => { handleClick(event, moveRight) }}>Go Right</button>
            </form>
        </div>
    )
}

// I need a way to access the updated location that is in the local store. 
// I need the description off the current room, and potentially other properies.