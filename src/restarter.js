"use strict";

const Spawn	= require("child_process").spawn;

console.log("Arguments:", process.argv);

const args = [...process.execArgv, ...process.argv.slice(2)];
console.log(`Start Agent...`, args);
const proc = Spawn(process.execPath, args, { detached: true, stdio: "ignore" });
proc.unref();

console.log("Exit restarter...");

process.exit(0);
