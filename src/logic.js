import {
  createProjectElement,
  createTodoForm,
  createTodoElement,
  modifyTodoElement,
} from "./elements";

const createTodo = (title, description, dueDate, priority) => {
  const sayTask = () => {
    console.log({ title, description, dueDate, priority });
  };
  return { title, description, dueDate, priority, sayTask };
};

const addTodo = (index, ...todo) => {
  projects[index].push(...todo);
  
  updateTodoData();
};

const createProject = () => {
  return [];
};

const addProject = (project) => {
  projects.push(project);
};

const removeProject = (index) => {
  projects.splice(index, 1);
  document.querySelector(`[data-project-id = "${index}"] `).remove();
};

const updateProjectIndex = (index) => {
  // Project:
  const projectId = document.querySelectorAll("[data-project-id]");
  const closeBtnId = document.querySelectorAll("[data-close-btn-id]");
  const projectBtnId = document.querySelectorAll("[data-project-btn-id]");

  for (let j = index; j < projects.length; j++) {
    projectId[j].dataset.projectId = j;
    closeBtnId[j].dataset.closeBtnId = j;
    projectBtnId[j].dataset.projectBtnId = j;
  }

  // Form:
  if (document.querySelector("[data-todo-id]")) {
    const todoId = document.querySelector("[data-todo-id]");
    const todoBtnId = document.querySelector("[data-todo-btn-id]");

    todoId.dataset.todoId = todoId.parentElement.dataset.projectId;
    todoBtnId.dataset.todoBtnId = todoId.parentElement.dataset.projectId;
  }
};

const removeTodo = (index, indexParent) => {
  const parentTodo = document.querySelector(
    `[data-project-id = "${indexParent}"]`
  );

  projects[indexParent].splice(index, 1);
  parentTodo.querySelector(`[data-todo-item-id = "${index}"] `).remove();

  updateTodoData();
};

const updateTodoIndex = (index, indexParent) => {
  const parentTodo = document.querySelector(
    `[data-project-id = "${indexParent}"]`
  );
  const todoItemId = parentTodo.querySelectorAll("[data-todo-item-id]");
  const closeTodoId = parentTodo.querySelectorAll("[data-close-todo-id]");

  for (let j = index; j < projects[indexParent].length; j++) {
    todoItemId[j].dataset.todoItemId = j;
    closeTodoId[j].dataset.closeTodoId = j;
  }
};

const projects = [];

const onclickProjectBtn = (() => {
  const btnNewProject = document.querySelector(".new-project");
  const btnAddProject = document.querySelector(".add-project");
  const btnCloseProject = document.querySelector(".hide-options");

  btnNewProject.addEventListener("click", () => {
    const btnNewForm = document.querySelector(".show-form");
    btnNewForm.classList.toggle("active");
  });

  btnAddProject.addEventListener("click", (e) => {
    e.preventDefault();

    createProjectElement(false, "");
    addProject(createProject());
    console.log(projects);
  });

  btnCloseProject.addEventListener("click", () => {
    const btnNewForm = document.querySelector(".show-form");
    btnNewForm.classList.toggle("active");
  });
})();

const onclickDeleteProject = (e) => {
  const indexDeleteProject = e.target.dataset.closeBtnId;

  removeProject(indexDeleteProject);
  updateProjectIndex(indexDeleteProject);
  deleteData(indexDeleteProject);
};

const toggleActiveClass = (e) => {
  const formContainer = document.querySelector("[data-todo-id]");

  formContainer.classList.toggle("active");
  e.target.classList.toggle("active");
};

const removeFormIfExist = (formContainer) => {
  formContainer.remove();
};

const onclickTodoForm = (e) => {
  const formContainer = document.querySelector("[data-todo-id]");
  const activeTodoFormBtn = document.querySelector(".add-todo-form.active");

  if (formContainer) {
    const idBtn = e.target.dataset.projectBtnId;
    const idForm = formContainer.dataset.todoId;

    if (idBtn === idForm) {
      toggleActiveClass(e);
    } else {
      removeFormIfExist(formContainer);
      activeTodoFormBtn.classList.remove("active");
    }
  }

  if (!document.querySelector("[data-todo-id]")) {
    createTodoForm(e);
    onclickTodoBtn();
    e.target.classList.add("active");
  }
};

const manageTodo = (index) => {
  const todoElement = createTodoElement(index);
  const todo = createTodo(
    todoElement.todoName,
    todoElement.todoDesc,
    todoElement.todoDate,
    todoElement.todoPrior
  );

  addTodo(index, todo);
};

const onclickTodoBtn = () => {
  const btnAddTodo = document.querySelectorAll(".add-todo");

  btnAddTodo.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const index = e.target.dataset.todoBtnId;

      manageTodo(index);
      console.log(projects);
    });
  });
};

const onclickDeleteTodo = (e) => {
  const indexDeleteTodo = e.target.dataset.closeTodoId;
  const indexParentTodo = e.target.closest(".project").dataset.projectId;

  removeTodo(indexDeleteTodo, indexParentTodo);
  updateTodoIndex(indexDeleteTodo, indexParentTodo);
};

const expandTodo = (e) => {
  if (e.target.textContent === "keyboard_double_arrow_down") {
    e.target.textContent = "keyboard_double_arrow_up";
    e.target.classList.add("up");
  } else {
    e.target.textContent = "keyboard_double_arrow_down";
    e.target.classList.remove("up");
  }
  const hiddenElements = e.target
    .closest(".todo")
    .querySelectorAll(".hide-content");
  hiddenElements.forEach((elem) => {
    elem.classList.toggle("active");
  });
};

const onclickEditTodo = (e) => {
  const todoContainer = e.target.closest(".todo");

  // Edit Input Title:
  const title = todoContainer.querySelector(".todo-title");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = title.textContent;
  titleInput.placeholder = "Title";
  titleInput.classList.add("input-title");
  todoContainer.insertBefore(titleInput, title);
  todoContainer.removeChild(title);

  // Edit Input Description:
  const description = todoContainer.querySelector(".todo-description");
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.value = description.textContent;
  descriptionInput.placeholder = "Description";
  descriptionInput.classList.add("input-description");
  todoContainer.insertBefore(descriptionInput, description);
  todoContainer.removeChild(description);

  // Edit Input Date:
  const date = todoContainer.querySelector(".todo-date");
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = date.textContent;
  dateInput.classList.add("input-date");
  todoContainer.insertBefore(dateInput, date);
  todoContainer.removeChild(date);

  // Edit Input Priority:
  const priority = todoContainer.querySelector(".todo-priority");
  const priorityInput = document.createElement("select");
  const inputOption1 = document.createElement("option");
  inputOption1.textContent = "High";
  inputOption1.value = "high";
  const inputOption2 = document.createElement("option");
  inputOption2.textContent = "Medium";
  inputOption2.value = "medium";
  const inputOption3 = document.createElement("option");
  inputOption3.textContent = "Low";
  inputOption3.value = "low";
  priorityInput.append(inputOption1, inputOption2, inputOption3);
  priorityInput.value = priority.textContent;
  priorityInput.classList.add("input-priority");
  todoContainer.insertBefore(priorityInput, priority);
  todoContainer.removeChild(priority);

  // Options:
  const edit = todoContainer.querySelector(".edit-todo");
  const saveTodoBtn = document.createElement("span");
  saveTodoBtn.textContent = "check_circle";
  saveTodoBtn.classList.add("material-symbols-outlined-4", "save-todo");
  saveTodoBtn.dataset.saveTodoId = todoContainer.dataset.todoItemId;
  saveTodoBtn.onclick = modifyTodoElement;
  const cancelTodoBtn = document.createElement("span");
  cancelTodoBtn.textContent = "cancel";
  cancelTodoBtn.classList.add("material-symbols-outlined-5", "cancel-todo");
  cancelTodoBtn.onclick = modifyTodoElement;

  todoContainer
    .querySelector(".option-container")
    .append(saveTodoBtn, cancelTodoBtn);
  todoContainer.querySelector(".option-container").removeChild(edit);
};

let items = [];
function storeData(projectName) {
  items.push(projectName);
  localStorage.setItem("projects", JSON.stringify(items));
}
function getData() {
  const dataProjects = localStorage.getItem("projects");
  return dataProjects ? JSON.parse(dataProjects) : null;
}
function deleteData(index) {
  const data = JSON.parse(localStorage.getItem('projects'));
  if (data && data.length > index) {
    data.splice(index, 1);
    items.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(data));
  }
}
function updateTodoData() {
  localStorage.setItem("todos", JSON.stringify(projects));
}

function createElementsFromLocalStorage() {
  const data = getData();
  if (data) {
    data.forEach(projectName => {
      items.push(projectName);
      createProjectElement(true, projectName);
      addProject(createProject());
    });
  }
}

/* Capitalize First Letter */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Default:
if(localStorage.length === 0) {
  document.querySelector(".add-project").click();
} else {
  createElementsFromLocalStorage();
}

export {
  onclickTodoForm,
  onclickDeleteProject,
  onclickDeleteTodo,
  expandTodo,
  onclickEditTodo,
  toggleActiveClass,
  storeData,
  updateTodoData,
  projects,
};
