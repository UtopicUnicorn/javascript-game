const potion = {
    tile: Image,
    x: Number,
    y: Number,

    power: 20000,

    heal: function (player){
        player.health+=potion.power;
    }
}

const potions =[
    {
        x: 150, y: 300
    },
    {
        x: 800, y:520
    },
    {
        x: 500, y:200
    },
]
