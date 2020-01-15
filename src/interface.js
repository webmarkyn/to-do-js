/**
 * this module is used as an interface between classes, dom elements and index script
 * every helper method should be included here
 */

import Project from "./project";
import { liProject, projectUl, projectSelect, todoUl, todoLi } from "./dom";
import Todo from "./todo";

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

const updateProjectsSelect = projects => {
  const selectEl = projectSelect();
  selectEl.innerHTML = "";
  projects.forEach(el => {
    const option = document.createElement("option");
    option.value = el.getId();
    option.innerText = el.getName();
    selectEl.appendChild(option);
  });
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

const createProject = (id = 0, name = "My first Project") => {
  const defaultProject = new Project(id, name);
  const projects = getProjectsStorage() || [];

  projects.push(defaultProject);
  projectUl().appendChild(liProject(defaultProject));
  updateProjectsStorage(projects);
  updateProjectsSelect(projects);
};

const createTodo = ({ projectId, name, date, description, priority }) => {
  const id = getLastTodoId() + 1;
  const newTodo = new Todo(id, projectId, name, description, priority, date);
  const todos = getTodosStorage() || [];

  todoUl(projectId).appendChild(todoLi(newTodo));
  todos.push(newTodo);
  updateTodosStorage(todos);
};

const removeProject = id => {
  const projects = getProjectsStorage() || [];
  let todos = getTodosStorage() || [];
  if (projects[id]) {
    projects.splice(id, 1);
    if (todos && todos.length > 0) {
      todos = todos.filter(todo => todo.getProjectId() !== id);
    }
  }
  updateTodosStorage(todos);
  updateProjectsStorage(projects);
  updateProjectsSelect(projects);
};

const removeTodo = id => {
  const todos = getTodosStorage() || [];
  if (todos[id]) {
    todos.splice(id, 1);
  }
  updateTodosStorage(todos);
};

const getLastProjectId = () => {
  if (!checkProjectsStorage()) return -1;
  const projects = getProjectsStorage();

  return projects[projects.length - 1].getId();
};

const getLastTodoId = () => {
  if (!checkTodosStorage()) return -1;
  const todos = getTodosStorage();

  return todos[todos.length - 1].getId();
};

export {
  removeProject,
  updateProjectsSelect,
  checkTodosStorage,
  updateProjectsStorage,
  checkProjectsStorage,
  getProjectsStorage,
  createProject,
  getLastProjectId,
  createTodo,
  getTodosStorage,
  getLastTodoId,
  removeTodo
};
