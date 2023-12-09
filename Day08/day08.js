const fs = require("fs");

const data = fs
  .readFileSync("day08_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day08_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));


function part1(data) {
  let instructions = data[0]

  let mapObj = {}
  for (let i = 2; i < data.length; i++) {
    let split = data[i].split(" ")
    let key = split[0]
    let left = split[2].slice(1, 4)
    let right = split[3].slice(0, 3)
    mapObj[key] = { 'left': left, 'right': right }
  }

  let nextKey = 'AAA'
  let counter = 0

  while (nextKey != 'ZZZ') {
    let direction = instructions[counter]
    let obj = mapObj[nextKey]
    if (direction === 'L') {
      nextKey = obj['left']
    } else {
      nextKey = obj['right']
    }

    counter++
    if (counter >= instructions.length) {
      instructions += instructions
    }
  }

  return counter
}

console.log("Part 1: ", part1(data)) //Part 1: 18023


function findLCM(numbers) {
  // Function to calculate the greatest common divisor (GCD)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Function to calculate the least common multiple (LCM)
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // Function to find the LCM of an array of numbers
  const findArrayLCM = (arr) => arr.reduce((acc, num) => lcm(acc, num), 1);

  return findArrayLCM(numbers);
}

function part2(data) {

  let instructions = data[0]
  let startingNodes = [];

  let mapObj = {}
  for (let i = 2; i < data.length; i++) {
    let split = data[i].split(" ")
    let key = split[0]
    if (key[2] === 'A') {
      startingNodes.push(key)
    }
    let left = split[2].slice(1, 4)
    let right = split[3].slice(0, 3)
    mapObj[key] = { 'left': left, 'right': right }
  }

  let distances = [];

  for (let start of startingNodes) {
    let counter = 0
    let nextKey = start
    while (!nextKey.endsWith('Z')) {
      let direction = instructions[counter]
      let obj = mapObj[nextKey]

      if (direction === 'L') {
        nextKey = obj['left']
      } else {
        nextKey = obj['right']
      }

      counter++
      if (counter >= instructions.length) {
        instructions += instructions
      }
    }

    distances.push(counter)

  }

  return findLCM(distances);
}

console.log("Part 2: ", part2(data)) //Part 2: 14449445933179