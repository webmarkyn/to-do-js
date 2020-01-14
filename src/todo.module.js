export default class Todo {
    constructor(name, description='', priority=null, date) {
        this.name = name
        this.description = description
        this.state = false
        this.priority = priority
        this.date = date
    }

    getName() {
        return this.name
    }

    updateName(value) {
        this.name = value
    }

    getPriority() {
        return this.priority
    }

    updatePriority(value) {
        this.priority = value
    }

    getDate() {
        return this.date
    }

    updateDate(value) {
        this.date = value
    }

    getDesc() {
        return this.description
    }

    changeState() {
        this.state = !this.state
    }

    getState() {
        return this.state
    }

    updateDesc(value) {
        this.description = value
    }
}