const fs = require("fs");

const data = fs
  //.readFileSync("day09_actual.txt", { encoding: "utf-8" })
  .readFileSync("day09_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
