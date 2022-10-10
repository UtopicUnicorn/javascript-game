//global vars of map and size of tile
let map = [[]];
const tileSize = 32;

function mapGenerator() {
    //map size
    const n = 20;
    const m = 32;


    //fill map with walls;
    for (let i = 0; i < n; i++) {
        map[i] = [];
        for (let j = 0; j < m; j++) {
            map[i][j] = 0;
        }
    }

    // pseudorandom of rooms amount;
    let rooms = Math.floor(Math.random() * 5 + 5);

        while (rooms > 0) {

            //width
            let xSize = Math.floor(Math.random() * 3 + 3)
            //height
            let ySize = Math.floor(Math.random() * 3 + 3)

            let positionY = yGenerator();
            let positionX = xGenerator();

            //check if room out of matrix
            if(positionY>1 && positionY +ySize<n-1 && positionX>1 && positionX +xSize<m-1){
                //if wall
                if (map[positionY][positionX] === 0) {
                    for (let i = positionY; i < positionY + ySize-1; i++) {
                        for (let j = positionX; j < positionX + ySize-1; j++) {
                            map[i][j] = 1;
                        }
                    }
                    rooms--;
                }
            }
        }

    // generate amount of horizontal corridors
    const horizontalLines = Math.floor(Math.random() * 3 + 3);

    // generate amount of vertical corridors
    const verticalLines = Math.floor(Math.random() * 3 + 3);


    // place horizontal corridors
    for (let h = 0; h < horizontalLines;) {
        let i = yGenerator();
        if (map[i][1] !== 1 && map[i - 1][1] !== 1 && map[i + 1][1] !== 1) {
            for (let j = 1; j < map[i].length - 1; j++) {
                map[i][j] = 1;
            }
            h++;
        }
    }

    // place vertical corridors
    for (let h = 0; h < verticalLines;) {
        let j = xGenerator()
        if (map[1][j] !== 1 && map[1][j - 1] !== 1 && map[1][j + 1] !== 1) {
            for (let i = 1; i < map.length - 1; i++) {
                map[i][j] = 1;
            }
            h++;
        }
    }

    //placing enemies
    placer( 10, 2);

    //placing potions
    placer(10, 3)

    //placing swords
    placer(2, 4 );

    //placing player
    placer( 1,5)

    //push coords to arrays and switch map to 0 and 1
    mapCleaner();

}

    function placer(amount, type){
        while (amount > 0) {
          let coordX = xGenerator();
          let coordY = yGenerator();

          if (map[coordY][coordX] === 1) {
              map[coordY][coordX] = type;
                amount--;
          }
        }
    }


    //generate x position
    function xGenerator(){
        return Math.floor(Math.random() * 29 + 2);
    }

    //generate y position
    function yGenerator(){
        return Math.floor(Math.random() * 16 + 2);
    }

    function mapCleaner(){
        for(let i =0; i<map.length;i++){
            for (let j =0; j<map[i].length;j++){
                switch (map[i][j]){

                    case 2:{
                        enemies.push({x: j*tileSize, y: i* tileSize, health: 100, damage: 1, maxHealth: 100 });
                        map[i][j]=1;
                        break;
                    }

                    case 3:{
                        potions.push({x: j*tileSize, y: i* tileSize });
                        map[i][j]=1;
                        break;

                    }

                    case 4:{
                        swords.push({x: j*tileSize, y: i* tileSize });
                        map[i][j]=1;
                        break;
                    }

                    case 5:{
                        player.x = j*tileSize;
                        player.y = i*tileSize;
                        map[i][j]=1;
                        break;
                    }
                }
            }
        }
    }
