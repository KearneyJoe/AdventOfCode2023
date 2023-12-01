const fs = require("fs");

const data = fs
  //.readFileSync("day04_actual.txt", { encoding: "utf-8" })
  .readFileSync("day04_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
