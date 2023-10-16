'use strict';

class Task {
    id;
    title;
    description;
    dueDate;
    createdAt;

    constructor(_id, _title, _description, _dueDate, _createdAt) {
        this.id = _id;
        this.title = _title;
        this.description = _description;
        this.dueDate = _dueDate;
        this.createdAt = _createdAt;
    }
}