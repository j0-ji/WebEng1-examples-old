'use strict';

class Bubble {
    bubble;
    reflUno;
    reflDos;
    id;
    alive;

    constructor(id) {
        this.bubble = document.createElement('div');
        this.reflUno = document.createElement('span');
        this.reflDos = document.createElement('span');
        this.reflTres = document.createElement('span');

        this.id = id;
    }

    randomColor() {
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;
        let a = Math.random();

        return 'rgb(' + r + ',' + g + ',' + b + ',' + a + ')';
    }

    randomSize(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomBorderWidth(size) {
        let bw = size / 10;
        Math.floor(bw);
        return bw;
    }

    randomTop(size) {
        let h = window.innerHeight - size;
        return this.randomSize(0, h);
    }

    randomLeft(size) {
        let w = window.innerWidth - size;
        return this.randomSize(0, w);
    }

    addKillEventListener() {
        let thisBubble = document.getElementById(this.id);

        let remove = () => {
            game.bubbleCounter--;
            game.killCounter++;
            document.getElementById('box').removeChild(thisBubble);
        }

        thisBubble.addEventListener('click', remove);
    }

    constructBubble() {
        let size = this.randomSize( 50, 200);
        let bw = this.randomBorderWidth(size);
        let shadow =

            //add bubble to section
            document.getElementById('box').appendChild(this.bubble);
        this.bubble.classList.add('bubble');
        this.bubble.id = this.id

        //bubble size (w/h)
        this.bubble.style.width = size + 'px';
        this.bubble.style.height = size + 'px';

        //random Shadow Opacity
        //this.bubble.style.boxShadow = this.randomShadowOpacity();

        //bubble position
        this.bubble.style.top = this.randomTop(size) + 'px';
        this.bubble.style.left = this.randomLeft(size) + 'px';

        //add bubble-children (reflections)
        this.bubble.appendChild(this.reflUno);
        this.bubble.appendChild(this.reflDos);
        this.bubble.appendChild(this.reflTres);

        //border-color
        this.reflUno.style.borderLeftColor = this.randomColor();
        this.reflDos.style.borderRightColor = this.randomColor();
        //this.reflTres.style.borderBottomColor = this.randomColor();

        //border-width
        this.reflUno.style.borderLeftWidth = bw + 'px';
        this.reflDos.style.borderRightWidth = bw + 'px';

        this.addKillEventListener();
    }
}

class Game {
    // don't let bubbleCounter reach ten
    // after 20 killed bubbles spawn-rate increases

    // ATTRIBUTES
    level = 1;              // current lvl
    lvlLimit;               // max-lvl -> needed to win
    minSpeed;               // minimumSpeed speed
    currentSpeed = 0;       // self explanatory...
    speedMultiplier;        // speed gets multiplied with this value after each lvl increase (0-1); the smaller, the faster it gets
    killCounter;            // self explanatory...
    killLimitOfLevel;       // max kills per level (except boss lvl)
    maxBubbles;             // self explanatory...
    playerHp;

    bubbleCounter = 0;
    id = 0;

    constructor( lvlLimit, minSpeed, speedMultiplier, killLimitOfLevel, maxBubbles, playerHp) {
        this.lvlLimit = lvlLimit;
        this.minSpeed = minSpeed;
        this.speedMultiplier = speedMultiplier;
        this.killLimitOfLevel = killLimitOfLevel;
        this.maxBubbles = maxBubbles;
        this.playerHp = playerHp;
    }

    start() {
        while( this.level < this.lvlLimit ) {
            this.increaseSpeed();

            this.id++;
            this.bubbleCounter++;
            let bubble = new Bubble(this.id);
            bubble.constructBubble();


            let interval = setInterval(() => {
                if (this.bubbleCounter >= this.maxBubbles - 1) {
                    try {
                        kamikazeOldestBubble();
                        this.bubbleCounter--;
                        this.playerHp--;
                    } catch (err) {
                    }
                }
                if (this.id === this.bubbleCounter * 2) {
                    this.id = 0;
                }

                this.id++;
                this.bubbleCounter++;
                let newBubble = Bubble(this.id)
                newBubble.constructBubble();
                console.log(this.id + ' : ' + this.bubbleCounter);
            }, this.currentSpeed);

            this.checkHp(interval); // interval needs to get passed, so it can get killed

            this.increaseLvl();
        }
    }

    increaseSpeed() {
        if( this.level === 1 ) {
            this.currentSpeed = this.minSpeed;
        }
        this.currentSpeed = this.currentSpeed * this.speedMultiplier;
    }

    checkHp(interval) {
        if( this.playerHp === 0 ) {
            clearInterval(interval)
            this.level = 99999;
        }
    }

    increaseLvl() {
        if( this.killCounter === this.killLimitOfLevel) {
            this.level++;
        }
    }
}

class Boss {
    // need to be clicked hp-times
    // can spawn bubbles, which regenerate his hp-every x seconds
    // if bubble limit reached -> loose

    // ATTRIBUTES
    hp;                     // clicks needed to kill boss
    currentHp;              // self explanatory...

    constructor(maxHp) {
        this.hp = maxHp;
        this.currentHp = maxHp;
    }

    reduceHp() {

    }

    spawnBubbles() {

    }

    regenerate() {

    }
}

let game = new Game(
    10,
    2000,
    0.8,
    20,
    10,
    5,
);

let kamikazeOldestBubble = () => {
    document.getElementById('box').removeChild(document.getElementById('box').firstChild)
}

window.onload = () => {
    game.start();
}