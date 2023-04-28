const task = (title, description, dueDate, priority) => {
  const sayTask = () => {
    console.log({ title, description, dueDate, priority });
  };
  return { title, description, dueDate, priority, sayTask };
};

const project = [];

const addTask = (project, ...task) => {
  return project.push(...task);
};

const firstTask = task("run", "go to the park", "1/1/11", "high");
const secondTask = task("jump", "go to the city", "1/2/11", "low");
const thirdTask = task("walk", "go to the mall", "4/1/31", "medium");

addTask(project, firstTask, secondTask, thirdTask);

console.log(project);
