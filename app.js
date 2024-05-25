#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n \t \t", chalk.underline.italic.bold.bgBlue(" Welcome to My Quiz! ", "\n"));
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        message: "1. What is the capital of India?",
        choices: ["Mumbai", "Delhi", "Kolkata", "Chennai"]
    },
    {
        type: "list",
        name: "question2",
        message: "2. What is the capital of USA?",
        choices: ["New York", "Washington", "Los Angeles", "Chicago"]
    },
    {
        type: "list",
        name: "question3",
        message: "3. What is the capital of Canada?",
        choices: ["Ottawa", "Toronto", "Vancouver", "Montreal"]
    },
    {
        type: "list",
        name: "question4",
        message: "4. What is the capital of Australia?",
        choices: ["Canberra", "Sydney", "Melbourne", "Brisbane"]
    },
    {
        type: "list",
        name: "question5",
        message: "5. What is the capital of Japan?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Nagoya"]
    }
]);
if (userInput.question1 === "Delhi")
    marks += 10;
if (userInput.question2 === "Washington")
    marks += 10;
if (userInput.question3 === "Ottawa")
    marks += 10;
if (userInput.question4 === "Sydney")
    marks += 10;
if (userInput.question5 === "Tokyo")
    marks += 10;
console.log("\n Correct Answers Are [ Delhi , Washington , Ottawa , Sydney , Tokyo ]");
if (marks > 30) {
    console.log(chalk.greenBright.bold.underline.italic("\n Congratulations! You have passed the Quiz."));
    console.log(`Your Total Marks Are: ${marks}`);
}
else {
    console.log(chalk.greenBright.bold.underline.italic("\n Unfortunately! You Failed!"));
    console.log(`Your Total Marks Are: ${marks}`);
}
