const rooms = {
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

let history = ['0.0']

// I want to be able to call a function, moveUp, moveDown, moveLeft, moveRight, and keeps track of where the player has been, and where they currently are. 
// That means that I will need a function that returns the current location.
// Maybe the function takes in a the rooms and history as an argument, and returns the functions that allow you to navigate. 



export const configMove = (confObj) => {
    /***
     * {
     * rooms // the Object with all the room information
     * history // array with the players history and current location
     * }
     */
    const move = (dir) => {
        const coords = confObj.history[confObj.history.length - 1].split('.')
        let attemptedCoords;
        console.log(coords);
        switch (dir) {
            case 'up':
                attemptedCoords = coords.toSpliced(1, 1, +coords[1] - 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    if (confObj.rooms[attemptedCoords].isOpen) {
                        console.log('This room is open.');
                    } else {
                        console.log('This room is closed.');
                    }
                    console.log([...confObj.history, attemptedCoords]);
                    return [...confObj.history, attemptedCoords]
                }
                break
            case 'down':
                attemptedCoords = coords.toSpliced(1, 1, +coords[1] + 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    if (confObj.rooms[attemptedCoords].isOpen) {
                        console.log('This room is open.');
                    } else {
                        console.log('This room is closed.');
                    }
                    console.log([...confObj.history, attemptedCoords]);
                    return [...confObj.history, attemptedCoords]
                }
                break
            case 'left':
                attemptedCoords = coords.toSpliced(0, 1, +coords[0] - 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    if (confObj.rooms[attemptedCoords].isOpen) {
                        console.log('This room is open.');
                    } else {
                        console.log('This room is closed.');
                    }
                    console.log([...confObj.history, attemptedCoords]);
                    return [...confObj.history, attemptedCoords]
                }
                break
            case 'right':
                attemptedCoords = coords.toSpliced(0, 1, +coords[0] + 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    if (confObj.rooms[attemptedCoords].isOpen) {
                        console.log('This room is open.');
                    } else {
                        console.log('This room is closed.');
                    }
                    console.log([...confObj.history, attemptedCoords]);
                    return [...confObj.history, attemptedCoords]
                }
                break
        }
    }
    /**
 * 
 * @param {String} coord Takes a coordinate in the form of "1.1" 
 * and checks if this room exists.
 * @returns true if room exists else false
 */
    const checkValidRoom = (coord) => {
        if (Object.hasOwn(confObj.rooms, coord)) {
            // console.log('Has Property');
            return true
        }
        return false
    }
    const moveDown = () => {
        const history = move('down')
        return {
            history: history,
            room: confObj.rooms[history[history.length - 1]],
        }
    }
    const moveUp = () => {
        const history = move('up')
        return {
            history: history,
            room: confObj.rooms[history[history.length - 1]],
        }
    }

    const moveLeft = () => {
        const history = move('left')
        return {
            history: history,
            room: confObj.rooms[history[history.length - 1]],
        }
    }
    const moveRight = () => {
        const history = move('right')
        return {
            history: history,
            room: confObj.rooms[history[history.length - 1]],
        }
    }

    return { moveDown, moveUp, moveLeft, moveRight }
}






// move('up')
// move('down', coord => history.push(coord))
// move('down')
// move('up')