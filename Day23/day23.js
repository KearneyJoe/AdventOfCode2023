const fs = require("fs");

const data = fs
  //.readFileSync("day23_actual.txt", { encoding: "utf-8" })
  .readFileSync("day23_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
