let player = 'X';
let winner = '';
const places = {};
const elements = document.getElementsByClassName('col');
const message = document.getElementById('message');
const btnReset = document.getElementById('reset');

btnReset.addEventListener('click', () => reset());

for (const el of elements) {
    el.addEventListener('click', () => mark(el));
    places[el.dataset.position] = el;
}

function mark (el) {
    if (winner !== '') {
        return;
    }

    if (el.innerHTML !== "") {
        return;
    }

    el.innerHTML = player;

    if (checkWin()) {
        winner = player;
        message.innerHTML = `Player ${player} win!`;
        return;
    }

    changePlayer();
}

function changePlayer() {
    player = player === 'X' ? 'O' : 'X';
}

function checkWin() {
    const cases = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];

    for (const caseTest of cases) {
        [positionA , positionB, positionC] = caseTest;

        if (places[positionA].innerHTML === "" || places[positionB].innerHTML === "" || places[positionC].innerHTML === "") {
            continue;
        }

        if (
            places[positionA].innerHTML === places[positionB].innerHTML &&
            places[positionA].innerHTML === places[positionC].innerHTML &&
            places[positionB].innerHTML === places[positionC].innerHTML
        ) {
            places[positionA].style.background = '#8bc34a';
            places[positionB].style.background = '#8bc34a';
            places[positionC].style.background = '#8bc34a';
            return true;
        }
    }

    return false;
}


function reset() {
    player = 'X';
    winner = '';

    for (const el of elements) {
        el.innerHTML = '';
        el.style.background = '#ddd';
    }

    message.innerHTML = '';
}
