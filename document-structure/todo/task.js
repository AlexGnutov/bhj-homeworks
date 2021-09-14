class Task {
    constructor(text) {
        this.text = text;
        
        this.task = document.createElement('div');
        this.task.className = 'task';

        this.title = document.createElement('div');
        this.title.className = 'task__title';
        this.title.textContent = `${text}`;

        this.delete = document.createElement('a');
        this.delete.className = "task__remove";
        this.delete.setAttribute('href', '#0');
        this.delete.innerHTML = `&times`;

        this.task.appendChild(this.title);
        this.task.appendChild(this.delete);
    }
    
    elementAdd(container) {
        container.appendChild(this.task);
    }

    elementInit() {
        const task = this.task;       
        this.delete.addEventListener('click', function(e) {
            Task.removeTask(task);
        });
    }

    static removeTask(task) {
        task.remove();
    }
}

window.onload = () => {

    const tasksContainer = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const addTaskButton = document.getElementById('tasks__add');
    const taskForm = document.getElementById('tasks__form');
    

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })    

    addTaskButton.addEventListener('click', function(e) {
        console.log('button pressed');
        if (taskInput.value) {
            const x = new Task(taskInput.value);
            x.elementAdd(tasksContainer);
            x.elementInit();
        }
    });    
}


