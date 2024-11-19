import taskStore from "../libs/task-store.mjs";
import { printTasks } from '../utils/index.js';


export default (program) => {
  program
    .command('mark-in-progress')
    .description('Mark a task as in progress')
    .argument('<id>', 'Task id to mark as in progress')
    .action((id) => {
      console.log(`Task marked as in progress: ${id}`);

      taskStore.updateTaskStatus(id, 'in-progress');
      printTasks(taskStore.getTasks());
    });
};
