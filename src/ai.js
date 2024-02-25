import { AI } from ".";
import { validateFieldsForAnotherBoats, validateFields, setUpTheBoatImage } from "./homepage";
import { fieldsAI } from "./dom-elements";

let AIshipsCordinates = [];

function generateAIBoats()
{
    for(let i = 0; i < 5; i++)
    {
        let validation = false;
        do{

            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10); 
            let axis = Math.floor(Math.random() * 2);

            const axisAI = document.createElement('h1'); 
            if(axis === 0) axisAI.innerHTML = 'AXIS: X';
            else if(axis === 1) axisAI.innerHTML = 'AXIS: Y';

            validateFields(fieldsAI, AI, axisAI, i);
            validateFieldsForAnotherBoats(fieldsAI, AI, axisAI, i);

            if(fieldsAI[x][y].classList.contains('available') && AI.board.board[x][y] === null)
            {
                AIshipsCordinates.push([x, y]);
                setUpTheBoatImage(AI, i, fieldsAI[x][y], axisAI.innerHTML);
                AI.board.placeAShip([x, y], AI.board.boardShips[i], axisAI.innerHTML, AI.board.board)
                validation = true;
            }

        }while(validation === false)
    }

    fieldsAI.forEach(innerArray => {
        innerArray.forEach(element => {
            element.classList.remove('available', 'unavailable');
        });
    });
}

export { generateAIBoats, AIshipsCordinates }