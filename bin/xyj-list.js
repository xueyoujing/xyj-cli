#!/usr/bin/env node

const Handlebars = require("handlebars");
const fs = require('fs');
const program = require('commander');
const chalk = require('chalk');

program
    .usage('<file-name>');
program.parse(process.argv);

if (program.args.length < 1) return program.help();

let fileName = program.args[0];

const source = fs.readFileSync(`${__dirname}/../template/list.hbs`).toString();
const template = Handlebars.compile(source);
const context = {
    items: [
        {
            label: 'ID',
            prop: 'id'
        },
        {
            label: '名称',
            prop: 'name'
        }
    ]
};
const html = template(context);

fs.writeFile(`${fileName}.vue`, html, err => {
    if (err) console.log(err);
    console.log(chalk.green('Add list page successfully!\n'));
});


