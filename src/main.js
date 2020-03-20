var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var game = new Game();

function gameLoop() {
    setInterval( function () {
        game.update();
        game.draw();
    } ,100)
}

function initForBlinker() {
    game.gameSquare[1][1].setAlive(true);
    game.gameSquare[1][2].setAlive(true);
    game.gameSquare[1][3].setAlive(true);
    game.draw();
}

function initForGlider() {
    game.gameSquare[1][3].setAlive(true);
    game.gameSquare[2][3].setAlive(true);
    game.gameSquare[3][3].setAlive(true);

    game.gameSquare[3][2].setAlive(true);
    game.gameSquare[2][1].setAlive(true);
    game.draw();
}

function initFromSequence(sequence){
    let parts = sequence.split('\n');
    for (let j = 0; j < parts.length; j++) {
        for(let i = 0; i < parts[j].length; i++){
            if ( parts[j].charAt(i) == '1' )
                game.gameSquare[i][j].isAlive = true;
        }
    }
}

let seq =
    "00000000000000000000000000001\n" +
    "00000000000000000000000000101\n" +
    "0000000000000000110000001100000000000011\n" +
    "0000000000000001000100001100000000000011\n" +
    "00001100000000100000100011000\n" +
    "00001100000000100010110000101\n" +
    "00000000000000100000100000001\n" +
    "00000000000000010001000000000\n" +
    "00000000000000001100000000000"
initFromSequence(seq);
gameLoop();