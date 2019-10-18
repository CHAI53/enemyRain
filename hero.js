class Hero {
    constructor(name, leftValue, frontSide, leftSide, rightSide) {
        this.name = name;
        this.bottomValue = 100;
        this.leftValue = leftValue;
        this.frontSide = frontSide;
        this.leftSide = leftSide;
        this.rightSide = rightSide;
        this.heroMaker = document.getElementById('hero');
        this.lookFront();
    }

    lookFront () {
        this.heroMaker = document.getElementById('hero');
        this.heroMaker.style.bottom = this.bottomValue +'px';
        this.heroMaker.style.left = this.leftValue + 'px';
        this.heroMaker.style.backgroundPosition  = this.frontSide;
    }

    moveLeft () {
        this.heroMaker = document.getElementById('hero');
        this.heroMaker.style.bottom = this.bottomValue + 'px';
        this.heroMaker.style.backgroundPosition = this.leftSide;
        if(this.leftValue > 270){
            this.leftValue = this.leftValue - 5;
        }
        this.heroMaker.style.left = this.leftValue + 'px';
    }

    moveRight() {
        this.heroMaker = document.getElementById('hero');
        this.heroMaker.style.bottom = this.bottomValue + 'px';
        this.heroMaker.style.backgroundPosition = this.rightSide;
        if(this.leftValue < 1045){
            this.leftValue = this.leftValue + 5;
        }
        this.heroMaker.style.left = this.leftValue + 'px';
    }
}
