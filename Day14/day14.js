const fs = require("fs");

const data = fs
  //.readFileSync("day14_actual.txt", { encoding: "utf-8" })
  .readFileSync("day14_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
