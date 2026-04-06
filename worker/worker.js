import { parentPort, workerData } from "worker_threads";

let num = workerData.start,
  res = 0;

numloop: while (res < 1000) {
  num++;
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; ++i) if (!(num % i)) continue numloop;
  parentPort.postMessage(num);
  res++;
}

process.exit();
