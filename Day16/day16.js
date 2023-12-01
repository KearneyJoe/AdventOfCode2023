const fs = require("fs");

const data = fs
  //.readFileSync("day16_actual.txt", { encoding: "utf-8" })
  .readFileSync("day16_example.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));
