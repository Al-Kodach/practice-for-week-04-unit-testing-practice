function isFive(num) {
  if (num === 5) {
    return true;
  }

  return false;
}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw Error ('TypeError: not a number!');
  } else if (number % 2 !== 0) {
    return true;
  }

  return false;
}

function myRange(min, max, step = 1) {
  let arr = [];

  if (min > max) {
    return [];
  }

  for (let i = 0; i <= max; i += step) {
    arr.push(i)
  }

  return arr;
}


module.exports = { isFive, isOdd, myRange };
