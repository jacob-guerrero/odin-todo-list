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

const addTodo = (index, todo, isLocal) => {
  projects[index].push(todo);

  // Update todo in local storage:
  if (!isLocal) {
    updateTodoData();
  }
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

  // Update todo in local storage:
  updateTodoData();
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

// Initial state:
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

    // Fix local storage when delete project
  });

  btnCloseProject.addEventListener("click", () => {
    const btnNewForm = document.querySelector(".show-form");
    btnNewForm.classList.toggle("active");
  });
})();

// Remove Project, Update Project Index:
const onclickDeleteProject = (e) => {
  const indexDeleteProject = e.target.dataset.closeBtnId;

  removeProject(indexDeleteProject);
  updateProjectIndex(indexDeleteProject);

  // Update local storage:
  // Projects:
  deleteData(indexDeleteProject);
  // Todos:
  updateTodoData();
};

const toggleActiveClass = (e) => {
  const formContainer = document.querySelector("[data-todo-id]");

  formContainer.classList.toggle("active");
  e.target.classList.toggle("active");
};

const removeFormIfExist = (formContainer) => {
  formContainer.remove();
};

// Create Form, Change Form to another Project:
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
      if(activeTodoFormBtn) {
        activeTodoFormBtn.classList.remove("active");
      }
    }
  }

  if (!document.querySelector("[data-todo-id]")) {
    createTodoForm(e);
    onclickTodoBtn();
    e.target.classList.add("active");
  }
};

// Create Todo Element, Add Todo to Project:
const manageTodo = (index, isLocal, localTodoIndex) => {
  const todoElement = createTodoElement(index, isLocal, localTodoIndex);
  const todo = createTodo(
    todoElement.todoName,
    todoElement.todoDesc,
    todoElement.todoDate,
    todoElement.todoPrior
  );

  addTodo(index, todo, isLocal);
};

// Click "Add Todo" Button:
const onclickTodoBtn = () => {
  const btnAddTodo = document.querySelectorAll(".add-todo");

  btnAddTodo.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const index = e.target.dataset.todoBtnId;

      manageTodo(index, false, null);
      console.log(projects);
    });
  });
};

// Remove Todo, Update Todo Index:
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

// Change Todo Info to Inputs:
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

// Manage Local Storage:
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
  const data = JSON.parse(localStorage.getItem("projects"));
  if (data && data.length > index) {
    data.splice(index, 1);
    items.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(data));
  }
}
function updateTodoData() {
  localStorage.setItem("todos", JSON.stringify(projects));
}

function createElementsFromLocalStorage() {
  const data = getData();
  let i = 0;
  if (data) {
    data.forEach((projectName) => {
      items.push(projectName);
      createProjectElement(true, projectName);
      addProject(createProject());
    });

    if (JSON.parse(localStorage.getItem("todos"))) {
      const numOfProjects = JSON.parse(localStorage.getItem("todos"));

      for (let i = 0; i < numOfProjects.length; i++) {
        const todosInProject = JSON.parse(localStorage.getItem("todos"))[i];

        for (let j = 0; j < todosInProject.length; j++) {
          manageTodo(i, true, j);
        }
      }
    }
  }
}

/* Capitalize First Letter */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Default:
if (localStorage.length === 0) {
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
