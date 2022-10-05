let keysDown = [];

document.onkeydown = function(e){
    keysDown.push(e.key);
}

document.onkeyup = function(e){
    for(let x in keysDown){
        if(keysDown[x]===e.key){
            keysDown[x]='';
        }
    }
}

function keyDown(key){
    return keysDown.includes(key);
}

const speed = 1;

function checkDirection() {
    if (keyDown('w')) {
        player['y'] -= speed;
    }
    if (keyDown('s')) {
        player['y'] += speed;
    }
    if (keyDown('a')) {
        player['x'] -= speed;
    }
    if (keyDown('d')) {
        player['x'] += speed;
    }
}
