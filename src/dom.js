const projectUl = () => {
    return document.getElementById('projectList');
};

const todoUl = () => {
    return document.getElementById('todoList');
};

const li = html => {
    const liTag = document.createElement('li');
    liTag.innerHTML = html;

    return liTag;
};

export {
    li,
    projectUl,
    todoUl,
}