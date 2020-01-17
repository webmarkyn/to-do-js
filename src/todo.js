export default class Todo {
  constructor(id, projectId, name, description = '', priority = null, date, state = false) {
    this._id = id;
    this._projectId = projectId;
    this._name = name;
    this._description = description;
    this._state = state;
    this._priority = priority;
    this._date = date;
  }

  getId() {
    return this._id;
  }

  getProjectId() {
    return this._projectId;
  }

  getName() {
    return this._name;
  }

  updateName(value) {
    this._name = value;
  }

  getPriority() {
    return this._priority;
  }

  updatePriority(value) {
    this._priority = value;
  }

  getDate() {
    return this._date;
  }

  updateDate(value) {
    this._date = value;
  }

  getDescription() {
    return this._description;
  }

  updateState() {
    this._state = !this._state;
  }

  getState() {
    return this._state;
  }

  updateDescription(value) {
    this._description = value;
  }
}
