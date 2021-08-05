let boxTop = 200;
let boxLeft = 200;

'use strict';
        
 document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    //console.log('keydown event\n\n' + 'key: ' + keyName);
    
    if (keyName === 'ArrowDown'){
        boxTop += 10;
    } else if (keyName === 'ArrowUp'){
        boxTop -= 10;
    } else if (keyName === 'ArrowLeft'){
        boxLeft -= 10;
    } else if (keyName === 'ArrowRight'){
        boxLeft += 10;
    }
 
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";

});
   


   