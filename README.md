# Spike on Room Navigation Data Structures

## Objective
The object of this spike was to find a way to create a representation of rooms and corridors, and allow a player to move through them while returning a history of where they had been. 

## Findings
![/public/scrn.png](/public/scrn.png)

### Rooms object

Key to the data structure is a rooms object. The object contains all the rooms in the puzzle. The keys are coordinate points, and the values an individual room object, with its respective description, status, etc.

Example: 
```JavaScript
const rooms = {
    {
    0.0: {description: 'This is the cat room', isOpen: 1},
    0.1: {description: 'This is the dog room', isOpen: 1},
    1.1: {description: 'This is the hamster room', isOpen: 1},
    }
}
```

The coordinate system that I am using looks like this: 
```_ _ _ _ _ _ _ _ _ _ _ _ _
| 0,0   0,1   0,2   0,3
| 1,0   1,1
| 2.0   2,1
| 3.0
| 4.0
```


### History Array
This array contains where the player has navigated to in the rooms. The last item in the array is the player's current location.

Example:
```JavaScript
let historyArray = ['0.0', '1.0', '2.0']
```


### configMov()
This is the function that allows the user to set the room information in the form of a rooms object, and know where the user is from the history array. 

Configuring will return the four move functions, `moveUp()`, `moveDown()`, `moveLeft()` and `moveRight()`. 

Calling one of these methods will return an object:
```JavaScript
return {
    history: ['1.1', '1.1', '1.2', '1.3']
    room: {description: 'This is the squirrel room.', isOpen: 1}
}
```
The history key contains an updated history, with the last coordinate being where the player is. The room key is the room object with description and other information. 


### Problems
There were two main problems that I'm looking at solving next and that this `configMove()` function doesn't address:
1. The history being returned doesn't contain the user's input, only references to room objects. In order to load a saved game, I will need a history that includes information on the player's actions and those outcomes.
2. I need away to account for saving information about the state of the rooms in the rooms object. As the player progresses, rooms that were once closed open, and I need a way to remember those state changes. 