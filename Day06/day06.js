const fs = require("fs");

const data = fs
  //.readFileSync("day06_actual.txt", { encoding: "utf-8" })
  .readFileSync("day06_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
