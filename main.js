#! /usr/bin/env node
//importing inquirer and chalk packge
import inquirer from "inquirer";
import chalk from "chalk";
//welcome mesg
console.log(chalk.bold.yellowBright("\n\t\twith Real iq,welcome to word counter\n\t"));
console.log("=".repeat(60));
// user to enter a sentence
let answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "enter a Sentence:",
    }]);
//triming the sentence and splitting it into word based on "space"
let words = answer.sentence.trim().split(" ");
//analiyesis of  user input sentence
console.log("=".repeat(60));
console.log(chalk.bold(".sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
