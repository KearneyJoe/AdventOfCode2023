const fs = require("fs");

const data = fs
  .readFileSync("day07_actual.txt", { encoding: "utf-8" })
  // .readFileSync("day07_example.txt", { encoding: "utf-8" })
  .split("\n")
// .map((x) => parseInt(x));

// const cardStrength = {
//   'A': 13,
//   'K': 12,
//   'Q': 11,
//   'J': 10,
//   'T': 9,
//   '9': 8,
//   '8': 7,
//   '7': 6,
//   '6': 5,
//   '5': 4,
//   '4': 3,
//   '3': 2,
//   '2': 1
// }

const cardStrengthLetters = {
  'A': 'A',
  'K': 'B',
  'Q': 'C',
  'J': 'D',
  'T': 'E',
  '9': 'F',
  '8': 'G',
  '7': 'H',
  '6': 'I',
  '5': 'J',
  '4': 'K',
  '3': 'L',
  '2': 'M'
}

const handStrength = {
  'five-of-a-kind': 7,
  'four-of-a-kind': 6,
  'full-house': 5,
  'three-of-a-kind': 4,
  'two-pair': 3,
  'one-pair': 2,
  'high-card': 1
}

function parseCardHand(hand) {
  let handObj = {}
  let replacedHand = ''
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i]
    if (!handObj[card]) {
      handObj[card] = 1
    } else {
      handObj[card] += 1
    }
    replacedHand += cardStrengthLetters[card]
  }

  let handLabel;
  let values = Object.values(handObj)
  if (values.indexOf(5) != -1) {
    handLabel = 'five-of-a-kind'
  } else if (values.indexOf(4) != -1) {
    handLabel = 'four-of-a-kind'
  } else if (values.indexOf(3) != -1 && values.indexOf(2) != -1) {
    handLabel = 'full-house'
  } else if (values.indexOf(3) != -1) {
    handLabel = 'three-of-a-kind'
  } else {
    let pairCounter = 0
    for (let j = 0; j < values.length; j++) {
      if (values[j] === 2) {
        pairCounter += 1
      }
    }
    switch (pairCounter) {
      case 2:
        handLabel = 'two-pair'
        break;
      case 1:
        handLabel = 'one-pair'
        break;
      default:
        handLabel = 'high-card'
        break;
    }
  }
  return { 'hand': hand, 'handLabel': handLabel, 'handLetters': replacedHand }
}


function sortByKey(data, key) {
  return Object.fromEntries(
    Object.entries(data).sort((a, b) => a[1][key].localeCompare(b[1][key]))
  );
}

function part1(data) {
  let hands = {}
  for (let i = 0; i < data.length; i++) {
    let hand = data[i].split(" ")[0]
    let bet = data[i].split(" ")[1]
    let parsedHand = parseCardHand(hand)
    hands[hand] = { ...parsedHand }
    hands[hand]['bet'] = parseInt(bet)
  }

  let sorted = []
  for (let hand of Object.keys(hands)) {
    sorted.push([hand, hands[hand]['handLetters'], hands[hand]['handLabel'], hands[hand]['bet']])
  }

  sorted.sort((a, b) => a[1].localeCompare(b[1]));
  let rank = sorted.length;
  let betTotal = 0;
  //loopthrough
  for (let handType of Object.keys(handStrength)) {
    for (let hand of sorted) {
      if (hand[2] === handType) {
        betTotal += hand[3] * rank
        rank--
      }
    }
  }
  return betTotal
}

console.log("Part 1: ", part1(data)); //Part 1: 251106089

const cardStrengthLettersV2 = {
  'A': 'A',
  'K': 'B',
  'Q': 'C',
  'T': 'E',
  '9': 'F',
  '8': 'G',
  '7': 'H',
  '6': 'I',
  '5': 'J',
  '4': 'K',
  '3': 'L',
  '2': 'M',
  'J': 'Z',
}

function parseCardHandV2(hand) {
  let handObj = {}
  let replacedHand = ''
  let jCounter = 0;
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i]
    if (card === 'J') {
      jCounter++;
    } else {
      if (!handObj[card]) {
        handObj[card] = 1
      } else {
        handObj[card] += 1
      }
    }
    replacedHand += cardStrengthLettersV2[card]
  }

  let handLabel;
  let values = Object.values(handObj)
  if (values.indexOf(5) != -1) {
    handLabel = 'five-of-a-kind'
  } else if (values.indexOf(4) != -1) {
    handLabel = 'four-of-a-kind'
  } else if (values.indexOf(3) != -1 && values.indexOf(2) != -1) {
    handLabel = 'full-house'
  } else if (values.indexOf(3) != -1) {
    handLabel = 'three-of-a-kind'
  } else {
    let pairCounter = 0
    for (let j = 0; j < values.length; j++) {
      if (values[j] === 2) {
        pairCounter += 1
      }
    }
    switch (pairCounter) {
      case 2:
        handLabel = 'two-pair'
        break;
      case 1:
        handLabel = 'one-pair'
        break;
      default:
        handLabel = 'high-card'
        break;
    }
  }

  if (jCounter === 1) {
    if (handLabel === 'high-card') {
      handLabel = 'one-pair'
    } else if (handLabel === 'one-pair') {
      handLabel = 'three-of-a-kind'
    } else if (handLabel === 'two-pair') {
      handLabel = 'full-house'
    } else if (handLabel === 'three-of-a-kind') {
      handLabel = 'four-of-a-kind'
    } else if (handLabel === 'four-of-a-kind') {
      handLabel = 'five-of-a-kind'
    }
  } else if (jCounter === 2) {
    if (handLabel === 'high-card') {
      handLabel = 'three-of-a-kind'
    } else if (handLabel === 'one-pair') {
      handLabel = 'four-of-a-kind'
    } else if (handLabel === 'three-of-a-kind') {
      handLabel = 'five-of-a-kind'
    }
  } else if (jCounter === 3) {
    if (handLabel === 'high-card') {
      handLabel = 'four-of-a-kind'
    } else if (handLabel === 'one-pair') {
      handLabel = 'five-of-a-kind'
    }
  } else if (jCounter === 4) {
    if (handLabel === 'high-card') {
      handLabel = 'five-of-a-kind'
    }
  } else if (jCounter === 5) {
    handLabel = 'five-of-a-kind'
  }

  return { 'hand': hand, 'handLabel': handLabel, 'handLetters': replacedHand }
}

function part2(data) {
  let hands = {}
  for (let i = 0; i < data.length; i++) {
    let hand = data[i].split(" ")[0]
    let bet = data[i].split(" ")[1]
    let parsedHand = parseCardHandV2(hand)
    hands[hand] = { ...parsedHand }
    hands[hand]['bet'] = parseInt(bet)
  }

  let sorted = []
  for (let hand of Object.keys(hands)) {
    sorted.push([hand, hands[hand]['handLetters'], hands[hand]['handLabel'], hands[hand]['bet']])
  }

  sorted.sort((a, b) => a[1].localeCompare(b[1]));
  let rank = sorted.length;
  let betTotal = 0;

  for (let handType of Object.keys(handStrength)) {
    for (let hand of sorted) {
      if (hand[2] === handType) {
        betTotal += hand[3] * rank
        rank--
      }
    }
  }
  return betTotal
}

console.log("Part 2: ", part2(data)); //Part 2: 249620106