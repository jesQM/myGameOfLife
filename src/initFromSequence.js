function InitFromSequence(sequence){
    let parts = sequence.split('\n');
    for (let j = 0; j < parts.length; j++) {
        for(let i = 0; i < parts[j].length; i++){
            if ( parts[j].charAt(i) == '1' )
                game.gameSquare[i][j].isAlive = true;
        }
    }
}