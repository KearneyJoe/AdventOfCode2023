const fs = require("fs");

const data = fs
  //.readFileSync("day08_actual.txt", { encoding: "utf-8" })
  .readFileSync("day08_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
