const sword = {
    x: Number,
    y: Number,

    power: 10,

    buff: function(player){
        player.damage+=sword.power;
    }
}

const swords = [
    {x: 200, y: 400},
    {x: 500, y: 150},
]
