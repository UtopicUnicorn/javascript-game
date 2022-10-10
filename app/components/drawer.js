const canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 640;


const context = canvas.getContext('2d');

//map
const wall = new Image();
const road = new Image();

//actors
const p = new Image();
const enemy_a = new Image();

//items
const potion_p = new Image();
const sword_p = new Image();

wall.src = '../assets/images/tile-W.png';
road.src = '../assets/images/tile-.png';

p.src = '../assets/images/tile-P.png';
enemy_a.src = '../assets/images/tile-E.png';

potion_p.src = '../assets/images/tile-HP.png';
sword_p.src = '../assets/images/tile-SW.png';

function draw() {
    context.clearRect(0,0,1024,640);

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 0) {
                context.drawImage(wall, j * tileSize, i * tileSize, tileSize, tileSize);
            }
            if (map[i][j] === 1) {
                context.drawImage(road, j * tileSize, i * tileSize, tileSize, tileSize);
            }
        }
    }

    potions.forEach(el=>{
        context.drawImage(potion_p, el.x, el.y, tileSize, tileSize);
    });

    swords.forEach(el=>{
        context.drawImage(sword_p, el.x, el.y, tileSize, tileSize)
    })

    enemies.forEach(el=>{
        //fill health bar
        createHealthBar(el);
        context.drawImage(enemy_a, el.x, el.y, tileSize, tileSize);
    });

    //fill health bar
    createHealthBar(player);
    context.drawImage(p, player.x, player.y, tileSize, tileSize);

}

   function createHealthBar(actor){

        const fullHPBarWidth = tileSize-2;

        let currenHP = actor.health/actor.maxHealth *30;

        if(actor.health<=0){
            currenHP = 0;
        }

       context.fillStyle='red';
       context.fillRect(actor.x, actor.y-15, fullHPBarWidth, tileSize-25);

       context.fillStyle='green';
       context.fillRect(actor.x, actor.y-15, currenHP, tileSize-25);

    }
