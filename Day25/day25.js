const fs = require("fs");

const data = fs
  //.readFileSync("day25_actual.txt", { encoding: "utf-8" })
  .readFileSync("day25_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
