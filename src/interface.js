/**
 * this module is used as an interface between classes, dom elements and index script
 * every helper method should be included here
 */

import Project from './project';
import { liProject, projectUl } from './dom';
import Todo from './todo';
import { checkProjectsStorage, getProjectsStorage, updateProjectsStorage } from './localstorage';

let _actualProject = '';

const getActualProject = () => _actualProject;

const setActualProject = (project) => {
  _actualProject = project;
};

const createProject = (id = 0, name = 'My first Project') => {
  const defaultProject = new Project(id, name);
  const projects = getProjectsStorage() || [];

  projects.push(defaultProject);
  projectUl().appendChild(liProject(defaultProject));
  updateProjectsStorage(projects);
  setActualProject(defaultProject);
};

const getIndex = (collect, id) => collect.findIndex((object) => object.getId() === parseInt(id));

const removeProject = (id) => {
  let projects = getProjectsStorage() || [];
  const index = getIndex(projects, id);

  if (projects.length === 1) {
    projects = [];
  } else if (projects[index]) {
    projects.splice(index, 1);
  }
  updateProjectsStorage(projects);
};

const updateProjects = (project) => {
  const projects = getProjectsStorage();
  const index = getIndex(projects, project.getId());

  projects[index] = project;
  updateProjectsStorage(projects);
};

const removeTodo = (project, todoId) => {
  const todos = project.getTodos();
  const index = getIndex(todos, todoId);

  if (todos.length === 1) {
    project.setTodos([]);
  } else if (todos[index]) {
    todos.splice(index, 1);
    project.setTodos(todos);
  }

  updateProjects(project);
};

const getLastProjectId = () => {
  if (!checkProjectsStorage()) return -1;
  const projects = getProjectsStorage();

  return projects[projects.length - 1].getId();
};

const getLastTodoId = (project) => {
  const todos = project.getTodos();
  const { length } = todos;

  if (length) {
    return todos[length - 1].getId();
  }
  return -1;
};

const createTodo = (project, name, description, priority, date) => {
  const id = getLastTodoId(project) + 1;
  const newTodo = new Todo(id, project.getId(), name, description, priority, date);

  project.addTodo(newTodo);
  updateProjects(project);
};

const toggleState = (project, todo) => {
  const todos = project.getTodos();
  const index = getIndex(todos, todo.getId());

  todo.updateState();
  todos[index] = todo;
  project.setTodos(todos);

  updateProjects(project);
  setActualProject(project);
};

const updateTodo = (project, todo, newName, newDescription, newPriority, newDate) => {
  const todos = project.getTodos();
  const index = getIndex(todos, todo.getId());

  todo.updateName(newName);
  todo.updateDescription(newDescription);
  todo.updatePriority(newPriority);
  todo.updateDate(newDate);

  todos[index] = todo;
  project.setTodos(todos);
  updateProjects(project);
  setActualProject(project);
};

export {
  getActualProject,
  setActualProject,
  removeProject,
  createProject,
  getLastProjectId,
  createTodo,
  getLastTodoId,
  removeTodo,
  toggleState,
  updateTodo,
};
