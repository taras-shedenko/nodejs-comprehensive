import { program } from "commander";

export default (levelDefault = 1, countDefault = 2) => {
  program
    .name("Math Trainer")
    .version("1.0.0")
    .option(
      "-l --level <number>",
      "Difficulty level of tasks (1-3)",
      (val) => parseInt(val, 10),
      levelDefault,
    )
    .option(
      "-c --count <number>",
      "Number of tasks",
      (val) => parseInt(val, 10),
      countDefault,
    )
    .parse();

  const { level, count } = program.opts();
console.log(level, count)
  return { level, count };
};
