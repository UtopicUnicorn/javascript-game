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
        if(Math.abs(element.x - player.x)<=tileSize && Math.abs(element.y - player.y)<=tileSize){
            enemy.attack(element);
        }

        //move enemy
        enemy.movement(element);
    })

 }

let enemies =[];
