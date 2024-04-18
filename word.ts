import inquirer from "inquirer";
import chalk from "chalk";

(async () => {
    // Declare a constant "answers" and assign it to the result of inquirer.prompt function
    const answers: { Sentence: string } = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: "Enter a sentence to count the word"
        }
    ]);

    const words = answers.Sentence.trim().split(" ");

    console.log(words);
    console.log(chalk.yellow(`Your sentence words count is : ${words.length}`));
})();

 