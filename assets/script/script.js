let yAxis = 200;
let xAxis = 200;

'use strict';

 document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    //console.log('keydown event\n\n' + 'key: ' + keyName);

    if (keyName === 'ArrowDown'){
        yAxis += 10;
    } else if (keyName === 'ArrowUp'){
        yAxis -= 10;
    } else if (keyName === 'ArrowLeft'){
        xAxis -= 10;
    } else if (keyName === 'ArrowRight'){
        xAxis += 10;
    }
    moveBox();
});

const boxMod = document.getElementById("box");

const moveBox = () =>{
    boxMod.style.top = yAxis + "px";
    boxMod.style.left = xAxis + "px";
}