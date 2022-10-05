const enemy ={
    x : Number,
    y : Number,
    health: 500,
    damage: 1,

    attack: function(player){
        if((enemy.x + 32 === player.x || enemy.x -32 ===player.x) || (enemy.y - 32 === player.y || enemy.y - 32 === player.y)){
            player.health = player.health- enemy.damage;
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


const enemies = [
    {
        x: 150, y: 350,
    },
    {
        x: 800, y:520
    },
    {
        x: 300, y:100
    },
    {
        x: 850, y: 100
    },
]
