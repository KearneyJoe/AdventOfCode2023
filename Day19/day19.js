const fs = require("fs");

const data = fs
  //.readFileSync("day19_actual.txt", { encoding: "utf-8" })
  .readFileSync("day19_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
