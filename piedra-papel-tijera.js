
const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";


function random(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);

}


function computerHand() {

    let number = random(1, 3);

    if (number == 1) {
        return piedra;
    } else if (number == 2) {
        return papel;
    } else if (number == 3) {
        return tijera;
    }

}


function result(userHand) {

    let cHand = computerHand();

    if (userHand == piedra && cHand == piedra) {
        return "Empate, Computer uso piedra.";
    } else if (userHand == piedra && cHand == papel) {
        return "Perdiste, Computer uso papel.";
    } else if (userHand == piedra && cHand == tijera) {
        return "Ganaste, Computer uso tijera.";
    } else if (userHand == papel && cHand == piedra) {
        return "Ganaste, Computer uso piedra.";
    } else if (userHand == papel && cHand == papel) {
        return "Empate, Computer uso papel.";
    } else if (userHand == papel && cHand == tijera) {
        return "Perdiste, Computer uso tijera.";
    } else if (userHand == tijera && cHand == piedra) {
        return "Perdiste, Computer uso piedra.";
    } else if (userHand == tijera && cHand == papel) {
        return "Ganaste, Computer uso papel.";
    } else if (userHand == tijera && cHand == tijera) {
        return "Empate, Computer uso tijera.";
    }

}