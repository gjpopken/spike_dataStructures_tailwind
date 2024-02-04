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
    const [history, setHistory] = useState(['0.0'])

    const {moveDown, moveUp} = configMove({
        history: history,
        rooms: roomList
    })

    return (
        <div>
            {/* {JSON.stringify(roomList)} */}
            <p>Current room: {history[history.length - 1]}</p>
            <form>
                <button onClick={event => {
                    event.preventDefault()
                    setHistory(moveUp())
                }}>Go Up</button>
                <button onClick={(event) => {
                    event.preventDefault()
                    setHistory(moveDown())
                }}>Go Down</button>
            </form>
        </div>
    )
}