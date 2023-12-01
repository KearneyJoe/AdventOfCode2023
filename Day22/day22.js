const fs = require("fs");

const data = fs
  //.readFileSync("day22_actual.txt", { encoding: "utf-8" })
  .readFileSync("day22_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
