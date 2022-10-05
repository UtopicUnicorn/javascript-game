const player ={
    x : 100,
    y : 100,
    health: 10000,
    damage: 1,

    attack: function(enemy){
        if((enemy.x + 32 === player.x || enemy.x -32 ===player.x) || (enemy.y - 32 === player.y || enemy.y - 32 === player.y)){
            enemy.health = enemy.health- player.damage;
        }
    },

    death: function(){
        if(player.health<=0){
            player.x = 100;
            player.y = 100;
            player.health = 10000;
        }
    },

}
