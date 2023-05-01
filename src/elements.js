import {
  createTodo,
  addTask,
  createProject,
  addProject,
  projects,
} from "./logic";

const container = document.querySelector("#content");

const btn = document.createElement("button");
btn.textContent = "Change Me";
container.append(btn);

const createTodoElement = () => {
  const divTodo = document.createElement("div");
  divTodo.classList.add("show-todo");
  divTodo.setAttribute("id", "myTodo");

  const formTodo = document.createElement("form");
  formTodo.classList.add("todo-container");
  const titleTodo = document.createElement("h2");
  titleTodo.textContent = "Add New Todo";

  const labelName = document.createElement("label");
  labelName.for = "todo";
  labelName.textContent = "Todo Title:";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "todo";
  inputName.id = "todo";
  inputName.required = "true";

  const labelDescription = document.createElement("label");
  labelDescription.for = "todo-desc";
  labelDescription.textContent = "Todo Description:";
  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.name = "todo-desc";
  inputDescription.id = "todo-desc";
  inputDescription.required = "true";

  const labelDate = document.createElement("label");
  labelDate.for = "todo-date";
  labelDate.textContent = "Due Date:";
  const inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.name = "todo-date";
  inputDate.id = "todo-date";
  inputDate.required = "true";

  const labelPriority = document.createElement("label");
  labelPriority.for = "todo-prior";
  labelPriority.textContent = "Priority:";
  const inputPriority = document.createElement("select");
  inputPriority.name = "todo-prior";
  inputPriority.id = "todo-prior";
  inputPriority.required = "true";
  const inputOption1 = document.createElement("option");
  inputOption1.textContent = "High";
  inputOption1.value = "high";
  const inputOption2 = document.createElement("option");
  inputOption2.textContent = "Medium";
  inputOption2.value = "medium";
  const inputOption3 = document.createElement("option");
  inputOption3.textContent = "Low";
  inputOption3.value = "low";
  inputPriority.append(inputOption1, inputOption2, inputOption3);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btn", "add-todo");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "Add Todo";
  const btnClose = document.createElement("button");
  btnClose.classList.add("btn", "hide-todo");
  btnClose.type = "button";
  btnClose.textContent = "Close";
  btnContainer.append(btnSubmit, btnClose);

  formTodo.append(
    titleTodo,
    labelName,
    inputName,
    labelDescription,
    inputDescription,
    labelDate,
    inputDate,
    labelPriority,
    inputPriority,
    btnContainer
  );
  divTodo.append(formTodo);
  container.append(divTodo);
};

const createProjectElement = (projectName) => {
  const divProject = document.createElement("div");
  divProject.classList.add("project");
  const titleProject = document.createElement("h2");
  titleProject.textContent = projectName;
  const btnAddTodo = document.createElement("button");
  btnAddTodo.classList.add("add-todo");
  btnAddTodo.textContent = "+";

  divProject.append(titleProject, btnAddTodo);
  container.append(divProject);
};

const btnAddProject = document.querySelector(".add-project");
btnAddProject.addEventListener("click", (e) => {
  e.preventDefault();

  const projectName = document.querySelector("#project").value;
  createProjectElement(projectName);
  addProject();
  onclickTodo();
  console.log(projects);
});

const onclickTodo = () => {
  const btnAddTodo = document.querySelector(".add-todo");
  btnAddTodo.addEventListener("click", (e) => {
    e.preventDefault();

    createTodoElement();
    // addTodo();
    // console.log(projects);
  });
};

export { btn };
