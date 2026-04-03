import chalk from "chalk";

export default async (rl, prefix, task) => {
  task.answer = parseInt(await promisedQuestion(rl, `${prefix}: ${task.question}: `));
  if (task.answer == task.result) console.log(chalk.bold.green("Correct!"));
  else console.log(chalk.bold.red("Wrong!"));
};

const promisedQuestion = (rl, question) =>
  new Promise((resolve) => rl.question(question, resolve));
