'use strict';

class FormHandler {
    id;
    constructor() {
        this.id = 0;
    }

    initialize() {
        this.toggleVisibility();

        let th = new TaskHandler();

        if( localStorage.getItem('id') != null ) {
            this.id = localStorage.getItem('id');
        } else {
            localStorage.setItem( 'id', this.id );
        }

        console.log('#.initialized & id = ' + this.id);
    }

    oncancel() {
        this.toggleVisibility();
        this.removeInputs();
        console.log('#..successful: cancel')
    }

    /* - get inputs
    *  - instantiate Task
    *  - save Task-Object
    *  - close form
    *  - remove inputs from form
    * */
    onsubmit() {
        let title = document.getElementById('task-name').value;
        let description = document.getElementById('task-description').value;
        let dueDate = document.getElementById('due-date').value;

        let now = () => {
            let now = new Date();
            let dd = String(now.getDate()).padStart(2, '0');
            let mm = String(now.getMonth()+1).padStart(2, '0');
            let yyyy = now.getFullYear();

            return yyyy+'-'+mm+'-'+dd;
        }

        // new task 't' instantiated from 'Task' with user-input values
        let t = new Task( this.id, title, description, dueDate, now() ); // now() creates a timestamp of creation date

        // created new task-handler, so the previously created task can be properly handled (written to/read from LS)
        let taskHandler = new TaskHandler(t);

        taskHandler.saveToLS(this.id, t);

        this.toggleVisibility();

        this.removeInputs();

        this.id++;

        localStorage.setItem( 'id', this.id );

        location.reload();
    }

    setButtonHandlers() {
        let form = document.getElementById('form');
        let btnOPEN = document.getElementById('main-nav-add');
        let btnCANCEL = document.getElementById('cancel-button');
        let btnSUBMIT = document.getElementById('submit-button');

        // opening form
        btnOPEN.addEventListener('click', this.toggleVisibility);
        // closing form
        // CHECK WHAT WENT WRONG, WITHOUT ANONYMOUS FUNCTION
        btnCANCEL.addEventListener('click', () => {
            this.oncancel();
        });
        window.addEventListener('click', (event) => {
            if( event.target === form ) {
                this.oncancel();
            }
        });
        // submitting form
        btnSUBMIT.addEventListener('click', () => {
            this.onsubmit();
        })
    }

    removeInputs() {
        const inputs = document.querySelectorAll('#task-name, #task-description, #due-date');

        inputs.forEach( input => {
            input.value = '';
        });
    }

    toggleVisibility() {
        let form_style = document.getElementById('form').style;
        let current_visibility = form_style.display.toString();

        if( current_visibility === 'none') {
            form_style.display = 'block';
            console.log('#..successful: visibility on')
        } else {
            form_style.display = 'none';
            console.log('#..successful: visibility off')
        }
    }
}