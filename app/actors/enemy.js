const enemy ={
    speed: 0.5,

    attack: function(enemy){
        player.health-=enemy.damage;
    },

    death: function (enemy, index){
        //remove enemy from array if he is dead
        if(enemy.health<=0){
            enemies.splice(index,1);
        }
    },

    //silly algorithm to move close to the player
    movement: function (enemy){

        const tileSize = 32;
        //old position to check for collision
        const oldEnemyX = enemy.x;
        const oldEnemyY = enemy.y;

        //if player is on the right and in vision zone
        if(player.x-enemy.x>=tileSize && player.x-enemy.x<=tileSize*4 && Math.abs(player.y-enemy.y)<=tileSize*4){
            enemy.x+=this.speed;
            checkWall(enemy, oldEnemyX, oldEnemyY);
        }

        //if player is on the left and in vision zone
        if(enemy.x-player.x>=tileSize && enemy.x-player.x<=tileSize*4 && Math.abs(player.y-enemy.y)<=tileSize*4){
            enemy.x-=this.speed;
            checkWall(enemy, oldEnemyX, oldEnemyY);
        }

        //if player is below the enemy and in vision zone
        if(player.y-enemy.y>=tileSize && player.y-enemy.y<=tileSize*4 && Math.abs(player.x-enemy.x)<=tileSize*4){
            enemy.y+=this.speed;
            checkWall(enemy, oldEnemyX, oldEnemyY);
        }

        //if player position is higher than enemy
        if(enemy.y-player.y>=tileSize && enemy.y-player.y<=tileSize*4 && Math.abs(player.x-enemy.x)<=tileSize*4){
            enemy.y-=this.speed;
            checkWall(enemy, oldEnemyX, oldEnemyY);
        }
    }

}

 function enemiesActions(){
    enemies.forEach(element=>{
        //if player is close less than 10 pixels - attack player
        if(Math.abs(element.x - player.x)<=32 && Math.abs(element.y - player.y)<=32){
            enemy.attack(element);
            console.log(player.health);

            //check if player dead
            player.death();
        }
        //move enemy
        enemy.movement(element);
    })
 }


const enemies = [
    {
        x: 150, y: 350, health: 100, damage: 1,
    },
    {
        x: 800, y:520, health: 100, damage: 1,
    },
    {
        x: 300, y:100, health: 100, damage: 1,
    },
    {
        x: 850, y: 100, health: 100, damage: 1,
    },
]
