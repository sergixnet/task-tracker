import taskStore from "../libs/task-store.mjs";
import { printTasks } from "../utils/index.js";

export default (program) => {
  program
    .command('delete')
    .description('Delete a task')
    .argument('<id>', 'Task id to delete')
    .action((id) => {
      console.log(`Deleting task: ${id}`);
      taskStore.deleteTask(id);

      printTasks(taskStore.getTasks());
    });
};
