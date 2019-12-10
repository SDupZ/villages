# Villages
(Name TBC)

## Installation

```
npm install pm2 -g
```

## Ideas

- Keep track of all gamestate / boardstate changes to replay entire game.


State

PlayerState
Board is full
What resource or building is in inside each cell
Secret building per player
Other peoples board state
My board state


GameState
Time Elapsed
Date started
Current buildings allowed for the game
Who's turn is it to choose the block (master builder)
The current turn number
The current block that must be placed
Have all players placed their block


## Basic rules

### Legend

`[]` = Part of the game board
`[0]` = Zero represents an empty square
`[W]` = Wood
`[Y]` = Wheat
`[B]` = Brick
`[S]` = Stone
`[G]` = Glass


### Setup
1. Each player has their own game board. A game board is a 4x4 grid.
```
[0 0 0 0]
[0 0 0 0]
[0 0 0 0]
[0 0 0 0]
```


2. There is a resources buildings pool. Each game starts with the cottage building.

Cottage:
```
[0 Y]
[B G]
```

3. Draw one from each `type` of building.

4. Create general supply resource pool. (Currently unlimited)

5. Reveal two unique monument buidlings to each player. Each player selects one and discards the other.