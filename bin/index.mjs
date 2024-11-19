#!/usr/bin/env node

import { program } from 'commander';
import commands from '../src/commands/index.mjs';

import taskStore from '../src/libs/task-store.mjs';

taskStore.initTasks();

program.version('1.0.0').description('Task CLI');

commands.addCmd(program);
commands.update(program);
commands.deleteCmd(program);
commands.markInProgress(program);
commands.markDone(program);
commands.list(program);

program.parse(process.argv);



