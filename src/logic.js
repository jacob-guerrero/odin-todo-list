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

const addTask = (project, ...task) => {
  project.push(...task);
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
    addProject(createProject());
    onclickTodoForm();
    console.log(projects);
  });
})();

const onclickTodoForm = () => {
  const btnAddTodoForm = document.querySelector(".add-todo-form");

  btnAddTodoForm.addEventListener("click", (e) => {
    e.preventDefault();

    createTodoForm();
    onclickTodoBtn();
  });
};

const onclickTodoBtn = () => {
  const btnAddTodo = document.querySelector(".add-todo");
  
  btnAddTodo.addEventListener("click", (e) => {
    e.preventDefault();

    createTodoElement();
    console.log(projects);
  });
};

/* const firstTask = createTodo("run", "go to the park", "1/1/11", "high");
const secondTask = createTodo("jump", "go to the city", "1/2/11", "low");
const thirdTask = createTodo("walk", "go to the mall", "4/1/31", "medium");
addTask(project, firstTask, secondTask, thirdTask);

console.log(project);
project[0].sayTask();

const project1 = createProject();
const firstTask1 = createTodo("dance", "go to the park", "1/1/11", "high");
const secondTask1 = createTodo("sew", "go to the city", "1/2/11", "low");
const thirdTask1 = createTodo("sleep", "go to the mall", "4/1/31", "medium");
addTask(project1, firstTask1, secondTask1, thirdTask1);

console.log(project1); */

// Default:
document.querySelector(".add-project").click();

export { createTodo, addTask, createProject, addProject, projects };
