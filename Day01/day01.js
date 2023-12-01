const fs = require("fs");

const data = fs
  .readFileSync("day01_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day01_example.txt", { encoding: "utf-8" })
  .split("\n")

function parseNums(text) {
  return text.replace(/[^0-9]/g, '');
}
function counter(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    let nums = parseNums(data[i])
    if (nums.length === 0) {
      total += 0
    } else if (nums.length === 1) {
      total += parseInt(nums[0].concat(nums[0]))
    } else {
      total += parseInt(nums[0].concat(nums[nums.length - 1]))
    }
  }
  return total
}
let total = counter(data)
console.log("Part 1: ", total) //Part 1: 55712

//helper function to test for number
function isNumber(s) {
  return /\d/.test(s);
}

function replaceNumbers(text) {
  // Create an object to map written-out numbers to their corresponding digits
  const numberMap = {
    one: "one1one",
    two: "two2two",
    three: "three3three",
    four: "four4four",
    five: "five5five",
    six: "six6six",
    seven: "seven7seven",
    eight: "eight8eight",
    nine: "nine9nine",
  };

  let updatedString = text;
  Object.keys(numberMap).forEach(key => {
    updatedString = updatedString.replace(new RegExp(`${key}`, 'g'), match => numberMap[key]);
  });

  let finalString = ''
  for (let char of updatedString) {
    if (isNumber(char)) {
      finalString += char
    }
  }

  return finalString
}

let nums = []
for (let i = 0; i < data.length; i++) {
  let parsed = replaceNumbers(data[i])
  nums.push(parsed)
}

console.log("Part 2: ", counter(nums)) //Part 2: 55413