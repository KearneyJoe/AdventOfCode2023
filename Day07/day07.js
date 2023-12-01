const fs = require("fs");

const data = fs
  //.readFileSync("day07_actual.txt", { encoding: "utf-8" })
  .readFileSync("day07_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
