import { onclickDeleteProject, projects } from "./logic";

const container = document.querySelector("#content");

const createProjectElement = () => {
  let projectName = document.querySelector("#project").value;

  if (projectName === "") {
    projectName = "Project";
  }

  const divProject = document.createElement("div");
  divProject.classList.add("project");
  divProject.dataset.projectId = projects.length;
  const close = document.createElement("span");
  close.textContent = "close";
  close.classList.add("material-symbols-outlined", "close");
  close.dataset.closeBtnId = projects.length;
  close.onclick = onclickDeleteProject;
  const titleProject = document.createElement("h2");
  titleProject.textContent = projectName;
  const btnAddTodo = document.createElement("button");
  btnAddTodo.classList.add("add-todo-form");
  btnAddTodo.dataset.projectBtnId = projects.length;
  btnAddTodo.textContent = "+";

  divProject.append(close, titleProject, btnAddTodo);
  container.append(divProject);
};

const createTodoForm = (e) => {
  const divTodo = document.createElement("div");
  divTodo.classList.add("show-todo");
  divTodo.dataset.todoId = e.target.dataset.projectBtnId;
  divTodo.setAttribute("id", "myTodo");

  // Create Form:
  const formTodo = document.createElement("form");
  formTodo.classList.add("todo-container");
  const titleTodo = document.createElement("h2");
  titleTodo.textContent = "Add New Todo";

  // Create label/input name:
  const labelName = document.createElement("label");
  labelName.for = "todo";
  labelName.textContent = "Todo Title:";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "todo";
  inputName.id = "todo";
  inputName.required = "true";

  // Create label/input description:
  const labelDescription = document.createElement("label");
  labelDescription.for = "todo-desc";
  labelDescription.textContent = "Todo Description:";
  const inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.name = "todo-desc";
  inputDescription.id = "todo-desc";
  inputDescription.required = "true";

  // Create label/input date:
  const labelDate = document.createElement("label");
  labelDate.for = "todo-date";
  labelDate.textContent = "Due Date:";
  const inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.name = "todo-date";
  inputDate.id = "todo-date";
  inputDate.required = "true";

  // Create label/input priority:
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

  // Create action buttons:
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-todo-container");
  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btn", "add-todo");
  btnSubmit.dataset.todoBtnId = e.target.dataset.projectBtnId;
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

  const divProjectContainer = e.target.parentElement;

  divTodo.append(formTodo);
  divProjectContainer.append(divTodo);
};

const createTodoElement = (index) => {
  const todoName = document.querySelector("#todo").value;
  const todoDesc = document.querySelector("#todo-desc").value;
  const todoDate = document.querySelector("#todo-date").value;
  const todoPrior = document.querySelector("#todo-prior").value;

  const divTodo = document.createElement("div");
  divTodo.classList.add("todo");
  const titleTodo = document.createElement("h3");
  titleTodo.textContent = todoName;
  const descriptionTodo = document.createElement("p");
  descriptionTodo.textContent = todoDesc;
  const dateTodo = document.createElement("p");
  dateTodo.textContent = todoDate;
  const priorTodo = document.createElement("p");
  priorTodo.textContent = todoPrior;

  const divTodoContainer = document.querySelector(
    `[data-project-id = "${index}"]`
  );
  const btnTodo = document.querySelector(`[data-project-btn-id = "${index}"]`);

  divTodo.append(titleTodo, descriptionTodo, dateTodo, priorTodo);
  divTodoContainer.insertBefore(divTodo, btnTodo);

  return { todoName, todoDesc, todoDate, todoPrior };
};
export { createProjectElement, createTodoForm, createTodoElement };
