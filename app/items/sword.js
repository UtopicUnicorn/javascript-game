const sword = {
    x: Number,
    y: Number,

    power: 10,

    buff: function(){
        player.damage+=sword.power;
    }
}

let swords = [
    {x: 100, y: 170},
    {x: 880, y: 300},
]
