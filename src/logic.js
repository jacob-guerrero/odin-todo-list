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
    onclickTodoForm();
    addProject(createProject());
    console.log(projects);
  });
})();

const onclickDeleteProject = (e) => {
  const indexDeleteProject = e.target.dataset.closeBtnId;

  removeProject(indexDeleteProject);
  updateProjectIndex(indexDeleteProject);
};

const removeFormIfExist = (e, formContainer) => {
  const idBtn = e.target.dataset.projectBtnId;
  const idForm = formContainer.dataset.todoId;

  if (idBtn !== idForm) {
    formContainer.remove();
  }
};

const onclickTodoForm = () => {
  const btnAddTodoForm = document.querySelectorAll(".add-todo-form");

  btnAddTodoForm.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const formContainer = document.querySelector("[data-todo-id]");

      if (formContainer) {
        removeFormIfExist(e, formContainer);
      }

      if (!document.querySelector("[data-todo-id]")) {
        createTodoForm(e);
        onclickTodoBtn();
      }
    });
  });
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
  if(e.target.textContent === "keyboard_double_arrow_down") {
    e.target.textContent = "keyboard_double_arrow_up";
  } else {
    e.target.textContent = "keyboard_double_arrow_down";
  }
  const hiddenElements = e.target.parentElement.querySelectorAll(".hide-content");
  hiddenElements.forEach(elem => {
    elem.classList.toggle("active");
  });
}
// Default:
document.querySelector(".add-project").click();

export { onclickDeleteProject, onclickDeleteTodo, expandTodo, projects };
