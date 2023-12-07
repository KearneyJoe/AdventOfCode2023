const fs = require("fs");

const data = fs
  .readFileSync("day03_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day03_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));

function searchAdjacent(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Define all possible directions (including diagonals)
  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1],   // Right
    [-1, -1], // Diagonal Up-Left
    [-1, 1],  // Diagonal Up-Right
    [1, -1],  // Diagonal Down-Left
    [1, 1]    // Diagonal Down-Right
  ];

  for (const direction of directions) {
    const newRow = row + direction[0];
    const newCol = col + direction[1];

    // Check if the new position is within the grid bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      const adjacentValue = grid[newRow][newCol];

      // Check if the adjacent value is not a number and not a "."
      if (isNaN(adjacentValue) && adjacentValue !== '.') {
        return true; // Found a non-number, non-dot value
      }
    }
  }
  return false; // No non-number, non-dot value found in adjacent positions
}

function part1(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    let num = ''
    let touchingSymbol = false;
    for (let j = 0; j < data[i].length; j++) {
      let char = data[i][j]
      if (isNaN(char)) {
        if (touchingSymbol) {
          total += parseInt(num)
        }
        //reset values
        touchingSymbol = false
        num = ''
      } else if (!isNaN(char) && j === data[i].length - 1) {
        num += char.toString();
        if (touchingSymbol) {
          total += parseInt(num)
          //reset values
          touchingSymbol = false
          num = ''
        }
      } else {
        let search = searchAdjacent(data, i, j)
        num += char.toString();
        if (search && j === data[i].length - 1) {
          total += parseInt(num)
          //reset values
          touchingSymbol = false
          num = ''
        } else if (search) {
          touchingSymbol = true
        }
      }
    }
  }
  return total
}

console.log("Part 1: ", part1(data)) //Part 1: 520135


function searchAdjacentV2(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Define all possible directions (including diagonals)
  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1],   // Right
    [-1, -1], // Diagonal Up-Left
    [-1, 1],  // Diagonal Up-Right
    [1, -1],  // Diagonal Down-Left
    [1, 1]    // Diagonal Down-Right
  ];

  for (const direction of directions) {
    const newRow = row + direction[0];
    const newCol = col + direction[1];

    // Check if the new position is within the grid bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      const adjacentValue = grid[newRow][newCol];

      // Check if the adjacent value is not a number and not a "."
      if (adjacentValue === "*") {
        return `row-${newRow}-col-${newCol}`; // Found a non-number, non-dot value
      }
    }
  }
  return false; // No non-number, non-dot value found in adjacent positions
}

function part2(data) {
  let total = 0;
  let obj = {}
  for (let i = 0; i < data.length; i++) {
    let num = ''
    let objectKey = ''
    for (let j = 0; j < data[i].length; j++) {
      let char = data[i][j]
      if (isNaN(char)) {
        if (objectKey) {
          //check obj values or add to object key
          if (!obj[objectKey]) {
            obj[objectKey] = [parseInt(num)]
          } else {
            obj[objectKey].push(parseInt(num))
          }
        }
        //reset values
        objectKey = ''
        num = ''
      } else if (!isNaN(char) && j === data[i].length - 1) {
        num += char.toString();
        if (objectKey) {
          //check obj values or add to object key
          if (!obj[objectKey]) {
            obj[objectKey] = [parseInt(num)]
          } else {
            obj[objectKey].push(parseInt(num))
          }
        }
        //reset values
        objectKey = ''
        num = ''
      } else {
        let search = searchAdjacentV2(data, i, j)
        num += char.toString();
        if (search) {
          objectKey = search
        }
      }
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    // Check if the value is an array with a length of 2
    if (value.length === 2) {
      // Multiply the two numbers together
      const product = value[0] * value[1];
      // Add the product to the total sum
      total += product;
    }
  }
  return total
}

console.log("Part 2: ", part2(data)); //Part 2: 72514855