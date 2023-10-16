'use strict';

// get current time: HH:MM (as string)
function getCurrentTime() {
    let today = new Date();
    //let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    document.getElementById('time').innerText = today.toLocaleTimeString();
}

function getGreetings() {
    let today = new Date();
    let hour = today.getHours();

    if ( hour < 10 ) {
        document.getElementById('greeting').classList.remove('evening');
        document.getElementById('greeting').innerHTML = 'Guten Morgen';
        document.getElementById('greeting').classList.add('morning');
    } else if ( 9 < hour && hour < 18 ) {
        document.getElementById('greeting').classList.remove('morning');
        document.getElementById('greeting').innerHTML = 'Guten Tag';
        document.getElementById('greeting').classList.add('noon');
    } else {
        document.getElementById('greeting').classList.remove('noon');
        document.getElementById('greeting').innerHTML = 'Guten Abend';
        document.getElementById('greeting').classList.add('evening');
    }
}

class PointOut {
    save;
    watches;

    constructor() {
        this.watches = [...document.querySelectorAll('.watch-gc')];
        this.save = 0;
        this.watches.i = 0;
    }

    randChild() {
        return Math.floor(Math.random() * this.watches.length);

    }

    pointOutRandomly() {
        // inspired from:
        // https://stackoverflow.com/questions/73022870/how-to-change-class-name-after-x-seconds-of-time-using-jquery
        this.save = this.watches.i;
        this.watches.i = this.randChild();

        this.watches[this.save].classList.remove('point-out');
        this.watches[this.save].classList.add('no-point-out');
        this.watches[this.watches.i].classList.remove('no-point-out');
        this.watches[this.watches.i].classList.add('point-out');
    }
}

window.onload = () => {
    let po = new PointOut();
    getCurrentTime();
    getGreetings();
    po.pointOutRandomly()
    setInterval(() => {
        getCurrentTime();
        getGreetings();
    }, 1000);
    setInterval(() => {
        po.pointOutRandomly();
    }, 10000);
}