import Project from './project';

let projects = [];
let actualProject = '';
const projectList = document.getElementById('projectList');
const newProjectBtn = document.getElementById('newProjectBtn');
const newProjectInput = document.getElementById('newProjectInput');

if (localStorage.getItem('projects') !== null) {
   const projectsJSON = JSON.parse(localStorage.getItem('projects'));

   projectsJSON.forEach(project => {
      const newProject = new Project(project._id, project._name);
      const projectLi = document.createElement('li');

      projectLi.innerText = newProject.getName();
      projectList.appendChild(projectLi);
      projects.push(newProject);
   });
} else {
   const defaultProject = new Project(0, 'My first Project');
   const projectLi = document.createElement('li');

   projectLi.innerText = defaultProject.getName();
   projectList.appendChild(projectLi);
   projects.push(defaultProject);
   localStorage.setItem('projects', JSON.stringify(projects));
}

// listener for create new projects
newProjectBtn.addEventListener('click', () => {
   const name = newProjectInput.value;
   newProjectInput.value = '';

   if (name) {
      const projectLi = document.createElement('li');
      const id = projects.length;
      const newProject = new Project(id, name);

      projects.push(newProject);
      projectLi.innerText = newProject.getName();
      projectList.appendChild(projectLi);

      localStorage.setItem('projects', JSON.stringify(projects));
   } else {
      alert("Project name can't be blank");
   }
});