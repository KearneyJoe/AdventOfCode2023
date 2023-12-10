const fs = require("fs");

const data = fs
  //.readFileSync("day10_actual.txt", { encoding: "utf-8" })
  .readFileSync("day10_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));

// console.log(data)


function part1(data) {
  data = cleanData(data)
  let start = findStart(data)

}

function cleanData(data) {
  let cleaned = []
  for (let row of data) {
    cleaned.push(row.split(''))
  }
  return cleaned
}

function findStart(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === 'S') {
        return [i, j]
      }
    }
  }
  return null
}

function journey(start, data) {

  return null
}

console.log("Part 1: ", part1(data)) //Part 1: 