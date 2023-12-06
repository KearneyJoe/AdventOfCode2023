const fs = require("fs");

const data = fs
  .readFileSync("day06_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day06_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));

function raceHelper(time, dist) {

  let totalWins = 0
  for (let holdTime = 1; holdTime < time; holdTime++) {
    let speed = holdTime
    let remainingTime = time - holdTime
    let distTraveled = speed * remainingTime
    if (distTraveled > dist) {
      totalWins++
    }

  }

  return totalWins
}

function part1(data) {
  let times = data[0].split(": ")[1].split(" ").filter(x => x !== "").map(y => parseInt(y))
  let dist = data[1].split(": ")[1].split(" ").filter(x => x !== "").map(y => parseInt(y))
  let total = 1
  for (let i = 0; i < times.length; i++) {
    total *= raceHelper(times[i], dist[i])
  }
  return total
}

console.log("Part 1: ", part1(data)) //Part1: 503424


function part2(data) {
  let times = parseInt(data[0].split(": ")[1].split(" ").filter(x => x !== "").join(""))
  let dist = parseInt(data[1].split(": ")[1].split(" ").filter(x => x !== "").join(""))
  return raceHelper(times, dist)
}

function raceHelper(time, dist) {
  let totalWins = 0
  for (let holdTime = 1; holdTime < time; holdTime++) {
    let speed = holdTime
    let remainingTime = time - holdTime
    let distTraveled = speed * remainingTime
    if (distTraveled > dist) {
      totalWins++
    }
  }
  return totalWins
}

console.log("Part 2: ", part2(data)) //Part2: 32607562