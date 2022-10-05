const potion = {
    tile: Image,
    x: Number,
    y: Number,

    power: 20000,

    heal: function (){
        player.health+=potion.power;
    }
}

let potions =[
    {
        x: 150, y: 500
    },
    {
        x: 800, y: 520
    },
    {
        x: 850, y: 200
    },
]
