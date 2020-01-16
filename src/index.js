import {
  createProject,
  getLastProjectId,
  updateProjectsSelect,
  createTodo, setActualProject, getActualProject,
} from './interface';
import {getNewProjectInput, liProject, projectUl, todoUl} from "./dom";
import {checkProjectsStorage, getProjectsStorage} from './localstorage';

let projects = checkProjectsStorage() ? getProjectsStorage() : [];
const projectList = projectUl();
const newProjectBtn = document.getElementById("newProjectBtn");
const newTodoForm = document.getElementById("newTodo");

// this check if the local storage contains a projects key and if not it creates a default project
if (checkProjectsStorage()) {
  getProjectsStorage().forEach(project => {
    projectList.appendChild(liProject(project));
    updateProjectsSelect(getProjectsStorage());
  });

  setActualProject(getProjectsStorage()[0]);
  todoUl(getActualProject());
} else {
  createProject();
  setActualProject(getProjectsStorage()[0]);
  todoUl(getActualProject());
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