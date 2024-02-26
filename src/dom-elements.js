
//start
const logoImage = document.getElementById('logo');
const homepageDiv = document.getElementById('homepage');
const inputName = document.getElementById('player-name');
const startGameBtn = document.getElementById('start-game-btn');
const nameRequired = document.getElementById('name-req');

//ship placement
const placementPage = document.getElementById('placement-page');
const placementTxt = document.getElementById('placement-txt');
const axisBtn = document.getElementById('axis-btn');
const fieldsHTML = document.getElementsByClassName('field');

//battle map
const bothFields = document.getElementById('both-fields');
const fieldsTableAi = document.getElementById('fields-table-ai');
const watersTxt = document.getElementById('waters-txt');
const ordersResults = document.getElementById('orders-results');
const ordersResultsTxt = document.getElementById('orders-results-txt');
const fieldsHTMLAI = document.getElementsByClassName('fields-ai');
const winnerScreen = document.getElementById('winner-screen');
const winnerText = document.getElementById('winner-text');
const playAgainButton = document.getElementById('play-again');

let fields = Array(10);
let z = 0;
for(let i = 0; i < 10; i++)
{
    fields[i] = Array(10);
    for(let j = 0; j < 10; j++)
    {
        fields[i][j] = fieldsHTML[z++];
    }
}

let fieldsAI = Array(10);
z = 0;
for(let i = 0; i < 10; i++)
{
    fieldsAI[i] = Array(10);
    for(let j = 0; j < 10; j++)
    {
        fieldsAI[i][j] = fieldsHTMLAI[z++];
    }
}


export { logoImage, homepageDiv, inputName, startGameBtn, nameRequired }
export { placementPage, placementTxt, axisBtn, fields, fieldsAI }
export { bothFields, fieldsTableAi, watersTxt, ordersResults, ordersResultsTxt, winnerScreen, winnerText, playAgainButton}