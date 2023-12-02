const fs = require("fs");

const data = fs
  .readFileSync("day02_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day02_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));

function removeCommasAndSemicolons(inputString) {
  // Use regular expression to replace commas and semicolons with an empty string
  var resultString = inputString.replace(/[,;]/g, '');

  return resultString;
}

function part1(data) {
  const gameLimit = { red: 12, green: 13, blue: 14 }
  let gameTotal = 0
  for (let i = 0; i < data.length; i++) {
    let gameNum = i + 1
    let game = removeCommasAndSemicolons(data[i].split(": ")[1])
    let gameObj = objBuilder(game)
    if (gameObj["red"] <= gameLimit["red"] &&
      gameObj["green"] <= gameLimit["green"] &&
      gameObj["blue"] <= gameLimit["blue"]) {
      gameTotal += gameNum
    }
  }

  return gameTotal
}

function objBuilder(gameValues) {
  gameValues = gameValues.split(" ")
  let obj = {}
  for (let i = 0; i < gameValues.length - 1; i += 2) {
    let color = gameValues[i + 1]
    if (!obj[color]) {
      obj[color] = parseInt(gameValues[i])
    } else {
      if (parseInt(obj[color]) < parseInt(gameValues[i])) {
        obj[color] = parseInt(gameValues[i])
      }
    }
  }

  return obj
}

console.log("Part 1: ", part1(data)) //Part 1: 2447



function part2(data) {
  let gameTotal = 0
  for (let i = 0; i < data.length; i++) {
    let game = removeCommasAndSemicolons(data[i].split(": ")[1])
    let gameObj = objBuilder(game)
    gameTotal += gameObj["red"] * gameObj["blue"] * gameObj["green"]
  }

  return gameTotal
}

console.log("Part 2: ", part2(data)) //Part 2: 56322
