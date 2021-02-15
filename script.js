const places = document.getElementsByClassName('col');

for (const place of places) {
    place.addEventListener('click', () => mark(place))
}

function mark (place) {
    if (place.innerHTML !== "") {
        return;
    }

    place.innerHTML = 'X';
}
