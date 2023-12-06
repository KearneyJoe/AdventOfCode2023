const fs = require("fs");

const data = fs
  // .readFileSync("day05_actual.txt", { encoding: "utf-8" })
  .readFileSync("day05_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));

function part1(data) {

  let obj = {}
  let mapName;
  let mapNames = [];
  let seeds = data[0].split(": ")[1].split(" ")
  for (let i = 2; i < data.length; i++) {
    if (data[i - 1] === "") {
      mapName = data[i].split(" ")[0]
      mapNames.push(mapName)
      obj[mapName] = []
    } else if (!data[i].includes("map") && data[i] !== "") {
      let nums = data[i].split(" ")
      let dest = parseInt(nums[0])
      let start = parseInt(nums[1])
      let range = parseInt(nums[2])
      obj[mapName].push({
        'start': start,
        'end': start + range,
        'offset': start - dest
      }
      )
    }
  }

  let locations = null
  for (let seed of seeds) {
    let nextVal = seed;
    for (let map of mapNames) {
      let values = obj[map]
      for (let value of values) {
        if (nextVal >= value['start'] && nextVal < value['end']) {
          nextVal = nextVal - value['offset']
          break;
        }
      }
    }

    if (nextVal < locations || locations === null) {
      locations = nextVal
    }

  }

  return locations
}

console.log("Part 1: ", part1(data)); //Part 1: 389056265


//Part 2 first try  - Brute force approach runs out of memory
function part2(data) {

  let obj = {}
  let mapName;
  let mapNames = [];
  let seeds = data[0].split(": ")[1].split(" ")
  let trueSeeds1 = []
  for (let i = 0; i < seeds.length; i += 2) {
    let start = parseInt(seeds[i])
    let range = parseInt(seeds[i + 1])
    for (let j = start; j < start + range; j++) {
      trueSeeds1.push(j)
    }
  }

  for (let i = 2; i < data.length; i++) {
    if (data[i - 1] === "") {
      mapName = data[i].split(" ")[0]
      mapNames.push(mapName)
      obj[mapName] = []
    } else if (!data[i].includes("map") && data[i] !== "") {
      let nums = data[i].split(" ")
      let dest = parseInt(nums[0])
      let start = parseInt(nums[1])
      let range = parseInt(nums[2])
      obj[mapName].push({
        'start': start,
        'end': start + range,
        'offset': start - dest
      }
      )
    }
  }

  let locations = null
  for (let seed of trueSeeds1) {
    let nextVal = seed;
    for (let map of mapNames) {
      let values = obj[map]
      for (let value of values) {
        if (nextVal >= value['start'] && nextVal < value['end']) {
          nextVal = nextVal - value['offset']
          break;
        }
      }
    }

    if (nextVal < locations || locations === null) {
      locations = nextVal
    }

  }

  return locations
}

console.log("Part 2: ", part2(data)) //Part 2: