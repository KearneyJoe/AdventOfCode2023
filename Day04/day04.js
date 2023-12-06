const { match } = require("assert");
const fs = require("fs");

const data = fs
  .readFileSync("day04_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day04_example.txt", { encoding: "utf-8" })
  .split("\n")

function part1(data) {

  let total = 0

  for (let i = 0; i < data.length; i++) {
    let matchCount = 0

    let firstSplit = data[i].split(": ")
    let secondSplit = firstSplit[1].split(" | ")
    let winningNums = secondSplit[0].split(" ").filter(x => parseInt(x)).map(x => parseInt(x))
    let elfNums = secondSplit[1].split(" ").filter(x => parseInt(x)).map(x => parseInt(x))
    // console.log(winningNums)
    // console.log(elfNums)

    for (let elf of elfNums) {
      if (winningNums.includes(elf)) {
        matchCount += 1
      }
    }

    if (matchCount) {
      total += 2 ** (matchCount - 1)
    }
  }

  return total
}

console.log("Part 1: ", part1(data)) //Part 1: 21138


function part2(data) {

  let obj = {}
  for (let i = 1; i <= data.length; i++) {
    let firstSplit = data[i - 1].split(": ")
    obj[i] = 1
  }

  for (let i = 1; i <= data.length; i++) {
    let matchCount = 0

    let firstSplit = data[i - 1].split(": ")
    let secondSplit = firstSplit[1].split(" | ")
    let winningNums = secondSplit[0].split(" ").filter(x => parseInt(x)).map(x => parseInt(x))
    let elfNums = secondSplit[1].split(" ").filter(x => parseInt(x)).map(x => parseInt(x))

    // console.log(winningNums)
    // console.log(elfNums)

    for (let elf of elfNums) {
      if (winningNums.includes(elf)) {
        matchCount += 1
      }
    }

    if (matchCount) {
      let power = obj[i]
      for (let j = 1; j <= matchCount; j++) {
        obj[i + j] += power
      }
    }
  }

  return Object.values(obj).reduce((acc, currentVal) => acc + currentVal, 0)
}

console.log("Part 2: ", part2(data)) //Part 2: 7185540