const rooms = {
    '0.0': { description: "This is red room.", isOpen: 1 },
    '0.1': { description: "This is green room.", isOpen: 1 },
    '0.2': { description: "This is blue room.", isOpen: 1 },
    '1.0': { description: "This is horse room.", isOpen: 1 },
    '1.1': { description: "This is cow room.", isOpen: 1 },
    '1.2': { description: "This is cat room.", isOpen: 1 },
    '2.0': { description: "This is French room.", isOpen: 1 },
    '2.1': { description: "This is German room.", isOpen: 1 },
    '2.2': { description: "This is Swedish room.", isOpen: 1 },
}

let history = ['0.0']



const move = (dir) => {
    let coords = history[history.length - 1].split('.')
    console.log(coords);
    switch (dir) {
        case 'up':
            coords.splice(1, 1, +coords[1] - 1)
            console.log(coords.join('.'));
            if (Object.hasOwn(rooms, coords.join('.'))) {
                console.log('Has Property');
                history.push(coords.join('.'))
                console.log('history:', history);
            } else {
                console.log('Doesn\'t have property');
            }
            break
        case 'down':
            coords.splice(1, 1, +coords[1] + 1)
            console.log(coords.join('.'));
            if (Object.hasOwn(rooms, coords.join('.'))) {
                console.log('Has Property');
                history.push(coords.join('.'))
                console.log('history:', history);
            } else {
                console.log('Doesn\'t have property');
            }
            break
    }
}

move('up')
move('down')
move('down')