const fs = require("fs");

const data = fs
  //.readFileSync("day12_actual.txt", { encoding: "utf-8" })
  .readFileSync("day12_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
