export default (program) => {
  program
    .command('update')
    .description('Add a new task')
    .argument('<id>', 'Task id')
    .argument('<description>', 'Task description')
    .action((id, description) => {
      console.log(`Updating task: ${id} with description: ${description}`);
    });
};