import { createTodo, addTask, createProject } from "./logic";

const container = document.querySelector('#content');

const btn = document.createElement('button');
btn.textContent = 'Change Me';
container.append(btn);

const createProjectElement = (projectName) => {
    const divProject = document.createElement('div');
    divProject.classList.add('project');
    const titleProject = document.createElement('h2');
    titleProject.textContent = projectName;
    
    divProject.append(titleProject);
    container.append(divProject);
}

const addProject = document.querySelector('.add-project');
addProject.addEventListener("click", (e) => {
    e.preventDefault();
    const projectName = document.querySelector("#project").value;
    const project1 = createProjectElement(projectName);
});

export {btn};