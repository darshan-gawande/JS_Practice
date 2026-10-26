class Task {
    constructor(id) {
        this.taskId = id
    }
    showID() {
        console.log(this.taskId);
    }
}

let task1 = new Task(1);
let task2 = new Task(2);

