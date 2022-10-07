const FPS = 120;
document.addEventListener('DOMContentLoaded',domloaded,false);

function domloaded() {

        setInterval(function (){
            draw();
            checkDirection();
            checkItemTaken();
            enemiesActions();
        },1000/FPS)
}
