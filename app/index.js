const FPS = 120;
document.addEventListener('DOMContentLoaded',domloaded,false);

const count = 10;

function domloaded() {
        mapGenerator();
        let game =  setInterval(function (){
            document.getElementById('health').innerHTML = player.health;
            document.getElementById('damage').innerHTML = player.damage;
            draw();
            checkDirection();
            checkItemTaken();
            enemiesActions();
            if(player.death()){
                clearInterval(game)
                alert('You have died. Please reload page to play again')
            }
            if(enemies.length===0){
                clearInterval(game)
                alert('Congratulations, you killed all enemies. Please reload page to play again')
            }
        },1000/FPS)
}
