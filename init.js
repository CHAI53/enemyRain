const newHero = new Hero('hero', '675', '0px, 0px', '-70px, 0px', '-105px, 0px');

function play() {
    window.addEventListener('keydown', function(event){
        if (event.keyCode === 37) {
            newHero.moveLeft();
        } else if (event.keyCode === 39) {
            newHero.moveRight();
        }
    });
}

play();

setTimeout(() => new Enemy ('newEnemy', '-45px 0px', 500));

function enemyRepeated (delayTime, repeatedNum) {
    let num = 1;
    let intervalId = setInterval(()=>{ 
        new Enemy ('newEnemy')
        if (num === repeatedNum){
            clearInterval(intervalId);
        }      
        ++num;
        }, delayTime);
}

enemyRepeated(3000, 15);
