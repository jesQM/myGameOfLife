class Cell {
    constructor(i, j, width = 10, height = 10) {
        this.x = i;
        this.y = j;

        this.width = width;
        this.height = height;

        this.isAlive = false;
        this.newAlive = false;
    }

    update(){
        let count = 0; // alive count
        for (let i = this.x-1; i <= this.x+1; i++) {
            for (let j = this.y-1; j <= this.y+1; j++) {
                if ( i < 0 || j < 0) continue;
                if ( i >= game.gameSquare.length || j >= game.gameSquare[0].length) continue;
                if ( i == this.x && j == this.y) continue;

                // all 8 surrounding cells, outside grid are dead
                if ( game.gameSquare[i][j].isAlive )
                    count++;
            }
        }

        if (count < 2) {
            this.newAlive = false;
        } else if (count > 3) {
            this.newAlive = false;
        } else if (count == 3) {
            this.newAlive = true;
        } else {
            this.newAlive = this.isAlive;
        }
    }

    applyUpdate(){
        this.isAlive = this.newAlive;
    }

    draw(){

        ctx.fillStyle = "white";
        if (this.isAlive)
            ctx.fillStyle = "black";
        ctx.fillRect(this.x * this.width, this.y * this.height, this.width, this.height);
    }

    setAlive(value){
        this.isAlive = value;
    }
}