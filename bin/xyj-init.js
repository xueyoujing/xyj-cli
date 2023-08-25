#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const download = require('download-git-repo');

program
    .usage('<project-name>');
program.parse(process.argv);

if (program.args.length < 1) return program.help();

let projectName = program.args[0];
// 校验参数
if (!projectName) {
    console.log(chalk.red('\n Project should not be empty! \n '));
    return
}

console.log(chalk.white('\n Start generating... \n'));
// 加载图标
const spinner = ora("Downloading...");
spinner.start();

// 下载
download (
    'xueyoujing/vue_template',
    projectName,
    err => {
        if (err) {
            spinner.fail();
            console.log(chalk.red(`Generation failed. ${err}`));
            return
        }
        // 结束加载图标
        spinner.succeed();
        console.log(chalk.green('\n Generation completed!'));
        console.log('\n To get started');
        console.log(`\n cd ${projectName} \n`)
    }
);
