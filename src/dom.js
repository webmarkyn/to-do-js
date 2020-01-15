/**
 * this module is used to get and return DOM elements
 * @return {HTMLElement}
 */

const projectUl = () => {
    return document.getElementById('projectList');
};

const todoUl = () => {
    return document.getElementById('todoList');
};

const liProject = project => {
    const liTag = document.createElement('li');
    const removeBtn = document.createElement('button');

    liTag.innerText = project.getName();
    liTag.appendChild(removeBtn);

    removeBtn.innerText = 'X';
    removeBtn.addEventListener('click', () => {
        alert('this should remove project ' + project.getName());
    });

    return liTag;
};

const getNewProjectInput = () => {
    const input = document.getElementById('newProjectInput');
    const name = input.value;

    input.value = '';

    return name;
};

export {
    liProject,
    projectUl,
    todoUl,
    getNewProjectInput
}