const fs = require("fs");

const data = fs
  //.readFileSync("day11_actual.txt", { encoding: "utf-8" })
  .readFileSync("day11_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
