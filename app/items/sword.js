const sword = {
    //amount of damage that sword gives
    power: 2,

    buff: function(){
        player.damage+=sword.power;
    }
}

let swords = [
    {
        x: 100, y: 170
    },
    {
        x: 880, y: 300
    },
]
