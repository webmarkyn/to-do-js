import Project from './project';
import {checkStorage, createProject, getLastProjectId, getStorage} from './interface';
import {getNewProjectInput, liProject, projectUl} from './dom';

let actualProject = '';
let projects = checkStorage() ? getStorage() : [];
const projectList = projectUl();
const newProjectBtn = document.getElementById('newProjectBtn');

if (checkStorage()) {
   getStorage().forEach(project => {
      projectList.appendChild(liProject(project));
   });
} else {
   createProject();
}

// listener for create new projects
newProjectBtn.addEventListener('click', () => {
   const name = getNewProjectInput();
   const id = getLastProjectId() + 1;

   if (name) {
      createProject(id, name);
   } else {
      alert("Name can't be blank");
   }
});

