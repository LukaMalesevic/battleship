import { logoImage } from "./dom-elements";

function opacity0To1(element)
{
    let opacity = 0;
    const interval = setInterval(() => {
    element.style.opacity = `${opacity}`;
    opacity += 0.01;
    if(opacity >= 1) clearInterval(interval);
    }, 35);
}

function opacity1To0(element1, element2)
{
    let opacity = 1;
    const interval = setInterval(() => {
    element1.style.opacity = `${opacity}`;
    opacity -= 0.01;
    if(opacity <= 0)
    {
        element1.style.visibility = 'hidden';
        element1.style.height = '0';
        logoImage.style.width = '250px';
        logoImage.style.top = '-10px';
        element2.style.visibility = 'visible';
        element2.style.height = '80%';
        clearInterval(interval);
    }
    }, 25);   
}

function placementPageHTML(player, placementText, axisBtn, fields, counter = 0)
{   
    validateFields(fields, player, axisBtn, counter);
    placementText.innerHTML = player.name + ', PLACE YOUR ' + player.board.boardShips[counter].name + ':';
    placementText.innerHTML = placementText.innerHTML.toUpperCase();
        
    axisBtn.addEventListener('click', () => {
        if(axisBtn.innerHTML === 'AXIS: Y') axisBtn.innerHTML = 'AXIS: X';
        else if(axisBtn.innerHTML === 'AXIS: X') axisBtn.innerHTML = 'AXIS: Y';
        validateFields(fields, player, axisBtn, counter);
        validateFieldsForAnotherBoats(fields, player, axisBtn, counter);        
    })

    fields.forEach((innerArray, i) => {
        innerArray.forEach((element, j) => {

            element.addEventListener('click', () =>{
                if(element.classList.contains('available'))
                { 
                    resetBoardColors(fields);
                    player.board.placeAShip([i, j], player.board.boardShips[counter], axisBtn.innerHTML, player.board.board);
                    setUpTheBoatImage(player, counter, element, axisBtn.innerHTML);
                    if(counter < 4) counter++;
                    validateFields(fields, player, axisBtn, counter);
                    validateFieldsForAnotherBoats(fields, player, axisBtn, counter);
                    placementText.innerHTML = player.name + ', PLACE YOUR ' + player.board.boardShips[counter].name + ':';
                    placementText.innerHTML = placementText.innerHTML.toUpperCase();
                    console.log(fields);
                    console.log(player.board.board)
                }
            });
            
                element.addEventListener('mouseover', () =>{
                    if(element.classList.contains('available'))
                    drawShipFields(fields, player, axisBtn, counter, i, j, '#b8b7b7')
                    
                });
    
                element.addEventListener('mouseout', () =>{
                    if(element.classList.contains('available'))
                    drawShipFields(fields, player, axisBtn, counter, i, j, 'transparent')
                });
            
                element.addEventListener('mouseover', () =>{
                    if(element.classList.contains('unavailable') && player.board.board[i][j] === null)
                    element.style.backgroundColor = '#c51e1e';
                });
                element.addEventListener('mouseout', () =>{
                    if(element.classList.contains('unavailable'))
                    element.style.backgroundColor = 'transparent';
                });

        });
    });

}

function validateFieldsForAnotherBoats(fields, player, axisBtn, counter)
{
    if(axisBtn.innerHTML === 'AXIS: X')
    {
        for(let x = 0; x < 10; x++)
        {
            for(let y = 0; y < 10; y++)
            {
                for(let i = 0; i < player.board.boardShips[counter].length; i++)
                {
                    if(( y + i ) < 10 && player.board.board[x][y + i] !== null)
                    {
                        fields[x][y].classList.add('unavailable');
                        fields[x][y].classList.remove('available');
                        break;
                    }
                }
            }
        }
    }else if(axisBtn.innerHTML === 'AXIS: Y')
    {
        for(let x = 0; x < 10; x++)
        {
            for(let y = 0; y < 10; y++)
            {
                for(let i = 0; i < player.board.boardShips[counter].length; i++)
                {
                    if(( x + i ) < 10 && player.board.board[x + i][y] !== null)
                    {
                        fields[x][y].classList.add('unavailable');
                        fields[x][y].classList.remove('available');
                        break;
                    }
                }
            }
        }
    }
}
function validateFields(fields, player, axisBtn, counter)
{  
    if(axisBtn.innerHTML === 'AXIS: X')
    {
        for(let i = 0; i < 10; i++)
        {
            for(let j = 0; j < 10; j++)
            {
                if(player.board.board[i][j] !== null)
                {
                    fields[i][j].classList.add('unavailable');
                    fields[i][j].classList.remove('available');
                }
                else if(j <= (10 - player.board.boardShips[counter].length))
                {
                    fields[i][j].classList.remove('unavailable');
                    fields[i][j].classList.add('available');
                }
                else
                {
                    fields[i][j].classList.add('unavailable');
                    fields[i][j].classList.remove('available');
                }
        
            }
        }

    }else if(axisBtn.innerHTML === 'AXIS: Y')
    {
        for(let i = 0; i < 10; i++)
        {
            for(let j = 0; j < 10; j++)
            {
                if(player.board.board[i][j] !== null)
                {
                    fields[i][j].classList.add('unavailable');
                    fields[i][j].classList.remove('available');
                }
                else if(i <= (10 - player.board.boardShips[counter].length))
                {
                    fields[i][j].classList.remove('unavailable');
                    fields[i][j].classList.add('available');
                }
                else
                {
                    fields[i][j].classList.add('unavailable');
                    fields[i][j].classList.remove('available');
                }
            }
        }
    }

}

function drawShipFields(fields, player, axisBtn, counter, x, y, color)
{
    if(axisBtn.innerHTML === 'AXIS: X')
    {
        for(let i = 0; i < player.board.boardShips[counter].length; i++)
        {
            fields[x][y + i].style.backgroundColor = color;
        }
    }else if(axisBtn.innerHTML === 'AXIS: Y')
    {
        for(let i = 0; i < player.board.boardShips[counter].length; i++)
        {
            fields[x + i][y].style.backgroundColor = color;
        }
    }
  
}

function setUpTheBoatImage(player, counter, element, axis)
{   
    let className;
    if(counter === 4) className = 'patrol_boat' + axis.charAt(axis.length - 1).toLowerCase();
    else className = player.board.boardShips[counter].name.toLowerCase() + axis.charAt(axis.length - 1).toLowerCase();
    element.innerHTML = `<img class="${className}" src="/dist/images/${player.board.boardShips[counter].name.toLowerCase()}.png" alt="">`
    
}

function resetBoardColors(field)
{
    field.forEach(innerArray => {
        innerArray.forEach(element => {
            element.style.backgroundColor = 'transparent';
        });
    });
}

export { opacity0To1, opacity1To0, placementPageHTML}
