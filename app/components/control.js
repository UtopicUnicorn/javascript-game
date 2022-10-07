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

function checkDirection() {

    const oldX = player.x;
    const oldY = player.y;


    if (keyDown('w') || keyDown('ц')) {
        player.y -= player.speed;
        checkWall(player,oldX, oldY);

    }
    if (keyDown('s')|| keyDown('ы')) {
        player.y += player.speed;
        checkWall(player, oldX, oldY);
    }

    if (keyDown('a')|| keyDown('ф')) {
        player.x -= player.speed;
        checkWall(player, oldX, oldY);

    }

    if (keyDown('d')|| keyDown('в')) {
        player.x += player.speed;
        checkWall(player, oldX, oldY);
    }

    if(keyDown(' ')){
        enemies.forEach(element=>{
            player.attack(element);
            //check if enemy dies
            enemy.death(element, enemies.indexOf(element))
        })
    }
}

