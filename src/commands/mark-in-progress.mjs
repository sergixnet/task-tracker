export default (program) => {
  program
    .command('mark-in-progress')
    .description('Mark a task as in progress')
    .argument('<id>', 'Task id to mark as in progress')
    .action((id) => {
      console.log(`Task marked as in progress: ${id}`);
    });
};
