const fs = require("fs");

const data = fs
  //.readFileSync("day02_actual.txt", { encoding: "utf-8" })
  .readFileSync("day02_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
