import { input } from '@inquirer/prompts';
import chalk from 'chalk';


export default (program) => {
  program.command('hello').action(async () => {
    const name = await input({
      message: 'What is your name?',
    });

    console.log(chalk.green(`Hey there, ${name}`));
  });
};
