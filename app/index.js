const FPS = 120;
document.addEventListener('DOMContentLoaded',domloaded,false);


function domloaded() {

        setInterval(function (){
            document.getElementById('health').innerHTML = player.health;
            document.getElementById('damage').innerHTML = player.damage

            draw();
            checkDirection();
            checkItemTaken();
            enemiesActions();
        },1000/FPS)
}
