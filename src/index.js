import {createProject, getLastProjectId, createTodo, setActualProject, getActualProject} from './interface';
import {
  getNewProjectInput, getNewTodoDate,
  getNewTodoDescription,
  getNewTodoName,
  getNewTodoPriority,
  liProject,
  projectUl, resetForm,
  todoUl,
  closePopup,
  openPopup
} from './dom';
import {checkProjectsStorage, getProjectsStorage} from './localstorage';

const projectList = projectUl();
const newProjectBtn = document.getElementById('newProjectBtn');
const newTodoBtn = document.getElementById('newTodoBtn');
const newTodoPopup = document.getElementById('newTodoPopup')
const showNewTodoPopupButton = document.getElementById('showNewTodoPopup')
console.log(showNewTodoPopupButton)
// this check if the local storage contains a projects key and if not it creates a default project
if (checkProjectsStorage()) {
  getProjectsStorage().forEach(project => {
    projectList.appendChild(liProject(project));
  });

  setActualProject(getProjectsStorage()[0]);
  todoUl(getActualProject());
} else {
  createProject();
  setActualProject(getProjectsStorage()[0]);
  todoUl(getActualProject());
}

// listener for create new projects
newProjectBtn.addEventListener('click', () => {
  const name = getNewProjectInput();
  const id = getLastProjectId() + 1;

  if (name) {
    createProject(id, name);
    todoUl(getActualProject());
  }
});

console.log(newTodoPopup)

showNewTodoPopupButton.addEventListener('click', () => {
  openPopup(newTodoPopup)
})

newTodoPopup.addEventListener('click', (e) => {
  if (e.target === newTodoPopup) {
    closePopup(newTodoPopup)
  }
})

newTodoBtn.addEventListener('click', () => {
  const name = getNewTodoName();
  const description = getNewTodoDescription();
  const priority = getNewTodoPriority();
  const date = getNewTodoDate();

  if (name && description && priority && date) {
    createTodo(getActualProject(), name, description, priority, date);
    resetForm();
    todoUl(getActualProject());
    closePopup(newTodoPopup)
  }
});