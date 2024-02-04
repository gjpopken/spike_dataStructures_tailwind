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
     * histoy // array with the players history and current location
     * }
     */
    const move = (dir) => {
        let coords = confObj.history[confObj.history.length - 1].split('.')
        console.log(coords);
        switch (dir) {
            case 'up':
                coords.splice(1, 1, +coords[1] - 1)
                if (checkValidRoom(coords.join('.'))) {
                    if (confObj.rooms[coords.join('.')].isOpen) {
                        console.log('This room is open.');
                    } else {
                        console.log('This room is closed.');
                    }
                    // history.push(coords.join('.'))
                    return [...confObj.history, coords.join('.')]
                    console.log('history:', [...confObj.history, coords.join('.')]);
                }

                break
            case 'down':
                coords.splice(1, 1, +coords[1] + 1)
                if (checkValidRoom(coords.join('.'))) {
                    if (confObj.rooms[coords.join('.')].isOpen) {
                        console.log('This room is open');
                    } else {
                        console.log('This room is closed.');
                    }
                    // history.push(coords.join('.'))
                    return [...confObj.history, coords.join('.')]
                    console.log('history:', [...confObj.history, coords.join('.')]);
                }
                break
        }
    }
    const moveDown = () => {
        return move('down')
    }
    const moveUp = () => {
        return move('up')
    }

    return { moveDown, moveUp }
}


/**
 * 
 * @param {String} coord Takes a coordinate in the form of "1.1" 
 * and checks if this room exists.
 * @returns true if room exists else false
 */
function checkValidRoom(coord) {
    if (Object.hasOwn(rooms, coord)) {
        // console.log('Has Property');
        return true
    }
    return false
}



// move('up')
// move('down', coord => history.push(coord))
// move('down')
// move('up')