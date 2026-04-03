import { createInterface } from "readline";
import getOptions from "./getOptions.js";
import createTask from "./createTask.js";
import askQuestion from "./askQuestion.js";
import summary from "./summary.js";

const operations = ["+", "-", "*", "/"];
const tasks = [];

const { level, count } = getOptions();

operations.forEach((op) => {
  for (let i = 0; i < count; i++) tasks.push(createTask(op, level));
});

const rl = createInterface({ input: process.stdin, output: process.stdout });

for (let i = 0; i < tasks.length; i++) {
  await askQuestion(rl, `[${i + 1}/${tasks.length}]`, tasks[i]);
}

rl.close();

summary(tasks);
