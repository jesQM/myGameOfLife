class Game {
    constructor(x = 100, y = 100){
        this.gameSquare = new Array(x);

        for (let i = 0; i < x; i++) {
            this.gameSquare[i] = new Array(y);
        }

        let alive = false;
        for (let i = 0; i < this.gameSquare.length; i++) {
            for (let j = 0; j < this.gameSquare[0].length; j++) {
                this.gameSquare[i][j] = new Cell(i,j);
                this.gameSquare[i][j].setAlive(alive);
            }
        }
    }

    update(){
        for (let i = 0; i < this.gameSquare.length; i++) {
            for (let j = 0; j < this.gameSquare[0].length; j++) {
                this.gameSquare[i][j].update();
            }
        }

        for (let i = 0; i < this.gameSquare.length; i++) {
            for (let j = 0; j < this.gameSquare[0].length; j++) {
                this.gameSquare[i][j].applyUpdate();
            }
        }
    }

    draw(){
        for (let i = 0; i < this.gameSquare.length; i++) {
            for (let j = 0; j < this.gameSquare[0].length; j++) {
                this.gameSquare[i][j].draw();
            }
        }
    }
}