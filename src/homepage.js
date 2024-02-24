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
    if(counter === 5) return null;

    validateFields(fields, player, axisBtn, counter);
    placementText.innerHTML = player.name + ', PLACE YOUR ' + player.board.boardShips[counter].name + ':';
    placementText.innerHTML = placementText.innerHTML.toUpperCase();

    axisBtn.addEventListener('click', () => {
        if(axisBtn.innerHTML === 'AXIS: Y') axisBtn.innerHTML = 'AXIS: X';
        else if(axisBtn.innerHTML === 'AXIS: X') axisBtn.innerHTML = 'AXIS: Y';
        validateFields(fields, player, axisBtn, counter);
    })

    fields.forEach((innerArray, i) => {
        innerArray.forEach((element, j) => {
            element.addEventListener('click', () =>{
                placementPageHTML(player, placementText, axisBtn, fields, ++counter)
            });
            
            if(element.classList.contains('available'))
            {
                let color;
                element.addEventListener('mouseover', () =>{
                    drawShipFields(fields, player, axisBtn, counter, i, j, color = '#b8b7b7')
                });
    
                element.addEventListener('mouseout', () =>{
                    drawShipFields(fields, player, axisBtn, counter, i, j, color = 'transparent')
                });
            }
            else if(element.classList.contains('unavailable'))
            {
                element.addEventListener('mouseover', () =>{
                    element.style.backgroundColor = '#c51e1e';
                });
                element.addEventListener('mouseout', () =>{
                    element.style.backgroundColor = 'transparent';
                });
            }

        });
    });

}

function validateFields(fields, player, axisBtn, counter)
{  
    if(axisBtn.innerHTML === 'AXIS: X')
    {
        for(let i = 0; i < 10; i++)
        {
            for(let j = 0; j < 10; j++)
            {
                if(j <= (10 - player.board.boardShips[counter].length))
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
                if(i <= (10 - player.board.boardShips[counter].length))
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

export { opacity0To1, opacity1To0, placementPageHTML}
