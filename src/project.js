export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getName() {
        return this.name;
    }

    getTodos() {
        return [...this.todos];
    }

    getTodo(index) {
        return this.todos[index];
    }

    setTodos(value) {
        this.todos = value;
    }

    addTodo(todo) {
        const newTodos = this.getTodos();
        newTodos.push(todo);
        this.setTodos(newTodos);
    }

    removeTodo(index) {
        const newTodos = this.getTodos();
        newTodos.splice(index,1);
        this.setTodos(newTodos);
    }

    updateTodo(index, todo) {
        const newTodos = this.getTodos();
        newTodos[index] = todo;
        this.setTodos(newTodos);
    }
}