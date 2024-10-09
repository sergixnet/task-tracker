import { default as addCmd } from './add.mjs';
import { default as deleteCmd } from './delete.mjs';
import hello from './hello.mjs';
import select from './select.mjs';
import update from './update.mjs';
import { default as markInProgress } from './mark-in-progress.mjs';
import markDone from './mark-done.mjs';
import list from './list.mjs';

export default {
  hello,
  select,
  addCmd,
  update,
  deleteCmd,
  markInProgress,
  markDone,
  list,
};
