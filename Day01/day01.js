const fs = require("fs");

const data = fs
  //.readFileSync("day01_actual.txt", { encoding: "utf-8" })
  .readFileSync("day01_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
