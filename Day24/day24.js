const fs = require("fs");

const data = fs
  //.readFileSync("day24_actual.txt", { encoding: "utf-8" })
  .readFileSync("day24_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
