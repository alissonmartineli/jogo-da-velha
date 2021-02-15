const places = document.getElementsByClassName('col');

for (const place of places) {
    place.addEventListener('click', () => mark(place))
}

let player = 'X';

function mark (place) {
    if (place.innerHTML !== "") {
        return;
    }

    place.innerHTML = player;

    changePlayer();
}

function changePlayer() {
    player = player === 'X' ? 'O' : 'X';
}
