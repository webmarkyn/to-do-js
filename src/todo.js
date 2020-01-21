export default class Todo {
  constructor(id, projectId, name, description = '', priority = null, date, state = false) {
    this.id = id;
    this.projectId = projectId;
    this.name = name;
    this.description = description;
    this.state = state;
    this.priority = priority;
    this.date = date;
  }

  getId() {
    return this.id;
  }

  getProjectId() {
    return this.projectId;
  }

  getName() {
    return this.name;
  }

  updateName(value) {
    this.name = value;
  }

  getPriority() {
    return this.priority;
  }

  updatePriority(value) {
    this.priority = value;
  }

  getDate() {
    return this.date;
  }

  updateDate(value) {
    this.date = value;
  }

  getDescription() {
    return this.description;
  }

  updateState() {
    this.state = !this.state;
  }

  getState() {
    return this.state;
  }

  updateDescription(value) {
    this.description = value;
  }
}
