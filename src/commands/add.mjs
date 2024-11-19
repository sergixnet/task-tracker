import taskFactory from "../libs/task-factory.mjs";
import taskStore from "../libs/task-store.mjs";
import { printTasks } from '../utils/index.js';


export default (program) => {
  program
    .command('add')
    .description('Add a new task')
    .argument('<description>', 'Task description')
    .action((description) => {
      console.log(`Adding task: ${description}`);

      const task = taskFactory(description);
      taskStore.addTask(task);
      printTasks(taskStore.getTasks());
    });
};
