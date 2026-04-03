export default (operation, level) => {
  const { operand1, operand2 } = getOperands(operation, level);
  const question = `${operand1} ${operation} ${operand2}`;
  const result = eval(question);

  return { question, result };
};

const getOperands = (operation, level) => {
  let operand1, operand2;

  switch (level) {
    case 1:
      operand1 = operand(1);
      operand2 = operand(1);
      break;

    case 2:
      operand1 = operand(1);
      operand2 = operand(2);

      if (Math.random() < 0.5) {
        const tmp = operand1;
        operand1 = operand2;
        operand2 = tmp;
      }
      break;

    case 3:
      operand1 = operand(2);
      operand2 = operand(2);
  }

  if (operation == "/") operand1 *= operand2;

  return { operand1, operand2 };
};

const operand = (digits) => Math.floor(Math.random() * 10 ** digits);
