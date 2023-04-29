import { createTodo, addTask, createProject, addProject, projects } from "./logic";

const container = document.querySelector("#content");

const btn = document.createElement("button");
btn.textContent = "Change Me";
container.append(btn);

const createProjectElement = (projectName) => {
  const divProject = document.createElement("div");
  divProject.classList.add("project");
  const titleProject = document.createElement("h2");
  titleProject.textContent = projectName;

  divProject.append(titleProject);
  container.append(divProject);
};

const btnAddProject = document.querySelector(".add-project");
btnAddProject.addEventListener("click", (e) => {
  e.preventDefault();

  const projectName = document.querySelector("#project").value;
  createProjectElement(projectName);
  addProject();
  console.log(projects);
});

export { btn };
