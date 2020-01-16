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

/**
 * this method is used for validate browser's local storage
 * @return boolean
 */
const checkProjectsStorage = () => {
    const projects = localStorage.getItem("projects");
    return projects !== null && JSON.parse(projects).length > 0;
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

            if (project._todos.length) {
                let todos = [];

                project._todos.forEach(todo => {
                    todos.push(new Todo(todo._id, project._id, todo._name, todo._description, todo._priority, todo._date));
                });

                newProject.setTodos(todos);
            }

            projects.push(newProject);
        });

        return projects;
    } else {
        return null;
    }
};

export {
    updateProjectsStorage,
    checkProjectsStorage,
    getProjectsStorage,
};