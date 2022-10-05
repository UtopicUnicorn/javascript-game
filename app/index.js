
document.addEventListener('DOMContentLoaded',domloaded,false);

function domloaded() {

        setInterval(function (){
            draw();
            checkDirection();
        },1)
}
