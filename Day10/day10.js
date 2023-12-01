const fs = require("fs");

const data = fs
  //.readFileSync("day10_actual.txt", { encoding: "utf-8" })
  .readFileSync("day10_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
