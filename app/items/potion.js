const potion = {
    //amount of health that potion gives
    power: 500,

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
