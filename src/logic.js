import {
  createProjectElement,
  createTodoForm,
  createTodoElement,
} from "./elements";

const createTodo = (title, description, dueDate, priority) => {
  const sayTask = () => {
    console.log({ title, description, dueDate, priority });
  };
  return { title, description, dueDate, priority, sayTask };
};

const addTodo = (index, ...todo) => {
  projects[index].push(...todo);
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
  const btnAddProject = document.querySelector(".add-project");

  btnAddProject.addEventListener("click", (e) => {
    e.preventDefault();

    createProjectElement();
    addProject(createProject());
    console.log(projects);
  });
})();

const onclickDeleteProject = (e) => {
  const indexDeleteProject = e.target.dataset.closeBtnId;

  removeProject(indexDeleteProject);
  updateProjectIndex(indexDeleteProject);
};

const toggleActiveClass = () => {
  const formContainer = document.querySelector("[data-todo-id]");

  formContainer.classList.toggle("active");
};

const removeFormIfExist = (formContainer) => {
  formContainer.remove();
};

const onclickTodoForm = (e) => {
  const formContainer = document.querySelector("[data-todo-id]");

  if (formContainer) {
    const idBtn = e.target.dataset.projectBtnId;
    const idForm = formContainer.dataset.todoId;

    if (idBtn === idForm) {
      toggleActiveClass();
    } else {
      removeFormIfExist(formContainer);
    }
  }

  if (!document.querySelector("[data-todo-id]")) {
    createTodoForm(e);
    onclickTodoBtn();
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
  const todoContainer = e.target.closest('.todo');
  
  // Edit Input Title:
  const title = todoContainer.querySelector(".todo-title");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = title.textContent;
  titleInput.placeholder = "Title";
  todoContainer.insertBefore(titleInput, title);
  todoContainer.removeChild(title);

  // Edit Input Description:
  const description = todoContainer.querySelector(".todo-description");
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.value = description.textContent;
  descriptionInput.placeholder = "Description";
  todoContainer.insertBefore(descriptionInput, description);
  todoContainer.removeChild(description);

  // Edit Input Date:
  const date = todoContainer.querySelector(".todo-date");
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = date.textContent;
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
  todoContainer.insertBefore(priorityInput, priority);
  todoContainer.removeChild(priority);

  // Options:
  const edit = todoContainer.querySelector(".edit-todo");
  const saveTodo = document.createElement("span");
  saveTodo.textContent = "check_circle";
  saveTodo.classList.add("material-symbols-outlined-4", "save-todo");
  const cancelTodo = document.createElement("span");
  cancelTodo.textContent = "cancel";
  cancelTodo.classList.add("material-symbols-outlined-5", "cancel-todo");

  todoContainer.querySelector(".option-container").append(saveTodo, cancelTodo);
  todoContainer.querySelector(".option-container").removeChild(edit);
};

/* Capitalize First Letter */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Default:
document.querySelector(".add-project").click();

export {
  onclickTodoForm,
  onclickDeleteProject,
  onclickDeleteTodo,
  expandTodo,
  onclickEditTodo,
  toggleActiveClass,
  projects,
};
