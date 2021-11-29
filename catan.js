const roadVertical = document.getElementsByClassName('road vertical');
const roadTopLeft = document.getElementsByClassName('road top-left');
const roadTopRight = document.getElementsByClassName('road top-right');
const houses = document.getElementsByClassName('house');
const tiles = document.getElementsByClassName('tile');

const tileTypes = ['rock', 'brick', 'wheat', 'sheep', 'wood', 'desert', 'rock', 'brick', 'wheat', 'sheep', 'wood', 'rock', 'brick', 'wheat', 'sheep', 'wood', 'wheat', 'sheep', 'wood'];
const NUMS = [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 3, 4, 5, 6, 8, 9, 10, 11];

/*--------------------------------------------------------------------*/
                            /* LEFT ROADS */
/*--------------------------------------------------------------------*/

function makeLeftRoads () {
    let LEFT = 649;
    let TOP = 177;

    for (let i = 0; i <= 3; i++) {
        roadVertical[i].style.left = `${LEFT}px`;
        roadVertical[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 559;
    TOP = 340;

    for (let i = 4; i <= 8; i++) {
        roadVertical[i].style.left = `${LEFT}px`;
        roadVertical[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 469;
    TOP = 500;

    for (let i = 9; i <= 14; i++) {
        roadVertical[i].style.left = `${LEFT}px`;
        roadVertical[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 559;
    TOP = 660;

    for (let i = 15; i <= 19; i++) {
        roadVertical[i].style.left = `${LEFT}px`;
        roadVertical[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 649;
    TOP = 820;

    for (let i = 20; i <= 23; i++) {
        roadVertical[i].style.left = `${LEFT}px`;
        roadVertical[i].style.top = `${TOP}px`;
        LEFT += 180;
    }
}

/*--------------------------------------------------------------------*/
                        /* TOP LEFT ROADS */
/*--------------------------------------------------------------------*/

function makeTopLeftRoads() {
    let LEFT = 692;
    let TOP = 102;

    for (let i = 0; i <= 2; i++) {
        roadTopLeft[i].style.left = `${LEFT}px`;
        roadTopLeft[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 600;
    TOP = 263;

    for (let i = 3; i <= 6; i++) {
        roadTopLeft[i].style.left = `${LEFT}px`;
        roadTopLeft[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 510;
    TOP = 422;

    for (let i = 7; i <= 11; i++) {
        roadTopLeft[i].style.left = `${LEFT}px`;
        roadTopLeft[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 600;
    TOP = 580;

    for (let i = 12; i <= 16; i++) {
        roadTopLeft[i].style.left = `${LEFT}px`;
        roadTopLeft[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 692;
    TOP = 740;

    for (let i = 17; i <= 20; i++) {
        roadTopLeft[i].style.left = `${LEFT}px`;
        roadTopLeft[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 782;
    TOP = 900;

    for (let i = 21; i <= 23; i++) {
        roadTopLeft[i].style.left = `${LEFT}px`;
        roadTopLeft[i].style.top = `${TOP}px`;
        LEFT += 180;
    }
}

/*--------------------------------------------------------------------*/
                        /* TOP RIGHT ROADS */
/*--------------------------------------------------------------------*/

function makeTopRightRoads() {
    let LEFT = 785;
    let TOP = 102;

    for (let i = 0; i <= 2; i++) {
        roadTopRight[i].style.left = `${LEFT}px`;
        roadTopRight[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 695;
    TOP = 263;

    for (let i = 3; i <= 6; i++) {
        roadTopRight[i].style.left = `${LEFT}px`;
        roadTopRight[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 605;
    TOP = 422;

    for (let i = 7; i <= 11; i++) {
        roadTopRight[i].style.left = `${LEFT}px`;
        roadTopRight[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 513;
    TOP = 580;

    for (let i = 12; i <= 16; i++) {
        roadTopRight[i].style.left = `${LEFT}px`;
        roadTopRight[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 602;
    TOP = 740;

    for (let i = 17; i <= 20; i++) {
        roadTopRight[i].style.left = `${LEFT}px`;
        roadTopRight[i].style.top = `${TOP}px`;
        LEFT += 180;
    }

    LEFT = 690;
    TOP = 900;

    for (let i = 21; i <= 23; i++) {
        roadTopRight[i].style.left = `${LEFT}px`;
        roadTopRight[i].style.top = `${TOP}px`;
        LEFT += 180;
    }
}

/*--------------------------------------------------------------------*/
                            /* HOUSES */
/*--------------------------------------------------------------------*/

function makeHouses () {
    let TOP = 80;
    let LEFT = 750;

    for (let i = 0; i < houses.length; i++) {
        if (i === 3) {
            TOP = 120;
            LEFT = 660;
        }
        else if (i === 7) {
            TOP = 230;
            LEFT = 660;
        }
        else if (i === 11) {
            TOP = 270;
            LEFT = 570;
        }
        else if (i === 16) {
            TOP = 390;
            LEFT = 570;
        }
        else if (i === 21) {
            TOP = 440;
            LEFT = 480;
        }
        else if (i === 27) {
            TOP = 540;
            LEFT = 480;
        }
        else if (i === 33) {
            TOP = 590;
            LEFT = 570;
        }
        else if (i === 38) {
            TOP = 700;
            LEFT = 570;
        }
        else if (i === 43) {
            TOP = 750;
            LEFT = 660;
        }
        else if (i === 47) {
            TOP = 850;
            LEFT = 660;
        }
        else if (i === 51) {
            TOP = 900;
            LEFT = 750;
        }

        houses[i].style.left = `${LEFT}px`;
        houses[i].style.top = `${TOP}px`;

        LEFT += 180;
    }
}

function initialAssignment () {
    for (let i = 0; i < tiles.length; i++) {
        let rand = Math.floor(Math.random() * tileTypes.length);
        let type = tileTypes.splice(rand, 1);

        tiles[i].classList.add(type);
        tiles[i].style.backgroundImage = `url('./assets/tiles/${type}.png')`;
        tiles[i].style.backgroundSize = "100%";
    }

    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].classList.contains('desert')) {
            continue;
        }
        else {
            let rand = Math.floor(Math.random() * NUMS.length);
            let num = NUMS.splice(rand, 1);

            tiles[i].classList.add(num);
            tiles[i].innerText = num.toString();
        }
    }
}

function initialHouseAssignment () {
    houses[0].classList.add(tiles[0].classList[2]);
    houses[1].classList.add(tiles[1].classList[2]);
    houses[2].classList.add(tiles[2].classList[2]);

    houses[3].classList.add(tiles[0].classList[2]);
    houses[4].classList.add(tiles[0].classList[2], tiles[1].classList[2]);
    houses[5].classList.add(tiles[1].classList[2], tiles[2].classList[2]);
    houses[6].classList.add(tiles[2].classList[2]);

    houses[7].classList.add(tiles[0].classList[2], tiles[3].classList[2]);
    houses[8].classList.add(tiles[0].classList[2], tiles[1].classList[2], tiles[4].classList[2]);
    houses[9].classList.add(tiles[1].classList[2], tiles[2].classList[2], tiles[5].classList[2]);
    houses[10].classList.add(tiles[2].classList[2], tiles[6].classList[2]);

    houses[11].classList.add(tiles[3].classList[2]);
    houses[12].classList.add(tiles[0].classList[2], tiles[3].classList[2], tiles[4].classList[2]);
    houses[13].classList.add(tiles[1].classList[2], tiles[4].classList[2], tiles[5].classList[2]);
    houses[14].classList.add(tiles[2].classList[2], tiles[5].classList[2], tiles[6].classList[2]);
    houses[15].classList.add(tiles[6].classList[2]);

    houses[16].classList.add(tiles[3].classList[2], tiles[7].classList[2]);
    houses[17].classList.add(tiles[3].classList[2], tiles[4].classList[2], tiles[8].classList[2]);
    houses[18].classList.add(tiles[4].classList[2], tiles[5].classList[2], tiles[9].classList[2]);
    houses[19].classList.add(tiles[5].classList[2], tiles[6].classList[2], tiles[10].classList[2]);
    houses[20].classList.add(tiles[6].classList[2], tiles[11].classList[2]);

    houses[21].classList.add(tiles[7].classList[2]);
    houses[22].classList.add(tiles[3].classList[2], tiles[7].classList[2], tiles[8].classList[2]);
    houses[23].classList.add(tiles[4].classList[2], tiles[8].classList[2], tiles[9].classList[2]);
    houses[24].classList.add(tiles[5].classList[2], tiles[9].classList[2], tiles[10].classList[2]);
    houses[25].classList.add(tiles[6].classList[2], tiles[10].classList[2], tiles[11].classList[2]);
    houses[26].classList.add(tiles[11].classList[2]);

    houses[27].classList.add(tiles[7].classList[2]);
    houses[28].classList.add(tiles[7].classList[2], tiles[8].classList[2], tiles[12].classList[2]);
    houses[29].classList.add(tiles[8].classList[2], tiles[9].classList[2], tiles[13].classList[2]);
    houses[30].classList.add(tiles[9].classList[2], tiles[10].classList[2], tiles[14].classList[2]);
    houses[31].classList.add(tiles[10].classList[2], tiles[11].classList[2], tiles[15].classList[2]);
    houses[32].classList.add(tiles[11].classList[2]);

    houses[33].classList.add(tiles[7].classList[2], tiles[12].classList[2]);
    houses[34].classList.add(tiles[8].classList[2], tiles[12].classList[2], tiles[13].classList[2]);
    houses[35].classList.add(tiles[9].classList[2], tiles[13].classList[2], tiles[14].classList[2]);
    houses[36].classList.add(tiles[10].classList[2], tiles[14].classList[2], tiles[15].classList[2]);
    houses[37].classList.add(tiles[11].classList[2], tiles[15].classList[2]);

    houses[38].classList.add(tiles[12].classList[2]);
    houses[39].classList.add(tiles[12].classList[2], tiles[13].classList[2], tiles[16].classList[2]);
    houses[40].classList.add(tiles[13].classList[2], tiles[14].classList[2], tiles[17].classList[2]);
    houses[41].classList.add(tiles[14].classList[2], tiles[15].classList[2], tiles[18].classList[2]);
    houses[42].classList.add(tiles[15].classList[2]);

    houses[43].classList.add(tiles[12].classList[2], tiles[16].classList[2]);
    houses[44].classList.add(tiles[13].classList[2], tiles[16].classList[2], tiles[17].classList[2]);
    houses[45].classList.add(tiles[14].classList[2], tiles[17].classList[2], tiles[18].classList[2]);
    houses[46].classList.add(tiles[15].classList[2], tiles[18].classList[2]);

    houses[47].classList.add(tiles[16].classList[2]);
    houses[48].classList.add(tiles[16].classList[2], tiles[17].classList[2]);
    houses[49].classList.add(tiles[17].classList[2], tiles[18].classList[2]);
    houses[50].classList.add(tiles[18].classList[2]);

    houses[51].classList.add(tiles[16].classList[2]);
    houses[52].classList.add(tiles[17].classList[2]);
    houses[53].classList.add(tiles[18].classList[2]);
}

window.addEventListener('DOMContentLoaded', e => {
    makeLeftRoads();
    makeTopLeftRoads();
    makeTopRightRoads();
    makeHouses();
    initialAssignment();
    initialHouseAssignment();
});
