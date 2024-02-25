import "./style.css";
import { logoImage, homepageDiv, inputName, startGameBtn, nameRequired} from "./dom-elements";
import { placementPage, placementTxt, axisBtn, fields } from "./dom-elements";
import { opacity0To1, opacity1To0, placementPageHTML} from "./homepage";
import { Gameboard } from "./gameboard";
import { generateAIBoats } from "./ai";

class Player{
    constructor(name)
    {
        this.name = name;
        this.board = new Gameboard();
    }
}
const AI = new Player('AI');
const player = new Player();


document.addEventListener('DOMContentLoaded', () => {
    opacity0To1(homepageDiv);
    generateAIBoats();
})

startGameBtn.addEventListener('click', () =>{
    if(inputName.value === '') nameRequired.style.fontSize = '2rem';
    else{
        player.name = inputName.value;
        opacity1To0(homepageDiv, placementPage);
        startGameBtn.style.pointerEvents = 'none';
        placementPageHTML(player, placementTxt, axisBtn, fields);
    }
})

export { AI }