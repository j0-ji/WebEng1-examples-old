'use strict';

// valid types: 'localStorage', 'sessionStorage'
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

class Theme {
    // Attributes
    themes;
    currentTheme;

    // CONSTRUCTOR
    constructor(themesArr, currentTheme) {
        this.themes = themesArr;
        this.currentTheme = currentTheme;
    }

    // METHODS
    // getter/setter
    getCurrent() {
        return localStorage.getItem('theme');
    }

    getCurrentThemeName() {
        return this.themes[this.currentTheme];
    }

    getFromStorage() {
        return localStorage.getItem('theme');
    }

    setCurrent(theme) {
        this.currentTheme = theme;
    }

    setToStorage() {
        localStorage.setItem('theme', this.currentTheme);
    }

    //other
    setNewTheme(theme) {
        // extra -1 because: length = 3; x<3 = [0,1,2]; but we just need to increment if it is the penultimate item,
        // in this case 1, so we must increase only when it is at following items: [0,1] -> x<3-1 = x<2 -> [0,1]
        switch(theme){
            case 0 || 'mainTheme' : {
                document.getElementById('themeName').innerHTML = 'Main Theme';
                break;
            }
            case 1 || 'eyeCancer' : {
                document.getElementById('themeName').innerHTML = 'Eye Cancer';
                break;
            }
            case 2 || 'sophisticated' : {
                document.getElementById('themeName').innerHTML = 'Sophisticated';
                break;
            }
        }
    }

    toggleTheme(design) {
        document.documentElement.classList.remove(this.themes[this.currentTheme]);
        (this.currentTheme < this.themes.length-1) ? (this.currentTheme++) : (this.currentTheme = 0);
        document.documentElement.classList.add(this.themes[this.currentTheme], design);
        this.setNewTheme(this.currentTheme);
        this.setToStorage();
        console.log('theme change successful');
    }
}

class Design {
    // Attributes
    designs;
    currentDesign;

    // CONSTRUCTOR
    constructor(designsArr, currentDesign) {
        this.designs = designsArr;
        this.currentDesign = currentDesign;
    }

    // METHODS
    // getter/setter
    getCurrent() {
        return localStorage.getItem('design');
    }

    getCurrentDesignName() {
        return this.designs[this.currentDesign];
    }

    getFromStorage() {
        return localStorage.getItem('design');
    }

    setCurrent(design) {
        this.currentDesign = design;
    }

    setToStorage() {
        localStorage.setItem('design', this.currentDesign);
    }

    setNewDesign(design) {
        switch(design){
            case 0 || 'cornersSharp' : {
                document.getElementById('designName').innerHTML = 'Sharp Design';
                break;
            }
            case 1 || 'cornersRound' : {
                document.getElementById('designName').innerHTML = 'Round Design';
                break;
            }
        }
    }

    toggleDesign(theme) {
        document.documentElement.classList.remove(this.designs[this.currentDesign]);
        (this.currentDesign < this.designs.length-1) ? (this.currentDesign++) : (this.currentDesign = 0);
        document.documentElement.classList.add(theme, this.designs[this.currentDesign]);
        this.setNewDesign(this.currentDesign);
        this.setToStorage();
        console.log('design changed successful');
    }
}

let theme = new Theme(['mainTheme', 'eyeCancer', 'sophisticated'], 0);
let design = new Design(['cornersSharp', 'cornersRound'], 0);

let toggleTheme = () => {
    theme.toggleTheme(design.getCurrentDesignName());
}

let toggleDesign = () => {
    design.toggleDesign(theme.getCurrentThemeName());
}

let resetLS = () => {
    localStorage.clear();
}

let restore = () => {
    // actual theme/design-restore
    document.documentElement.classList.add(theme.themes[theme.getCurrent()], design.designs[design.getCurrent()]);
    // these should restore the button titles
    theme.currentTheme = theme.getCurrent();
    theme.setNewTheme(theme.currentTheme);
    design.currentDesign = design.getCurrent();
    design.setNewDesign(design.currentDesign);
}

let init = () => {
    (storageAvailable('localStorage')) ?
        (restore()) :
        (console.log('Local storage not available.'));
    (storageAvailable('sessionStorage')) ?
        (console.log('Session storage available.')) :
        (console.log('Session storage not available.'));
}

window.onload = init;