// ! Example Data
// const rooms = {
//     '0.0': { description: "This is red room.", isOpen: 1 },
//     '0.1': { description: "This is green room.", isOpen: 0 },
//     '0.2': { description: "This is blue room.", isOpen: 1 },
//     '1.0': { description: "This is horse room.", isOpen: 1 },
//     '1.1': { description: "This is cow room.", isOpen: 1 },
//     '1.2': { description: "This is cat room.", isOpen: 1 },
//     '2.0': { description: "This is French room.", isOpen: 1 },
//     '2.1': { description: "This is German room.", isOpen: 1 },
//     '2.2': { description: "This is Swedish room.", isOpen: 1 },
// }

// let history = ['0.0']

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
        // console.log(coords);
        switch (dir) {
            case 'up':
                attemptedCoords = coords.toSpliced(1, 1, +coords[1] - 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    // if (confObj.rooms[attemptedCoords].isOpen) {
                    //     console.log('This room is open.');
                    // } else {
                    //     console.log('This room is closed.');
                    // }
                    console.log([...confObj.history, attemptedCoords]);
                    return {
                        history: [...confObj.history, attemptedCoords],
                        isValid: 1
                    }
                } else {
                    return {
                        history: [...confObj.history, coords.join('.')],
                        isValid: 0
                    }
                }
                break
            case 'down':
                attemptedCoords = coords.toSpliced(1, 1, +coords[1] + 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    // if (confObj.rooms[attemptedCoords].isOpen) {
                    //     console.log('This room is open.');
                    // } else {
                    //     console.log('This room is closed.');
                    // }
                    console.log([...confObj.history, attemptedCoords]);
                    return {
                        history: [...confObj.history, attemptedCoords],
                        isValid: 1
                    }
                } else {
                    return {
                        history: [...confObj.history, coords.join('.')],
                        isValid: 0
                    }
                }
                break
            case 'left':
                attemptedCoords = coords.toSpliced(0, 1, +coords[0] - 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    // console.log('valid move');
                    // if (confObj.rooms[attemptedCoords].isOpen) {
                    //     console.log('This room is open.');
                    // } else {
                    //     console.log('This room is closed.');
                    // }
                    console.log([...confObj.history, attemptedCoords]);
                    return {
                        history: [...confObj.history, attemptedCoords],
                        isValid: 1
                    }
                } else {
                    // console.log('invalid move');
                    return {
                        history: [...confObj.history, coords.join('.')],
                        isValid: 0
                    }
                }
                break
            case 'right':
                attemptedCoords = coords.toSpliced(0, 1, +coords[0] + 1).join('.')
                if (checkValidRoom(attemptedCoords)) {
                    // if (confObj.rooms[attemptedCoords].isOpen) {
                    //     console.log('This room is open.');
                    // } else {
                    //     console.log('This room is closed.');
                    // }
                    console.log([...confObj.history, attemptedCoords]);
                    return {
                        history: [...confObj.history, attemptedCoords],
                        isValid: 1
                    }
                } else {
                    return {
                        history: [...confObj.history, coords.join('.')],
                        isValid: 0
                    }
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
        const newMove = move('down')
        // console.log('now in: ', confObj.rooms[history[history.length - 1]]);
        if (newMove.isValid) {
            return {
                history: newMove.history,
                room: confObj.rooms[newMove.history[newMove.history.length - 1]],
            }
        } else {
            return {
                history: newMove.history,
                room: {description: 'You have hit a wall.'}
            }
        }
    }
    const moveUp = () => {
        const newMove = move('up')
        if (newMove.isValid) {
            return {
                history: newMove.history,
                room: confObj.rooms[newMove.history[newMove.history.length - 1]],
            }
        } else {
            return {
                history: newMove.history,
                room: {description: 'You have hit a wall.'}
            }
        }
    }

    const moveLeft = () => {
        const newMove = move('left')
        if (newMove.isValid) {
            return {
                history: newMove.history,
                room: confObj.rooms[newMove.history[newMove.history.length - 1]],
            }
        } else {
            return {
                history: newMove.history,
                room: {description: 'You have hit a wall.'}
            }
        }
    }
    const moveRight = () => {
        const newMove = move('right')
        if (newMove.isValid) {
            return {
                history: newMove.history,
                room: confObj.rooms[newMove.history[newMove.history.length - 1]],
            }
        } else {
            return {
                history: newMove.history,
                room: {description: 'You have hit a wall.'}
            }
        }
    }

    return { moveDown, moveUp, moveLeft, moveRight }
}