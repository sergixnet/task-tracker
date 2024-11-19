import taskStore from "../libs/task-store.mjs";
import { printTasks } from "../utils/index.js";

export default (program) => {
  program
    .command('mark-done')
    .description('Mark a task as done')
    .argument('<id>', 'Task id to mark as done')
    .action((id) => {
      console.log(`Task marked as done: ${id}`);

      taskStore.updateTaskStatus(id, 'done');
      printTasks(taskStore.getTasks());

    });
};
