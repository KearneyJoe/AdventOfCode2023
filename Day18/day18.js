const fs = require("fs");

const data = fs
  //.readFileSync("day18_actual.txt", { encoding: "utf-8" })
  .readFileSync("day18_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
