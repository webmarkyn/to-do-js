import Project from './project';
import {checkStorage, getStorage, updateStorage} from './interface';
import { li, projectUl } from './dom';

let actualProject = '';
let projects = checkStorage() ? getStorage() : [];
const projectList = projectUl();
const newProjectBtn = document.getElementById('newProjectBtn');
const newProjectInput = document.getElementById('newProjectInput');

if (checkStorage()) {
   getStorage().forEach(project => {
      projectList.appendChild(li(project.getName()));
   });
} else {
   const defaultProject = new Project(0, 'My first Project');

   projectList.appendChild(li(defaultProject.getName()));
   projects.push(defaultProject);
   updateStorage(projects);
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

