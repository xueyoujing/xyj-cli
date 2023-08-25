#!/usr/bin/env node
const { program } = require('commander');

program
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('add', 'generate a create page')
    .command('list', 'generate a list page')
    .command('init', 'generate a new project from a template');

program.parse(process.argv);
