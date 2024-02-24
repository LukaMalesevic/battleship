
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

export { logoImage, homepageDiv, inputName, startGameBtn, nameRequired }
export { placementPage, placementTxt, axisBtn, fields }