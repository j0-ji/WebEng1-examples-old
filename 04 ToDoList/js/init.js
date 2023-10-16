'use strict';

window.onload = () => {
    let formHandler = new FormHandler();
    let taskHandler = new TaskHandler();
    let tasks       = taskHandler.getAllTasks()

    formHandler.initialize();
    formHandler.setButtonHandlers();

    taskHandler.deleteButtonHandler();

    console.log(tasks) // DEBUG // CORRECT

    for( let i in tasks ) {
        try {


            console.log(tasks[i]) // DEBUG // CORRECT
            let attributes = taskHandler.attributesToArr(tasks[i])

            console.log(attributes); // DEBUG // CORRECT
            let domTask = new DOMTask( tasks[i].id, attributes );
            domTask.constructTask();
        } catch ( err ) {
            break;
        }
    }

    taskHandler.pointOutTasks();
}