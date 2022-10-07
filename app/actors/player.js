const player ={
    x : 100,
    y : 100,
    health: 500,
    damage: 1,
    speed: 1,

    attack: function(enemy){
        //if enemy in one tile from player - attack
        if(Math.abs(player.x-enemy.x)<=32 && Math.abs(player.y-enemy.y)<=32){
            enemy.health-=player.damage;
        }
    },

    death: function(){
        //respawn if player dies
        if(this.health<=0){
            this.x = 100;
            this.y = 100;
            this.health = 500;
            this.damage = 1;
        }
    },

}
