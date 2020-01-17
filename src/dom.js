import {
  getActualProject, removeProject, removeTodo, setActualProject, toggleState, updateTodo,
} from './interface';

/**
 * this module is used to get and return DOM elements
 * @return {HTMLElement}
 */

const projectUl = () => document.getElementById('projectList');

const editTodo = (todo) => {
  const container = document.createElement('div');
  const name = document.createElement('input');
  const description = document.createElement('textarea');
  const priority = document.createElement('select');
  const date = document.createElement('input');
  const save = document.createElement('button');

  ['High', 'Mid', 'Low'].forEach((element) => {
    const option = document.createElement('option');
    option.value = element;
    option.innerText = element;
    priority.appendChild(option);
  });

  name.type = 'text';
  date.type = 'date';
  save.innerText = 'save';

  name.value = todo.getName();
  description.value = todo.getDescription();
  date.value = todo.getDate();

  container.appendChild(name);
  container.appendChild(description);
  container.appendChild(priority);
  container.appendChild(date);
  container.appendChild(save);

  save.addEventListener('click', () => {
    updateTodo(getActualProject(), todo, name.value, description.value, priority.value, date.value);
    todoUl(getActualProject());
  });

  return container;
};

const todoLi = (todo) => {
  const todoEl = document.createElement('li');
  const actions = document.createElement('div');
  const removeBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const name = document.createElement('p');
  const description = document.createElement('p');
  const priority = document.createElement('p');
  const date = document.createElement('p');
  const status = document.createElement('button');

  actions.appendChild(removeBtn);
  actions.appendChild(editBtn);

  todoEl.classList.add('todo-item');
  todoEl.dataset.state = todo.getState();
  name.innerText = todo.getName();
  description.innerText = todo.getDescription();
  priority.innerText = `Priority: ${todo.getPriority()}`;
  status.innerText = `Completed: ${todo.getState()}`;
  date.innerText = todo.getDate();

  editBtn.innerText = 'Edit';
  removeBtn.innerText = 'X';

  todoEl.appendChild(name);
  todoEl.appendChild(description);
  todoEl.appendChild(priority);
  todoEl.appendChild(date);
  todoEl.appendChild(status);
  todoEl.appendChild(actions);

  removeBtn.addEventListener('click', () => {
    removeTodo(getActualProject(), todo.getId());
    todoEl.parentElement.removeChild(todoEl);
  });

  editBtn.addEventListener('click', () => {
    todoEl.innerHTML = '';
    todoEl.appendChild(editTodo(todo));
  });

  status.addEventListener('click', () => {
    toggleState(getActualProject(), todo);
    todoUl(getActualProject());
  });

  return todoEl;
};

const todoUl = (project) => {
  const list = document.getElementById('todoList');
  const todos = project.getTodos();

  list.innerHTML = '';

  if (todos.length) {
    project.getTodos().forEach((todo) => {
      list.appendChild(todoLi(todo));
    });
  } else {
    list.innerText = `No tasks to complete in project ${project.getName()}`;
  }
};

const liProject = (project) => {
  const liTag = document.createElement('li');
  const removeBtn = document.createElement('button');
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
  removeBtn.addEventListener('click', () => {
    removeProject(liTag.id);
    liTag.parentElement.removeChild(liTag);
    location.reload();
  });

  return liTag;
};

const getNewProjectInput = () => {
  const input = document.getElementById('newProjectInput');
  const name = input.value;

  input.value = '';

  if (name) {
    return name;
  }
  alert("Name can't be blank");
  return false;
};

const getNewTodoName = () => {
  const input = document.getElementById('todoName');
  const name = input.value;

  if (name) {
    return name;
  }
  alert("Name can't be blank");
  return false;
};

const closePopup = (popup) => {
  popup.style.opacity = '0';

  const trans = () => {
    popup.style.visibility = 'hidden';
    popup.removeEventListener('transitionend', trans);
  };
  popup.addEventListener('transitionend', trans);
};

const openPopup = (popup) => {
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
};

const getNewTodoDescription = () => {
  const input = document.getElementById('todoDescription');
  const description = input.value;

  if (description) {
    return description;
  }
  alert("Description can't be blank");
  return false;
};

const getNewTodoPriority = () => {
  const input = document.getElementById('todoPriority');
  const priority = input.value;

  if (priority) {
    return priority;
  }
  alert('Priority must be selected');
  return false;
};

const getNewTodoDate = () => {
  const input = document.getElementById('todoDate');
  const date = input.value;

  if (date) {
    return date;
  }
  alert("Date can't be blank");
  return false;
};

const resetForm = () => {
  document.getElementById('todoName').value = '';
  document.getElementById('todoDescription').value = '';
  document.getElementById('todoPriority').selectedIndex = 0;
  document.getElementById('todoDate').value = '';
};

export {
  liProject,
  projectUl,
  todoUl,
  getNewProjectInput,
  todoLi,
  getNewTodoName,
  getNewTodoDescription,
  getNewTodoPriority,
  getNewTodoDate,
  resetForm,
  closePopup,
  openPopup,
};