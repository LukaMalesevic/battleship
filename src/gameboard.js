import { Ship } from "./ship";

class Gameboard
{
    constructor()
    {
        this.boardShips = [new Ship(5, 'CARRIER'), new Ship(4, 'BATTLESHIP'),
        new Ship(3, 'DESTROYER'), new Ship(3, 'SUBMARINE'), new Ship(2, 'PATROL BOAT')];
        this.dimensions = 10;
        this.board = Array(this.dimensions);
        for(let i = 0; i < this.board.length; i++)
        {
            this.board[i] = Array(this.dimensions).fill(null);
        }
    }

    placeAShip(coordinates, ship, axis, board)
    {
        if(axis === 'AXIS: X')
        {
            for(let i = 0; i < ship.length; i++)
            {
                board[coordinates[0]][coordinates[1] + i] = ship.name;
            }
        }else if(axis === 'AXIS: Y')
        {
            for(let i = 0; i < ship.length; i++)
            {
                board[coordinates[0] + i][coordinates[1]] = ship.name;
            }
        }

        return board;
    }

    receiveAttack(coordinates, board)
    {
        for(let i = 0; i < 10; i++)
        {
            for(let j = 0; j < 10; j++)
            {
                if(board.board[coordinates[0]][coordinates[1]] === board.board[i][j])
                {
                    for(let z = 0; z < board.boardShips.length; z++)
                    {
                        if(board.boardShips[z].name === board.board[i][j])
                        {
                            board.boardShips[z].hit();
                            return board.boardShips[z].numberOfHit;
                        }
                    }
                }
            }
        }
    }
}

const gb1 = new Gameboard();

export { gb1, Gameboard}