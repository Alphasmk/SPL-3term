class Task {
    constructor(id, name, state = false) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    updateName(newName) {
        this.name = newName;
    }

    updateState(newState) {
        this.state = newState;
    }
}

class Todolist {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = [];
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    filterTasksByState(state) {
        return this.tasks.filter(task => task.state === state);
    }
}

const todolist1 = new Todolist(1, 'Список покупок');
const todolist2 = new Todolist(2, 'Задачи на день');

const task1 = new Task(1, 'Купить молоко');
const task2 = new Task(2, 'Убрать квартиру', true);
const task3 = new Task(3, 'Сделать лабу');

todolist1.addTask(task1);
todolist1.addTask(task2);
todolist2.addTask(task3);

console.log('Задачи в списке покупок:');
console.log(todolist1.tasks);

console.log('Задачи на день:');
console.log(todolist2.tasks);

const completedTasks = todolist1.filterTasksByState(true);
console.log('Выполненные задачи из списка покупок:');
console.log(completedTasks);

task1.updateName('Купить яйца');
console.log('Обновленное название задачи:');
console.log(task1);

task3.updateState(true);
console.log('Обновленное состояние задачи:');
console.log(task3);