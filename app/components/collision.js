function checkItemTaken(){
    potions.slice(0).forEach((element)=>{
        //if player steps on potion give health and delete it from array
        if((player.x===element.x) && Math.abs(player.y-element.y)<=10){
            potion.heal();
            potions.splice(potions.indexOf(element),1);
        }
    });

    swords.slice(0).forEach((element)=>{
        //if player steps on sword give buff and delete it from array
        if((player.x===element.x) && Math.abs(player.y-element.y)<=10){
            sword.buff();
            swords.splice(swords.indexOf(element),1);
        }
    });

}

function checkWall(actor, oldX, oldY){
    const tileSize = 32;

    //going through all map to check all tiles
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            //if tile is a wall
            if (map[i][j] === 0) {
                //check if actor stepping on wall tile but give one pixel to go through corridors smoothly
                if(Math.abs(actor.x-j*tileSize)<=tileSize-2 && Math.abs(actor.y-i*tileSize)<=tileSize-2){
                    //if actor on wall placing old position
                    actor.x = oldX;
                    actor.y = oldY;
                }
            }
        }
    }
}
