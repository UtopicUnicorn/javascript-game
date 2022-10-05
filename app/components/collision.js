function checkItemTaken(){
    potions.slice(0).forEach((element)=>{
        if((player.x===element.x) && Math.abs(player.y-element.y)<=10){
            potion.heal();
            potions.splice(potions.indexOf(element),1);
        }
    });

    swords.slice(0).forEach((element)=>{
        if((player.x===element.x) && Math.abs(player.y-element.y)<=10){
            sword.buff();
            swords.splice(swords.indexOf(element),1);
        }
    });

}
