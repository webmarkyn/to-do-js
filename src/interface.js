/**
 * this module is used as an interface between classes, dom elements and index script
 * every helper method should be included here
 */

import Project from "./project";
import { liProject, projectUl, projectSelect, todoUl, todoLi } from "./dom";
import Todo from "./todo";
import {
  checkProjectsStorage, checkTodosStorage,
  getProjectsStorage,
  getTodosStorage,
  updateProjectsStorage,
  updateTodosStorage
} from './localstorage';

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

const getIndex = (collection, id) => {
  let index;

  if (collection[0].constructor === Project) {
    index = collection.findIndex(project => {
      return project.getId() === parseInt(id);
    });
  }

  return index;
};

const removeProject = id => {
  let projects = getProjectsStorage() || [];
  const index = getIndex(projects, id);

  if (projects.length === 1) {
    projects = [];
  } else {
    if (projects[index]) {
      projects.splice(index, 1);
    }
  }
  updateProjectsStorage(projects);
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
  createProject,
  getLastProjectId,
  createTodo,
  getLastTodoId,
  removeTodo
};
