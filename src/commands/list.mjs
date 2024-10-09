export default (program) => {
  program
    .command('list')
    .description('View the list of tasks')
    .argument('[filterBy]', 'List all done tasks filtered')
    .action((filterBy) => {
      console.log({ filterBy });

      switch (filterBy) {
        case 'done':
          console.log('Done tasks');
          break;
        case 'todo':
          console.log('To do tasks');
          break;
        case 'in-progress':
          console.log('In progress tasks');
          break;
        default:
          console.log('All tasks');
      }
    });
};
