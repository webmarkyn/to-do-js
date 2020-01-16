/**
 * this module is used as an interface between classes, dom elements and index script
 * every helper method should be included here
 */

import Project from "./project";
import {liProject, projectUl, todoUl, todoLi} from "./dom";
import Todo from "./todo";
import {checkProjectsStorage, getProjectsStorage, updateProjectsStorage,} from './localstorage';

let _actualProject = '';

const getActualProject = () => {
  return _actualProject;
};

const setActualProject = project => {
  _actualProject = project;
};

const createProject = (id = 0, name = "My first Project") => {
  const defaultProject = new Project(id, name);
  const projects = getProjectsStorage() || [];

  projects.push(defaultProject);
  projectUl().appendChild(liProject(defaultProject));
  updateProjectsStorage(projects);
  setActualProject(defaultProject);
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

const getLastTodoId = project => {
  const todos = project.getTodos();
  const length = todos.length;

  if (length) {
    return todos[length - 1].getId();
  } else {
    return -1;
  }
};

const updateProjects = project => {
  let projects = getProjectsStorage();
  const index = getIndex(projects, project.getId());

  projects[index] = project;
  updateProjectsStorage(projects);
};

const createTodo = (project, name, description, priority, date) => {
  const id = getLastTodoId(project) + 1;
  const newTodo = new Todo(id, project.getId(), name, description, priority, date);

  project.addTodo(newTodo);
  updateProjects(project);

  // const id = getLastTodoId() + 1;
  // const newTodo = new Todo(id, projectId, name, description, priority, date);
  // const todos = getTodosStorage() || [];
  //
  // todoUl(projectId).appendChild(todoLi(newTodo));
  // todos.push(newTodo);
  // updateTodosStorage(todos);
};

export {
  getActualProject,
  setActualProject,
  removeProject,
  createProject,
  getLastProjectId,
  createTodo,
  getLastTodoId,
  removeTodo
};
