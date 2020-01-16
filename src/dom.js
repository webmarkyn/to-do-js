import {getActualProject, removeProject, removeTodo, setActualProject} from './interface';

/**
 * this module is used to get and return DOM elements
 * @return {HTMLElement}
 */

const projectUl = () => {
  return document.getElementById("projectList");
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

const todoUl = project => {
  const list = document.getElementById('todoList');
  const todos = project.getTodos();

  list.innerHTML = '';

  if (todos.length) {
    console.log(project.getTodos());
    project.getTodos().forEach(todo => {
      console.log('hehe')
    });
  } else {
    list.innerText = 'No tasks to complete in project ' + project.getName();
  }
};

const liProject = project => {
  const liTag = document.createElement("li");
  const removeBtn = document.createElement("button");
  const viewBtn = document.createElement('button');

  liTag.innerText = project.getName();
  liTag.id = project.getId();
  liTag.appendChild(viewBtn);
  liTag.appendChild(removeBtn);

  viewBtn.innerText = 'Show Tasks';
  viewBtn.addEventListener('click', () => {
    setActualProject(project);
    todoUl(getActualProject());
  });

  removeBtn.innerText = 'X';
  removeBtn.addEventListener("click", () => {
    removeProject(liTag.id);
    liTag.parentElement.removeChild(liTag);
    location.reload();
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
  getNewProjectInput,
  todoLi
};
