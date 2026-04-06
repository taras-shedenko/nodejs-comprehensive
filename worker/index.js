import { Worker } from "worker_threads";

const worker = new Worker("./worker.js", { workerData: { start: 1 } });

worker.on("message", (data) => console.log(`worker: ${data}`));
