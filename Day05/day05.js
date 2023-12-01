const fs = require("fs");

const data = fs
  //.readFileSync("day05_actual.txt", { encoding: "utf-8" })
  .readFileSync("day05_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
