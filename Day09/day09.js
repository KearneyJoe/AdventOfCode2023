const fs = require("fs");

const data = fs
  .readFileSync("day09_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day09_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));

function part1(data) {

  let histories = []
  for (let history of data) {
    histories.push(history.split(" "))
  }

  let totals = 0
  for (let history of histories) {
    totals += processHistory(history)
  }

  return totals
}

function processHistory(history) {

  if (new Set(history).size === 1) {
    return history[0]
  }

  let diffs = []
  let lastNum = parseInt(history[history.length - 1])
  for (let i = 0; i < history.length - 1; i++) {
    diffs.push(parseInt(history[i + 1]) - parseInt(history[i]))
  }

  let num = lastNum + processHistory(diffs)

  return num
}

console.log("Part 1: ", part1(data)) // Part 1: 1901217887


function part2(data) {

  let histories = []
  for (let history of data) {
    histories.push(history.split(" "))
  }

  let totals = 0
  for (let history of histories) {
    totals += processHistoryBackwards(history)
  }

  return totals
}

function processHistoryBackwards(history) {

  if (new Set(history).size === 1) {
    return history[0]
  }

  let diffs = []
  let firstNum = parseInt(history[0])
  for (let i = 0; i < history.length - 1; i++) {
    diffs.push(parseInt(history[i + 1]) - parseInt(history[i]))
  }

  let num = firstNum - processHistoryBackwards(diffs)

  return num
}



console.log("Part 2: ", part2(data)) // Part 2: 905
