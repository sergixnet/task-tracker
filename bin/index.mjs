#!/usr/bin/env node

import { program } from 'commander';
import commands from '../src/commands/index.mjs';

program.version('1.0.0').description('My Node CLI');

commands.hello(program);
commands.select(program);

program.parse(process.argv);



