import chalk from 'chalk';
import { select } from '@inquirer/prompts';

export default (program) => {
  program.command('select').action(async () => {
    const answer = await select({
      message: 'What package manager do you use?',
      choices: [
        {
          name: 'npm',
          value: 'npm',
          description: 'Node package manager',
        },
        {
          name: 'yarn',
          value: 'yarn',
          description: 'Yarn package manager',
        },
        {
          name: 'pnpm',
          value: 'pnpm',
          description: 'pnpm package manager',
        },
      ],
    });

    console.log(chalk.green(`You selected ${answer}`));
  });
};
