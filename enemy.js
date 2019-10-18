class Enemy {
  constructor(name, outImg){
    this.name = name;
    this.bottomValue = 640;
    this.randomPosition = Math.floor(Math.random()*(770+1))+270;
    this.leftValue = this.randomPosition;
    this.outImg = outImg;
    this.makeEnemy();
    this.move();
  }

  makeEnemy() {
    const bgId = document.getElementById('bg');
    this.enemyDiv = document.createElement('div');
    this.enemyDiv.className =this.name;
    this.enemyDiv.style.left = this.randomPosition + 'px';
    bgId.appendChild(this.enemyDiv);
  }

  move() {
    setInterval(() => {
      if (this.bottomValue < 650 && this.bottomValue > 100) {
          this.bottomValue -= 50;
          this.enemyDiv.style.bottom = this.bottomValue +'px';
          if(this.leftValue === newHero.leftValue) {
              this.enemyDiv.style.backgroundPosition = outImg;
          }
      }
    }, 1000);
  }
}
