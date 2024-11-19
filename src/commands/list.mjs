import taskStore from '../libs/task-store.mjs';
import { printTasks } from '../utils/index.js';

export default (program) => {
  program
    .command('list')
    .description('View the list of tasks')
    .argument('[filterBy]', 'List all tasks filtered')
    .action((filterBy) => {
      let tasks;
      switch (filterBy) {
        case 'done':
          console.log('Done tasks');
          tasks = taskStore.getTasksByStatus('done');
          break;
        case 'todo':
          console.log('To do tasks');
          tasks = taskStore.getTasksByStatus('todo');
          break;
        case 'in-progress':
          console.log('In progress tasks');
          tasks = taskStore.getTasksByStatus('in-progress');
          break;
        default:
          tasks = taskStore.getTasks();
      }
      printTasks(tasks);
    });
};
