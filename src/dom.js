import { removeProject, removeTodo } from "./interface";

/**
 * this module is used to get and return DOM elements
 * @return {HTMLElement}
 */

const projectUl = () => {
  return document.getElementById("projectList");
};

const projectSelect = () => {
  return document.getElementById("projectSelect");
};

const todoLi = todo => {
  const todoEl = document.createElement("li");
  const actions = document.createElement("div");
  const removeBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const name = document.createElement("p");
  const description = document.createElement("p");
  const priority = document.createElement("p");
  const date = document.createElement("p");
  actions.appendChild(removeBtn);
  actions.appendChild(editBtn);

  todoEl.dataset.priority = todo.getPriority();
  todoEl.classList.add("todo-item");
  todoEl.dataset.id = todo.getId();
  todoEl.dataset.projectId = todo.getProjectId();
  editBtn.innerText = "Edit";
  removeBtn.innerText = "X";
  name.innerText = todo.getName();
  description.innerText = todo.getDescription();
  priority.innerText = todo.getPriority();
  date.innerText = todo.getDate();

  todoEl.appendChild(name);
  todoEl.appendChild(description);
  todoEl.appendChild(priority);
  todoEl.appendChild(date);
  todoEl.appendChild(actions);

  removeBtn.addEventListener("click", () => {
    removeTodo(todoEl.dataset.id);
    todoEl.outerHTML = "";
  });
  editBtn.addEventListener("click", () => {
    alert("edit");
  });

  return todoEl;
};

const todoUl = projectId => {
  return projectUl().querySelector(`[data-id='${projectId}'] ul`);
};

const liProject = project => {
  const liTag = document.createElement("li");
  const removeBtn = document.createElement("button");
  // const todos = document.createElement("ul");
  // todos.classList.add("project-todos");

  liTag.innerText = project.getName();
  liTag.id = project.getId();
  liTag.appendChild(removeBtn);
  // liTag.appendChild(todos);
  removeBtn.innerText = "X";
  removeBtn.addEventListener("click", () => {
    removeProject(liTag.id);
    liTag.parentElement.removeChild(liTag);
  });

  return liTag;
};

const getNewProjectInput = () => {
  const input = document.getElementById("newProjectInput");
  const name = input.value;

  input.value = "";

  return name;
};

export {
  liProject,
  projectUl,
  todoUl,
  projectSelect,
  getNewProjectInput,
  todoLi
};
