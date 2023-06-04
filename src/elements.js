import {
  onclickTodoForm,
  onclickDeleteProject,
  onclickDeleteTodo,
  expandTodo,
  onclickEditTodo,
  toggleActiveClass,
  items,
  storeData,
  getData,
  projects,
} from "./logic";

const container = document.querySelector("#content");

const createProjectElement = (isLocal, localName) => {
  let projectName = document.querySelector("#project").value;

  if (projectName === "") {
    projectName = "Project";
  }

  // Create Projects saved on LocalStore:
  if(isLocal) {
    projectName = localName;
  } else {
    storeData(projectName);
  }

  // Create Project:
  const divProject = document.createElement("div");
  divProject.classList.add("project");
  divProject.dataset.projectId = projects.length;

  // Close Icon:
  const close = document.createElement("span");
  close.textContent = "close";
  close.classList.add("material-symbols-outlined", "close");
  close.dataset.closeBtnId = projects.length;
  close.onclick = onclickDeleteProject;

  // Project Elements:
  const titleProject = document.createElement("h2");
  titleProject.textContent = projectName;
  titleProject.classList.add("project-title")
  const btnAddTodo = document.createElement("button");
  btnAddTodo.classList.add("add-todo-form");
  btnAddTodo.dataset.projectBtnId = projects.length;
  btnAddTodo.textContent = "+";
  btnAddTodo.onclick = onclickTodoForm;

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
  formTodo.classList.add("todo-form-container");
  const titleTodo = document.createElement("h2");
  titleTodo.classList.add("todo-form-title");
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
  btnClose.onclick = toggleActiveClass;
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
  // Assign Values to the Element:
  const todoName = document.querySelector("#todo").value;
  const todoDesc = document.querySelector("#todo-desc").value;
  const todoDate = document.querySelector("#todo-date").value;
  const todoPrior = document.querySelector("#todo-prior").value;

  // Create Todo:
  const divTodo = document.createElement("div");
  divTodo.classList.add("todo");
  divTodo.dataset.todoItemId = projects[index].length;

  // Close Icon:
  const closeTodo = document.createElement("span");
  closeTodo.textContent = "close";
  closeTodo.classList.add("material-symbols-outlined", "close-todo");
  closeTodo.dataset.closeTodoId = projects[index].length;
  closeTodo.onclick = onclickDeleteTodo;

  // Create Todo Elements:
  const titleTodo = document.createElement("h3");
  titleTodo.textContent = todoName;
  titleTodo.classList.add("todo-title");
  const descriptionTodo = document.createElement("p");
  descriptionTodo.textContent = todoDesc;
  descriptionTodo.classList.add("todo-description", "hide-content");
  const dateTodo = document.createElement("p");
  dateTodo.textContent = todoDate;
  dateTodo.classList.add("todo-date");
  const priorTodo = document.createElement("p");
  priorTodo.textContent = todoPrior;
  priorTodo.classList.add("todo-priority", "hide-content");

  // Edit Icon:
  const editContainer = document.createElement("div");
  editContainer.classList.add("option-container", "hide-content");
  const editTodo = document.createElement("span");
  editTodo.textContent = "edit_square";
  editTodo.classList.add("material-symbols-outlined-3", "edit-todo");
  editTodo.dataset.editTodoId = projects[index].length;
  editTodo.onclick = onclickEditTodo;
  editContainer.append(editTodo);

  //Expand Icon:
  const expandContainer = document.createElement("div");
  expandContainer.classList.add("expand-container");
  const expandBtn = document.createElement("span");
  expandBtn.textContent = "keyboard_double_arrow_down";
  expandBtn.classList.add("material-symbols-outlined-2", "expand");
  expandBtn.onclick = expandTodo;
  expandContainer.append(expandBtn);

  // Select Todo Container:
  const divTodoContainer = document.querySelector(
    `[data-project-id = "${index}"]`
  );
  const btnTodo = document.querySelector(`[data-project-btn-id = "${index}"]`);

  divTodo.append(
    closeTodo,
    titleTodo,
    dateTodo,
    descriptionTodo,
    priorTodo,
    editContainer,
    expandContainer
  );
  divTodoContainer.insertBefore(divTodo, btnTodo);

  return { todoName, todoDesc, todoDate, todoPrior };
};

const modifyTodoElement = (e) => {
  const projectIndex = e.target.closest(".project").dataset.projectId;
  const todoIndex = e.target.closest(".todo").dataset.todoItemId;
  const targetTodo = document.querySelector(
    `[data-todo-item-id = "${e.target.dataset.saveTodoId}"]`
  );
  const todoContainer = e.target.closest(".todo");
  const inputs = todoContainer.querySelectorAll("input");
  const optionContainer = e.target.parentElement;
  let todoName;
  let todoDesc;
  let todoDate;
  let todoPrior;

  // Assign Values to the Element:
  if (e.target.classList.contains("save-todo")) {
    todoName = targetTodo.querySelector(".input-title").value;
    todoDesc = targetTodo.querySelector(".input-description").value;
    todoDate = targetTodo.querySelector(".input-date").value;
    todoPrior = targetTodo.querySelector(".input-priority").value;
  }
  if (e.target.classList.contains("cancel-todo")) {
    const todoValues = projects[projectIndex][todoIndex];

    todoName = todoValues["title"];
    todoDesc = todoValues["description"];
    todoDate = todoValues["dueDate"];
    todoPrior = todoValues["priority"];
  }

  // Update Todo Elements:
  const titleTodo = document.createElement("h3");
  titleTodo.textContent = todoName;
  titleTodo.classList.add("todo-title");
  const descriptionTodo = document.createElement("p");
  descriptionTodo.textContent = todoDesc;
  descriptionTodo.classList.add("todo-description", "hide-content", "active");
  const dateTodo = document.createElement("p");
  dateTodo.textContent = todoDate;
  dateTodo.classList.add("todo-date");
  const priorTodo = document.createElement("p");
  priorTodo.textContent = todoPrior;
  priorTodo.classList.add("todo-priority", "hide-content", "active");

  optionContainer.before(titleTodo, dateTodo, descriptionTodo, priorTodo);

  inputs.forEach((input) => {
    input.remove();
  });
  todoContainer.querySelector("select").remove();

  // Update Options:
  const saveTodoBtn = todoContainer.querySelector(".save-todo");
  const cancelTodoBtn = todoContainer.querySelector(".cancel-todo");
  const editTodo = document.createElement("span");
  editTodo.textContent = "edit_square";
  editTodo.classList.add("material-symbols-outlined-3", "edit-todo");
  saveTodoBtn.dataset.saveTodoId = todoContainer.dataset.todoItemId;
  editTodo.onclick = onclickEditTodo;

  todoContainer.querySelector(".option-container").append(editTodo);
  todoContainer.querySelector(".option-container").removeChild(saveTodoBtn);
  todoContainer.querySelector(".option-container").removeChild(cancelTodoBtn);

  if (e.target.classList.contains("save-todo")) {
    updateTodoArray(
      projectIndex,
      todoIndex,
      todoName,
      todoDesc,
      todoDate,
      todoPrior
    );
  }
};

const updateTodoArray = (
  projectIndex,
  todoIndex,
  title,
  description,
  dueDate,
  priority
) => {
  projects[projectIndex][todoIndex]["title"] = title;
  projects[projectIndex][todoIndex]["description"] = description;
  projects[projectIndex][todoIndex]["dueDate"] = dueDate;
  projects[projectIndex][todoIndex]["priority"] = priority;
};

export {
  createProjectElement,
  createTodoForm,
  createTodoElement,
  modifyTodoElement,
};
