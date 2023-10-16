'use strict';

class Bubble {
    bubble;
    reflUno;
    reflDos;
    id;

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

    /*
    randomShadowOpacity() {
        let s = Math.random();

        return 'rgb( 255, 255, 255, ' + s + ')';
    }
    */

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

    remove() {
        bubbleCounter--;
        killCounter++;
        document.getElementById('box').removeChild(this);
    }

    addKillEventListener() {
        document.getElementById(this.id).addEventListener('click', this.remove);
    }

    constructBubble() {
        let size = this.randomSize( 50, 200);
        let bw = this.randomBorderWidth(size);

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

let bubbleCounter = 0;
let id = 0;
let max = 10;

let killCounter = 0;

let kamikazeOldestBubble = () => {
    document.getElementById('box').removeChild(document.getElementById('box').firstChild)
}

window.onload = () => {
    // create first bubble
    let bubble = new Bubble();
    bubbleCounter++;
    id++;
    bubble.constructBubble(id);

    // create more bubbles
    let interval = setInterval( () => {
        if( bubbleCounter >= max) {
            try {
                kamikazeOldestBubble();
                bubbleCounter--;
            } catch ( err ) {}
        }
        if( id === max*3 ) {
            id = 0;
        }

        id++;
        bubbleCounter++;
        let newBubble = new Bubble(id);
        newBubble.constructBubble();
        //console.log(id + ' : ' + bubbleCounter);
    }, 500);
    let counter = setInterval(() => {
         console.log(killCounter.toString(10));
     }, 100)
    let intervalWin = setInterval(() => {
        if( killCounter === 20 ) {
            console.log("YOU WON!");
            clearInterval(intervalWin);
        }
    }, 50)
    let intervalWinKill = setInterval(() => {
        if( killCounter === 30 ) {
            console.log("BRUH YOU ALREADY WON!");
            clearInterval(interval);
            for( let i = 0; i < max*4; i++ ) {
                try {
                    kamikazeOldestBubble();
                } catch ( err ) {
                    break;
                }
            }
            clearInterval(counter);
            clearInterval(intervalWinKill);
        }
    })
}