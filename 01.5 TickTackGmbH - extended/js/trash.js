'use strict';

// function to get current theme
getTheme = () => {
    let item = localStorage.getItem('item');
    let itemArr = item.split(' ');
    return itemArr[0];
}

// function to get current design
getDesign = () => {
    let item = localStorage.getItem('item');
    let itemArr = item.split(' ');
    return itemArr[1];
}

// function to set a given theme/color-scheme
setTheme = (themeName) => {
    let design = getDesign()
    localStorage.setItem('item', themeName + " " + design);
    document.documentElement.className = themeName;
}

// function to set a new Design
setDesign = (designName) => {
    let theme = getTheme();
    localStorage.setItem('item', theme + " " + designName);
    document.documentElement.className = designName;
}

// THEME FUNCTIONS
// function to toggle between theme x and theme y, z, ...
toggleTheme = () => {
    switch(getTheme()) {
        case 'mainTheme': {
            setTheme('sophisticated');
            document.getElementById("themeName").innerHTML = 'Sophisticated';
            break;
        }
        case 'sophisticated': {
            setTheme('eyeCancer');
            document.getElementById("themeName").innerHTML = 'Eye Cancer';
            break;
        }
        case 'eyeCancer': {
            setTheme('mainTheme');
            document.getElementById("themeName").innerHTML = 'Main Theme';
            break;
        }
    }
}

// DESIGN FUNCTIONS
// function to toggle between sharp and round design:

toggleDesign = () => {
    switch(getDesign()) {
        case 'cornersSharp': {
            setDesign('cornersRound')
            document.getElementById("designName").innerHTML = 'Sharp Design';
            break;
        }
        case 'cornersRound': {
            setDesign('cornersSharp');
            document.getElementById("designName").innerHTML = 'Round Design';
            break;
        }
    }
}

// ON-START
// immediately invoked function to set the theme and design on initial load
(function () {
    if(localStorage.getItem('item') === null) {
        localStorage.setItem('item', 'mainTheme cornersSharp');
    }

    // THEME
    switch(getTheme()) {
        case 'eyeCancer': {
            setTheme('eyeCancer');
            document.getElementById("themeName").innerHTML = 'Eye Cancer';
            break;
        }
        case 'sophisticated': {
            setTheme('sophisticated');
            document.getElementById("themeName").innerHTML = 'Sophisticated';
            break;
        }
        default: {
            setTheme('mainTheme');
            document.getElementById("themeName").innerHTML = 'Main Theme';
        }
    }

    // DESIGN
    switch(getDesign()) {
        case 'cornersRound': {
            setDesign('cornersRound');
            document.getElementById("designName").innerHTML = 'Round Design';
            break;
        }
        default: {
            setDesign('cornersSharp');
            document.getElementById("designName").innerHTML = 'Sharp Design';
        }
    }
}) ();




// short reset function
resetLS = () => {
    localStorage.clear();
}
























// https://www.youtube.com/watch?v=3Kterjsc74s&t=825s
// code used and adapted from link (video) above
// this way, only the color for the current page can be changed
/*
changeColor = () => {
    //const toggleBtn = document.querySelector('#toggle-btn');
    //toggleBtn.addEventListener('click', (e) => {})
    const currentMode = document.body.dataset.mode;

    if( currentMode === 'light')
    {
        document.documentElement.style.setProperty('--primary-color', 'orange')
        document.documentElement.style.setProperty('--secondary-color', 'cyan')
        document.documentElement.style.setProperty('--tertiary-color', 'magenta')
        document.body.dataset.mode = 'dark';
        document.getElementById("themeName").innerHTML = 'Eye Cancer';

    } else if (currentMode === 'dark') {
        document.documentElement.style.setProperty('--primary-color', '#fff')
        document.documentElement.style.setProperty('--secondary-color', '#000')
        document.documentElement.style.setProperty('--tertiary-color', '#F6E8CD')
        document.body.dataset.mode = 'light';
        document.getElementById("themeName").innerHTML = 'Main Theme';
    }
}
*/









function getThemeDesign (theme0design1) {
    let item = localStorage.getItem('item');
    let itemArr = item.split(' ');
    return itemArr[theme0design1];
}

function setTheme (themeName) {
    let designName = getThemeDesign(1)
    localStorage.setItem('item', `${themeName} ${designName}`);
    document.documentElement.className = themeName;
}

function setDesign (designName) {
    let themeName = getThemeDesign(0)
    localStorage.setItem('item', `${themeName} ${designName}`);
    document.documentElement.className = themeName;
}

toggleTheme = () => {
    switch(getThemeDesign(0)) {
        case 'mainTheme': {
            setTheme('sophisticated');
            document.getElementById('themeName').innerHTML = 'Sophisticated';
            break;
        }
        case 'sophisticated': {
            setTheme('eyeCancer');
            document.getElementById('themeName').innerHTML = 'Eye Cancer';
            break;
        }
        case 'eyeCancer': {
            setTheme('mainTheme');
            document.getElementById('themeName').innerHTML = 'Main Theme';
            break;
        }
    }
}

toggleDesign = () => {
    switch(getThemeDesign(1)) {
        case 'cornersSharp': {
            setDesign('cornersRound');
            document.getElementById('designName').innerHTML = 'Round Design';
            break;
        }
        case 'cornersRound': {
            setDesign('cornersSharp');
            document.getElementById('designName').innerHTML = 'Sharp Design';
        }
    }
}

(function () {
    if(localStorage.getItem('item') === null) {
        localStorage.setItem('item', 'mainTheme cornersSharp');
    }

    // THEME
    switch(getThemeDesign(0)) {
        case 'eyeCancer': {
            setTheme('eyeCancer');
            document.getElementById("themeName").innerHTML = 'Eye Cancer';
            break;
        }
        case 'sophisticated': {
            setTheme('sophisticated');
            document.getElementById("themeName").innerHTML = 'Sophisticated';
            break;
        }
        case 'mainTheme': {
            setTheme('mainTheme');
            document.getElementById("themeName").innerHTML = 'Main Theme';
        }
    }

    // DESIGN
    switch(getDesign()) {
        case 'cornersRound': {
            setDesign('cornersRound');
            document.getElementById("designName").innerHTML = 'Round Design';
            break;
        }
        case 'cornersSharp': {
            setDesign('cornersSharp');
            document.getElementById("designName").innerHTML = 'Sharp Design';
        }
    }
}) ();


// short reset function
resetLS = () => {
    localStorage.clear();
}



//===============================================================================================

'use strict';

class Style {
    // ATTRIBUTES
    theme;
    design;

    //CONSTRUCTOR
    constructor() {
        this.theme = '';
        this.design = '';
    }

    //METHODS
    //getter/setter
    getDesign() {
        return this.design;
    }

    getTheme() {
        return this.theme;
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.className = theme;
    }

    setDesign(design) {
        this.design = design;
        document.documentElement.className = design;
    }

    setNewItem() {
        return `${this.theme}:${this.design}`
    }
}

let style = new Style();

//splits String into an array with [0]=theme and [1]=design if string is not null or empty
let splitItemString = () => {
    let itemString = localStorage.getItem('items');
    let itemArr;

    if( itemString != null && itemString !== '')
    {
        itemArr = itemString.split(':');
    } else {
        itemArr = ['mainTheme', 'cornersSharp']
    }

    return itemArr;
}

// function run after page loading
function init() {
    let itemArr = splitItemString();

    style.setTheme = itemArr[0];
    style.setDesign = itemArr[1];

    //THEME
    switch(style.getTheme()) {
        case 'eyeCancer': {
            style.setTheme('eyeCancer');
            document.getElementById("themeName").innerHTML = 'Eye Cancer';
            break;
        }
        case 'sophisticated': {
            style.setTheme('sophisticated');
            document.getElementById("themeName").innerHTML = 'Sophisticated';
            break;
        }
        default: {
            style.setTheme('mainTheme');
            document.getElementById("themeName").innerHTML = 'Main Theme';
        }
    }

    //DESIGN
    switch(style.getDesign()) {
        case 'cornersRound': {
            style.setDesign('cornersRound');
            document.getElementById("designName").innerHTML = 'Round Design';
            break;
        }
        default: {
            style.setDesign('cornersSharp');
            document.getElementById("designName").innerHTML = 'Sharp Design';
        }
    }

    style.setNewItem();
}

window.onload = init

// FUNCTIONS FOR BUTTON CLICKS
// short local storage reset function:
let resetLS = () => {
    localStorage.clear();
}

// function for toggling the theme:
let toggleTheme = () => {
    switch(style.getTheme()) {
        case 'mainTheme': {
            style.setTheme('sophisticated');
            document.getElementById("themeName").innerHTML = 'Sophisticated';
            break;
        }
        case 'sophisticated': {
            style.setTheme('eyeCancer');
            document.getElementById("themeName").innerHTML = 'Eye Cancer';
            break;
        }
        case 'eyeCancer': {
            style.setTheme('mainTheme');
            document.getElementById("themeName").innerHTML = 'Main Theme';
            break;
        }
    }

    style.setNewItem();
}

// function for toggling the design
let toggleDesign = () => {
    switch(style.getDesign()) {
        case 'cornersSharp': {
            style.setDesign('cornersRound')
            document.getElementById("designName").innerHTML = 'Sharp Design';
            break;
        }
        case 'cornersRound': {
            style.setDesign('cornersSharp');
            document.getElementById("designName").innerHTML = 'Round Design';
            break;
        }
    }

    style.setNewItem();
}


//==========================================================================================================

'use strict';

class Style {
    // ATTRIBUTES
    theme;
    design;
    themes;
    designs;


    //CONSTRUCTOR
    constructor() {
        //arrays needs to get updated, if themes/designs get added or deleted
        this.themes = ['mainTheme', 'eyeCancer', 'sophisticated'];
        this.designs = ['cornersSharp', 'cornersRound'];

        this.theme = 0;
        this.design = 0;
    }

    // METHODS
    // getter/setter
    getDesign() {
        return this.design;
    }

    getTheme() {
        return this.theme;
    }

    setDesign(design) {
        this.design = design;
    }

    setTheme(theme) {
        this.theme = theme;
    }

    getItemArr() {
        let items = localStorage.getItem('items');
        if(items !== null) {
            return items.split(':');
        } else {
            return null;
        }
    }

    // other
    setNewTheme() {
        document.documentElement.className = this.themes[this.theme];
        switch(this.themes[this.theme]){
            case 'mainTheme': {
                document.getElementById('themeName').innerHTML = 'Main Theme';
                break;
            }
            case 'sophisticated': {
                document.getElementById('themeName').innerHTML = 'Sophisticated';
                break;
            }
            case 'eyeCancer': {
                document.getElementById('themeName').innerHTML = 'Eye Cancer';
                break;
            }
        }
    }

    setNewDesign() {
        document.documentElement.className = this.designs[this.design];
        switch(this.themes[this.design]){
            case 'cornersSharp': {
                document.getElementById('designName').innerHTML = 'Sharp Design';
                break;
            }
            case 'cornersRound': {
                document.getElementById('designName').innerHTML = 'Round Design';
                break;
            }
        }


    setNewItems() {
        localStorage.setItem('items', `${this.theme}:${this.design}`);
    }

    toggleTheme() {
        // extra -1 because: length = 3; x<3 = [0,1,2]; but we just need to increment if it is the penultimate item,
        // in this case 1, so we must increase only when it is at following items: [0,1] -> x<3-1 = x<2 -> [0,1]
        (this.theme < this.themes.length-1) ? (this.theme++) : (this.theme = 0);
        this.setNewTheme();
        this.setNewItems();
        console.log('theme toggled successfully');
    }

    toggleDesign() {
        // same as above
        (this.design < this.designs.length-1) ? (this.design++) : (this.design = 0);
        this.setNewDesign();
        this.setNewItems();
        console.log('design toggled successfully');
    }
}

let style = new Style();

window.onload = init;

function init() {
    let itemArr = style.getItemArr();
    if (itemArr !== null){
        style.setTheme(itemArr[0]);
        style.setDesign(itemArr[1]);
    }
    style.setNewTheme();
    style.setNewDesign();
}

function changeTheme () {
    style.toggleTheme();
}

function changeDesign () {
    style.toggleDesign();
}

//=============================================================================================
//=============================================================================================
//=============================================================================================
//=============================================================================================


class Theme {
    // ATTRIBUTES
    themes;
    currentTheme;

    // CONSTRUCTOR
    constructor(themes = [], currentTheme = [])
    {
        this.themes = themes;                   // array of all themes; all type String     [theme1, theme2, ...]
        this.currentTheme = currentTheme;       // array of current themes number na name   [num, name]
                                                // num of type int; name of type String
    }

    // METHODS
    getFromStorage() {
        let num = localStorage.getItem('theme');
        let name = this.themes[num-1];

        return [num, name];
        // this.currentTheme[0] = num;
        // this.currentTheme[1] = name;
    }

    setToStorage() {
        localStorage.setItem('theme', this.currentTheme[0]); // sets the num of currentTheme as value for 'theme'-key
    }


}