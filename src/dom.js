const li = html => {
    const liTag = document.createElement('li');
    liTag.innerHTML = html;

    return liTag;
};

export {
    li,
}