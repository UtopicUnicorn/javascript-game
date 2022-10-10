const player ={
    x : Number,
    y : Number,
    health: 500,
    damage: 2,
    speed: 1,
    maxHealth: 500,

    attack: function(enemy){
        // if enemy in one tile from player - attack
        if(Math.abs(player.x-enemy.x)<=tileSize && Math.abs(player.y-enemy.y)<=tileSize){
            enemy.health-=player.damage;
        }
    },

    death: function(){
        // return true if player is dead
        return this.health <= 0;
    },

}
