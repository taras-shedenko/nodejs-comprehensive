import { emojify } from "node-emoji";

export default (tasks) => {
  const correctCount = tasks.filter(
    ({ answer, result }) => answer == result,
  ).length;

  const ratio = correctCount / tasks.length;

  const msg = `you have correctly solved ${correctCount} out of ${tasks.length} tasks`;

  if (ratio == 1) console.log(emojify(`:trophy: Congratulations, ${msg}`));
  else if (ratio >= 0.5) console.log(emojify(`:sunglasses: Very good, ${msg}`));
  else if (ratio >= 0.1) console.log(emojify(`:cry: ${msg}, should be better`));
  else console.log(emojify(`:skull_and_crossbones:  ${msg}`));
};
