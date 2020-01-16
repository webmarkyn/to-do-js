import Project from './project';
import Todo from './todo';

/**
 * this method is used to save projects on the browser's local storage
 * it gets an array with the projects
 * @param projects
 */
const updateProjectsStorage = projects => {
    localStorage.setItem("projects", JSON.stringify(projects));
};

const updateTodosStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

/**
 * this method is used for validate browser's local storage
 * @return boolean
 */
const checkProjectsStorage = () => {
    const projects = localStorage.getItem("projects");
    return projects !== null && JSON.parse(projects).length > 0;
};

const checkTodosStorage = () => {
    const todos = localStorage.getItem("todos");
    return todos !== null && JSON.parse(todos).length > 0;
};
/**
 * this method is used for get the local storage
 * it return an array with projects objects
 * @return []
 */
const getProjectsStorage = () => {
    if (checkProjectsStorage()) {
        const projects = [];
        const storage = JSON.parse(localStorage.getItem("projects"));

        storage.forEach(project => {
            const newProject = new Project(project._id, project._name);
            projects.push(newProject);
        });

        return projects;
    } else {
        return null;
    }
};

const getTodosStorage = () => {
    if (checkTodosStorage()) {
        const todos = [];
        const storage = JSON.parse(localStorage.getItem("todos"));

        storage.forEach(todo => {
            const newTodo = new Todo(
                todo._id,
                todo._projectId,
                todo._name,
                todo._description,
                todo._priority,
                todo._date
            );
            todos.push(newTodo);
        });
        return todos;
    } else return null;
};

export {
    updateProjectsStorage,
    updateTodosStorage,
    checkProjectsStorage,
    checkTodosStorage,
    getProjectsStorage,
    getTodosStorage
};