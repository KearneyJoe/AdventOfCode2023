const fs = require("fs");

const data = fs
  //.readFileSync("day03_actual.txt", { encoding: "utf-8" })
  .readFileSync("day03_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
