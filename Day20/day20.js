const fs = require("fs");

const data = fs
  //.readFileSync("day20_actual.txt", { encoding: "utf-8" })
  .readFileSync("day20_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
