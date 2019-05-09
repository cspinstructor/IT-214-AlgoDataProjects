function checkOddEven(t) {
  // if t divided by 2 remainder is 0
  // then it is an even number
  if (t % 2 == 0) {
    return 'even number';
  } else {
    // if t divided by 2 remainder is not 0,
    // i.e. 1, then it is odd number
    return 'odd number';
  }
}

console.log('Number is: ' + checkOddEven(7));
console.log('Number is: ' + checkOddEven(11));
console.log('Number is: ' + checkOddEven(34));
