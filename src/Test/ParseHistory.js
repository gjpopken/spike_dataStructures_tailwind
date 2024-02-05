// an array that has a history object
// the object
const historyObj = { type: 'generated', description: 'You hit a dead end.' }
const saveData = [historyObj, { type: 'room', description: '2.2' }, { type: 'room', description: '2.2' }, { type: 'room', description: '2.2' }]
// extract all the room-type data for my configMove()

const roomsList = {
    '0.0': { description: "This is red room.", isOpen: 1 },
    '0.1': { description: "This is green room.", isOpen: 0 },
    '0.2': { description: "This is blue room.", isOpen: 1 },
    '1.0': { description: "This is horse room.", isOpen: 1 },
    '1.1': { description: "This is cow room.", isOpen: 1 },
    '1.2': { description: "This is cat room.", isOpen: 1 },
    '2.0': { description: "This is French room.", isOpen: 1 },
    '2.1': { description: "This is German room.", isOpen: 1 },
    '2.2': { description: "This is Swedish room.", isOpen: 1 },
}


export const parseSaveData = (data, rooms) => {
    const parseHistory = () => {
        // .map returns all the objects, undefined in not a room, and just a coordinate if a room
        return data.map((obj) => {
            if (obj.type === 'room') {
                return obj.description
            }
        // .filter removes all the undefined values, so only the coordinates are included.
        }).filter((obj) => obj)
    }

    const parseText = () => {
        return data.map((obj) => {
            if (obj.type === 'generated') {
                return obj.description
            } else {
                return rooms[obj.description].description
            }
        })
    }

    return {parseHistory, parseText}
}