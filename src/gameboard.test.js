import { gb1 } from "./gameboard";

test.only("place a ship for coordinates 0, 0 on x axis for ship CARRIER on player's board", () => {
    expect(gb1.placeAShip([0, 0], gb1.boardShips[0], 'AXIS: X', gb1.board))
    .toEqual([ 
        ['CARRIER', 'CARRIER', 'CARRIER', 'CARRIER', 'CARRIER', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ])
})

test("receiving shot on coordinates 0 0 on player's board", () => {
    expect(gb1.receiveAttack([0, 0], gb1))
    .toEqual([ 
        [null, 'CARRIER', 'CARRIER', 'CARRIER', 'CARRIER', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ])
    
})