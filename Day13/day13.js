const fs = require("fs");

const data = fs
  //.readFileSync("day13_actual.txt", { encoding: "utf-8" })
  .readFileSync("day13_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
