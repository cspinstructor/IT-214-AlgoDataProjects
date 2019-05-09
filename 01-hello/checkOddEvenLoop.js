function checkOddEven(t) {
  // if t divided by 2 remainder is 0
  // then it is an even number
  if (t % 2 == 0) {
    return 'even';
  } else {
    // if t divided by 2 remainder is not 0,
    // i.e. 1, then it is odd number
    return 'odd';
  }
}

for (var i = 1; i <= 100; i++) {
  console.log(i + ' is ' + checkOddEven(i));
}
