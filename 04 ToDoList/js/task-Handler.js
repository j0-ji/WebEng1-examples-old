'use strict';

class TaskHandler {
    constructor() {}

    timeLeft() {

    }

    saveToLS(_id, _task) {
        localStorage.setItem('task'+_id, JSON.stringify(_task));
    }

    getAllKeys() {
        // returns an array with all 'task+id'-keys
        let taskKeys = [];
        let i = 0;

        for( const key in localStorage ) {
            if( key.includes('task') ) {
                taskKeys[i] = key;
                i++;
            }
        }

        console.log(taskKeys)  //DEBUG

        return taskKeys;
    }

    getAllTasks() {
        let keys = this.getAllKeys();
        let tasks = [];

        for( let i = 0; i < keys.length; i++ ) {
            let task = localStorage.getItem(keys[i]);
            // console.log(task); //DEBUG
            tasks.push(JSON.parse(task));
        }

        return tasks;
    }

    attributesToArr( _task ) {
        let attributes = [];

        attributes[0] = _task.title;
        attributes[1] = _task.description;
        attributes[2] = _task.dueDate;
        attributes[3] = _task.createdAt;

        return attributes;
    }

    pointOutTasks() {
        let tasks = this.getAllTasks();

        for( const i in tasks ) {
            let task = tasks[i];
            let now = +new Date();
            console.log(task.dueDate);
            let due = new Date(task.dueDate);
            if( ( due - now ) < 1000*60*60*24*2 ) {
                let domEl = document.getElementById(task.id);
                domEl.classList.add('pointOut')
            }
        }
    }

    deleteButtonHandler() {
        let toDelete = document.getElementsByClassName('selected');
        let btnDELETE = document.getElementById('main-nav-rmv');

        btnDELETE.addEventListener('click', () => {
            try{
                for( const i in toDelete ) {
                    localStorage.removeItem('task' + toDelete[0].id );
                    try {
                        toDelete[0].remove();
                    } catch ( err ) {}
                }
            } catch ( err ) {}

        })
    }
}