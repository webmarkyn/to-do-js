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

export {
    liProject,
    projectUl,
    todoUl,
}