import { fields, fieldsAI, ordersResultsTxt, placementPage, winnerScreen, winnerText} from "./dom-elements";
import { AI, player } from ".";
import { setUpTheBoatImage, opacity1To0 } from "./homepage";
import { AIshipsCordinates } from "./ai";


let turn = 'player';
let lastAIshot = false;
let currentPaterrnIndex = -1;

function battleHTML()
{   
    let ordersStrings = [`Awaiting orders, Admiral ${player.name}`,
        `You fire a shot into enemy waters ...... and miss.`,
        `You fire a shot into enemy waters ...... it's a hit!.`,
        `Your opponent is aiming...`,
        `The enemy fires a shot into your waters ...... and miss.`,
        `The enemy fires a shot into your waters ...... it's a hit!`,
        ];    

    animateText(ordersStrings[0]);
    
    fieldsAI.forEach( function(innerArray, i){
        innerArray.forEach( function(element, j){
            element.addEventListener('mouseover', () =>{
                if(turn === 'player' && !element.classList.contains('unavailable'))
                {
                    element.style.backgroundColor = '#00F700';
                    element.style.cursor = 'crosshair';
                }
            })
            element.addEventListener('mouseout', () => {
                if(turn === 'player' && !element.classList.contains('unavailable'))
                {
                    element.style.backgroundColor = 'transparent';
                    element.style.cursor = 'auto';
                }
            })
            element.addEventListener('click', () => {

                if(AI.board.board[i][j] !== null && turn === 'player' && !element.classList.contains('unavailable'))
                {
                    AI.board.receiveAttack([i, j], AI.board);
                    turn = 'AI';
                    setTimeout(() => {
                        showImageIfShipSunk();
                        element.innerHTML += '<div class="hit" ></div>';
                        element.classList.add('unavailable');
                        element.style.backgroundColor = 'transparent';
                        AIturn(ordersStrings);
                    }, 2000);
                    animateText(ordersStrings[2]);
                    
                }else if(turn === 'player' && !element.classList.contains('unavailable'))
                {
                    turn = 'AI';
                    setTimeout(() => {
                        element.classList.add('unavailable');
                        element.innerHTML += '<div class="no_hit"></div>';
                        element.style.backgroundColor = 'transparent';
                        AIturn(ordersStrings);
                    }, 2000);
                    animateText(ordersStrings[1]);
                }
            })
        });
    });

}

function animateText(string)
{
    ordersResultsTxt.innerHTML = '';
    setInterval(() => {
        ordersResultsTxt.innerHTML += string.charAt(0);
        string = string.slice(1);
    }, 35);
}

function AIturn(ordersStrings)
{
    turn = 'AI';
    setTimeout(() => {
        animateText(ordersStrings[3]);
    }, 2000);
    setTimeout(() => {
        AIShootingPatern(ordersStrings);

    }, 5000);

}

function AIShootingPatern(ordersStrings)
{
    let x;
    let y;
    let currentPattern = [
        [1, 0], [2, 0], [3, 0], [4, 0],
        [-1, 0], [-2, 0], [-3, 0], [-4, 0],
        [0, 1], [0, 2], [0, 3], [0, 4],
        [0, -1], [0, -2], [0, -3], [0, -4]
    ];

    if(currentPaterrnIndex > 15)
    {
        lastAIshot = false;
        currentPaterrnIndex = -1;
    }
    if(lastAIshot === false)
    {
        let hasDivChild;
        do{
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            hasDivChild = fields[x][y].querySelector('div') !== null;
        }while(hasDivChild);

    }else
    {
        let hasDivChild;
        // console.log(currentPaterrnIndex);
        do{
            x = lastAIshot[0] + currentPattern[currentPaterrnIndex][0];
            y = lastAIshot[1] + currentPattern[currentPaterrnIndex][1];
            hasDivChild = fields[x][y].querySelector('div') !== null;

            if(hasDivChild || x > 9 || y > 9 || x < 0 || y < 0)
            {
                do{
                    currentPaterrnIndex++;
                }while(currentPaterrnIndex % 4 !== 0)
            }

        }while(x > 9 || y > 9 || x < 0 || y < 0 || hasDivChild)
    }

    if(player.board.board[x][y] !== null)
    {
        animateText(ordersStrings[5]);
        setTimeout(() => {
            fields[x][y].innerHTML += '<div class="hit"></div>';
            turn = 'player';
            currentPaterrnIndex++;
            if(lastAIshot === false)
            {
                lastAIshot = [x, y];
            }
            checkIfAIWon();
        }, 2000);
        
    }else if(player.board.board[x][y] === null)
    {
        animateText(ordersStrings[4]);
        setTimeout(() => {
            fields[x][y].innerHTML += '<div class="no_hit"></div>';
            turn = 'player';
            if(lastAIshot !== false)
            {
                do{
                    currentPaterrnIndex++;
                }while(currentPaterrnIndex % 4 !== 0)
            }
        }, 2000);
    }
}

function checkIfAIWon()
{
    let AIWin = true;

    for(let i = 0; i < player.board.boardShips.length; i++)
    {
        if(!player.board.boardShips[i].isSunk()) AIWin = false;
    }

    if(AIWin === true)
    {
        winnerText.innerHTML = `YOU FAILED BE ASHAMED! ${AI.name} WON THE BATTLESHIP`;
        winnerText.style.width = '15ch';
        winnerText.style.fontSize = '125px';
        opacity1To0(placementPage, winnerScreen);
    }
}

function showImageIfShipSunk()
{
    let playerWin = true;

    for(let i = 0; i < AI.board.boardShips.length; i++)
    {
        if(AI.board.boardShips[i].isSunk())
        {  
            setUpTheBoatImage(AIshipsCordinates[i][0],AIshipsCordinates[i][1], AIshipsCordinates[i][2], AIshipsCordinates[i][3]);
        }else
        {
            playerWin = false;
        }
    }

    if(playerWin === true)
    {
        winnerText.innerHTML = `CONGRATULATIONS ${player.name} YOU WON THE BATTLESHIP`;
        winnerText.style.width = '15ch';
        winnerText.style.fontSize = '125px';
        opacity1To0(placementPage, winnerScreen);
    }
}
export { battleHTML }