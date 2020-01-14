export default class Todo {
    constructor(name, description='', priority = null, date) {
        this._name = name;
        this._description = description;
        this._state = false;
        this._priority = priority;
        this._date = date;
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