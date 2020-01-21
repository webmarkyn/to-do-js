import Project from './project';
import Todo from './todo';

let actualProject = '';

const getActualProject = () => actualProject;

const setActualProject = (project) => {
  actualProject = project;
};

/**
 * this method is used to save projects on the browser's local storage
 * it gets an array with the projects
 * @param projects
 */
const updateProjectsStorage = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

/**
 * this method is used for validate browser's local storage
 * @return boolean
 */
const checkProjectsStorage = () => {
  const projects = localStorage.getItem('projects');
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
    const storage = JSON.parse(localStorage.getItem('projects'));

    storage.forEach((project) => {
      const newProject = new Project(project.id, project.name);

      if (project.todos.length) {
        const newTodos = [];

        project.todos.forEach((todo) => {
          newTodos.push(new Todo(
            todo.id, project.id,
            todo.name,
            todo.description,
            todo.priority,
            todo.date,
            todo.state,
          ));
        });

        newProject.setTodos(newTodos);
      }

      projects.push(newProject);
    });

    return projects;
  }
  return null;
};

export {
  getActualProject,
  setActualProject,
  updateProjectsStorage,
  checkProjectsStorage,
  getProjectsStorage,
};