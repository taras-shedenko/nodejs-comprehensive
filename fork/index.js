import { fork } from "child_process";

if (process.argv[2] === "child") {
  console.log("child process");
  let num = 1,
    res = 0;
  numloop: while (res < 1000) {
    num++;
    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; ++i) if (!(num % i)) continue numloop;
    process.send(num);
    res++;
  }
  process.exit();
} else {
  console.log("parent process");
  const ch1 = fork(process.argv[1], ["child"]);
  ch1.on("message", (data) => console.log(`Child1: ${data}`));
  const ch2 = fork(process.argv[1], ["child"]);
  ch2.on("message", (data) => console.log(`Child2: ${data}`));
  const ch3 = fork(process.argv[1], ["child"]);
  ch3.on("message", (data) => console.log(`Child3: ${data}`));
}
