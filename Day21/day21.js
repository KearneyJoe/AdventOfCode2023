const fs = require("fs");

const data = fs
  //.readFileSync("day21_actual.txt", { encoding: "utf-8" })
  .readFileSync("day21_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
