const roadVertical = document.getElementsByClassName('road vertical');
const roadTopLeft = document.getElementsByClassName('road top-left');
const roadTopRight = document.getElementsByClassName('road top-right');
const houses = document.getElementsByClassName('house');

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

    for (let i = 0; i <= 54; i++) {
        if (i === 3) {
            TOP = 120;
            LEFT = 660;
        }
        else if (i === 7) {
            TOP = 210;
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

window.addEventListener('DOMContentLoaded', e => {
    makeLeftRoads();
    makeTopLeftRoads();
    makeTopRightRoads();
    makeHouses();
});
