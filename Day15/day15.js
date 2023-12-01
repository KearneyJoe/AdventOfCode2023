const fs = require("fs");

const data = fs
  //.readFileSync("day15_actual.txt", { encoding: "utf-8" })
  .readFileSync("day15_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
