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
        }else (axis === 'AXIS: Y')
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
        for(let i = 0; i < board.dimensions; i++)
        {
            for(let j = 0; j < board.dimensions; j++)
            {
                if(board.board[coordinates[0]][coordinates[1]] === board.board[i][j])
                {
                    for(let i = 0; i < board.boardShips.length; i++)
                    {
                        if(board.boardShips[i].name === board.board[i][j])
                        {
                            board.boardShips[i].hit();
                            board.board[i][j] = null;

                            return board.board;
                        }
                    }
                }
            }
        }
    }
}

const gb1 = new Gameboard();

export { gb1, Gameboard}