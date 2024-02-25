import { fields, fieldsAI, ordersResultsTxt,} from "./dom-elements";
import { AI, player } from ".";
let turn = 'player';
let lastAIshot = false;

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
                    turn = 'AI';
                    setTimeout(() => {
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
    console.log(lastAIshot);

    if(lastAIshot === false)
    {
        console.log("RANDOM COORDINATES")
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
    }else
    {
        x = lastAIshot[0];
        y = ++lastAIshot[1];
    }

    if(player.board.board[x][y] !== null)
    {
        animateText(ordersStrings[5]);
        setTimeout(() => {
            fields[x][y].innerHTML += '<div class="hit"></div>';
            turn = 'player';
            lastAIshot = [x, y];
        }, 2000);
        
    }else if(player.board.board[x][y] === null)
    {
        animateText(ordersStrings[4]);
        setTimeout(() => {
            fields[x][y].innerHTML += '<div class="no_hit"></div>';
            turn = 'player';
        }, 2000);
    }
}
export { battleHTML }