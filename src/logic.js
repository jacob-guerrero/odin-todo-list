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
  // Organize this code:
  // Then add function to manage project index
  
  const indexDeleteProject = e.target.dataset.closeBtnId;
  projects.splice(indexDeleteProject, 1);
  console.log(projects);

  document.querySelector(`[data-project-id = "${indexDeleteProject}"] `).remove();
};

const onclickTodoForm = () => {
  const btnAddTodoForm = document.querySelectorAll(".add-todo-form");

  btnAddTodoForm.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

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

// Default:
document.querySelector(".add-project").click();

export {
  createTodo,
  addTodo,
  createProject,
  addProject,
  onclickDeleteProject,
  projects,
};
