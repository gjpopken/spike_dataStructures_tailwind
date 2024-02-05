import { configMove } from "./Test";
import { roomsList } from "./roomsList";


const { moveUp, moveDown, moveLeft, moveRight } = configMove({ rooms: roomsList, history: ['1.0'] })



// saving data
// the inventory is saved the DB as the player gets items
// the history the player's move test is saved in an object with
// with the state of the rooms



// I need the text of the player's specific command,
// //I need the text of the specific response that gets rendered to the DOM. 
// //I need the players last location, and maybe even the history of their moves. 
// //Could be an array of an object, with whether it was user generated or computer generated. 

const saveObject = {
    // ! This is for rerendering past actions to the DOM.
    adventure_text: [
        { creator: 'user' | 'comp', content: 'Move left' },
        { creator: 'user' | 'comp', content: 'You\'ve entered a room with tall windows. In the corner there is a Taffany lamp.' },
    ],
    // ! This is for knowing the player's last location.
    current_room: ['1.1', '1.2'],
    // ! This is the state of the rooms at the end of the last save. Updates when changes to state are made. 
    rooms_state: {
            '0.0': { description: "This is red room.", isOpen: 1, items: [1, 5, 7] },
            '0.1': { description: "This is green room.", isOpen: 0 },
            '0.2': { description: "This is blue room.", isOpen: 1 },
            '1.0': { description: "This is horse room.", isOpen: 1 },
            '1.1': { description: "This is cow room.", isOpen: 1 },
            '1.2': { description: "This is cat room.", isOpen: 1 },
            '2.0': { description: "This is French room.", isOpen: 0 },
            '2.1': { description: "This is German room.", isOpen: 1 },
            '2.2': { description: "This is Swedish room.", isOpen: 1 },
        },
}


// Calling any of these functions will return an updated save object that can be stored globally or in the database. 
export const doSave = (saveObject) => {
    const saveRoomState = (rooms) => {
        return {...saveObject, rooms_state: rooms}
    }

    const saveCurrentRoom = (history) => {
        return {...saveObject, current_room: history}
    }
    const saveAdventureText = (adventure_text) => {
        return {...saveObject, adventure_text: adventure_text}
    }
    const saveAll = (rooms, history, adventure_text) => {
        return {adventure_text: adventure_text, current_room: rooms, rooms_state: history}
    }
    return {saveRoomState,saveCurrentRoom,saveAdventureText,saveAll}
}