export default (program) => {
  program
    .command('add')
    .description('Add a new task')
    .argument('<description>', 'Task description')
    .action((description) => {
      console.log(`Adding task: ${description}`);
    });
};
