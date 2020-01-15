import Project from './project';
import Todo from './todo';

/**
 * this method is used to save projects on the browser's local storage
 * it gets an array with the projects
 * @param projects
 */
const updateStorage = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
};

/**
 * this method is used for validate browser's local storage
 * @return boolean
 */
const checkStorage = () => {
    return localStorage.getItem('projects') !== null;
};

/**
 * this method is used for get the local storage
 * it return an array with projects objects
 * @return []
 */
const getStorage = () => {
  if (checkStorage()) {
      const projects = [];
      const storage = JSON.parse(localStorage.getItem('projects'));

      storage.forEach(project => {
          const newProject = new Project(project._id, project._name);
          projects.push(newProject);
      });

      return projects;
  } else {
      return null;
  }
};