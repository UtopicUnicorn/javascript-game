const potion = {
    //amount of health that potion gives
    power: 500,

    heal: function (){
        if(player.health + potion.power > player.maxHealth){
            player.health = player.maxHealth;
        }else{
            player.health=potion.power;
        }
    }
}

let potions = [];
