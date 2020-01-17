export default class Project {
  constructor(id, name) {
    this._id = id;
    this._name = name;
    this._todos = [];
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getTodos() {
    return [...this._todos];
  }

  getTodo(index) {
    return this._todos[index];
  }

  setTodos(value) {
    this._todos = value;
  }

  addTodo(todo) {
    const newTodos = this.getTodos();
    newTodos.push(todo);
    this.setTodos(newTodos);
  }

  removeTodo(index) {
    const newTodos = this.getTodos();
    newTodos.splice(index, 1);
    this.setTodos(newTodos);
  }

  updateTodo(index, todo) {
    const newTodos = this.getTodos();
    newTodos[index] = todo;
    this.setTodos(newTodos);
  }
}