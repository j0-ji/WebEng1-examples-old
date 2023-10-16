'use strict';

class DOMTask {
    id;
    main;
    title;
    optionalBtns;
    description;
    dueDate;
    createdAt;
    content;

    selected = false;

    constructor( _id, _content ) {
        this.main           = document.createElement('section');
        this.title          = document.createElement('div');
        this.optionalBtns   = document.createElement('div');
        this.description    = document.createElement('div');
        this.dueDate        = document.createElement('div');
        this.createdAt      = document.createElement('div');

        this.content        = _content;  // Type: instance of Task()

        this.id = _id;
    }

    constructTask() {
        document.getElementById('main-todo-list').appendChild(this.main);
        // add class for main-styles HERE

        this.main.id = this.id
        this.main.addEventListener('click', this.switchSelect);

        this.main.appendChild(this.title);
        this.title.classList.add('task-title');
        this.title.appendChild(document.createElement('p'));

        this.main.appendChild(this.optionalBtns);
        this.optionalBtns.classList.add('task-optionalBtns');
        this.optionalBtns.appendChild(document.createElement('div'));
        this.optionalBtns.firstChild.classList.add('taskComplete')

        this.main.appendChild(this.description);
        this.description.classList.add('task-description');
        this.description.appendChild(document.createElement('p'));

        this.main.appendChild(this.dueDate);
        this.dueDate.classList.add('task-dueDate');
        this.dueDate.appendChild(document.createElement('p'));

        this.main.appendChild(this.createdAt);
        this.createdAt.classList.add('task-createdAt');
        this.createdAt.appendChild(document.createElement('p'));

        //auslagern; funcktioniert nicht... übergabe von werten auf klasse überdenken
        this.title.firstChild.innerText = this.content[0];
        this.optionalBtns.firstChild.addEventListener('click', this.delete);
        this.description.firstChild.innerText = this.content[1];
        this.dueDate.firstChild.innerText = this.content[2];
        this.createdAt.firstChild.innerText = this.content[3];
    }

    switchSelect() {
        let domEl = document.getElementById(this.id);

        if( !this.selected ) {
            this.selected = true;
            domEl.classList.add('selected')
        } else {
            this.selected = false;
            domEl.classList.remove('selected');
        }
    }

    delete() {
        document.getElementById('main-todo-list').removeChild(document.getElementById(this.id));
    }
}