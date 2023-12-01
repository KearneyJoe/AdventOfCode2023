const fs = require("fs");

const data = fs
  //.readFileSync("day17_actual.txt", { encoding: "utf-8" })
  .readFileSync("day17_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
