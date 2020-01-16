import {
  checkProjectsStorage,
  createProject,
  getLastProjectId,
  getProjectsStorage,
  updateProjectsSelect,
  createTodo,
  checkTodosStorage,
  getTodosStorage
} from "./interface";
import {
  getNewProjectInput,
  liProject,
  projectUl,
  todoUl,
  todoLi
} from "./dom";

let actualProject = "";
let projects = checkProjectsStorage() ? getProjectsStorage() : [];
const projectList = projectUl();
const newProjectBtn = document.getElementById("newProjectBtn");
const newTodoForm = document.getElementById("newTodo");

if (checkProjectsStorage()) {
  getProjectsStorage().forEach(project => {
    projectList.appendChild(liProject(project));
    updateProjectsSelect(getProjectsStorage());
  });

  if (checkTodosStorage()) {
    getTodosStorage().forEach(todo => {
      todoUl(todo.getProjectId()).appendChild(todoLi(todo));
    });
  }
} else {
  createProject();
}

// listener for create new projects
newProjectBtn.addEventListener("click", () => {
  const name = getNewProjectInput();
  const id = getLastProjectId() + 1;

  if (name) {
    createProject(id, name);
  } else {
    alert("Name can't be blank");
  }
});

newTodoForm.addEventListener("submit", e => {
  e.preventDefault();
  createTodo({
    projectId: newTodoForm.projectSelect.value,
    name: newTodoForm.todoName.value,
    description: newTodoForm.todoDescription.value,
    priority: newTodoForm.todoPriority.value,
    date: newTodoForm.todoDate.value
  });
});