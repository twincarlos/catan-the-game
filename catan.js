let urls = ['mountains', 'farm', 'forest', 'field', 'factory', 'desert',
'mountains', 'farm', 'forest', 'field', 'factory', 'mountains', 'farm',
'forest', 'field', 'factory', 'farm', 'forest', 'field'];
let nums = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

const PHASE = 1;
const TURN = 1;

window.addEventListener('DOMContentLoaded', e => {
    const begin = document.getElementById('begin');
    const tiles = document.getElementsByClassName('tile');
    const circles = document.getElementsByClassName('circle');
    const roads = document.getElementsByClassName('road');
    const towns = document.getElementsByClassName('town');

    // GAME STARTS
    begin.addEventListener('click', e => {
        begin.disabled = true;

        // SHUFFLES BOARD
        for (let i = 0; i < 19; i++) {
            let rand = Math.floor(Math.random() * urls.length);
            tiles[i].classList.add(urls[rand]);
            urls.splice(rand, 1);
        }

        // SHUFFLES CIRCLES
        for (let i = 0; i < 19; i++) {
            if (tiles[i].className === 'tile desert') {
                circles[i].classList.add('robber');
            } else {
                let rand = Math.floor(Math.random() * nums.length);
                circles[i].innerText = nums[rand];
                nums.splice(rand, 1);
            }
        }

        roads.forEach()
    });


});
