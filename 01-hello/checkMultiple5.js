function checkMultiple5(t) {
  // if t divided by 2 remainder is 0
  // then it is an even number
  if (t % 5 == 0) {
    return 'multiple of 5';
  } else {
    // if t divided by 2 remainder is not 0,
    // i.e. 1, then it is odd number
    return 'not multiple of 5';
  }
}

for (var i = 1; i <= 100; i++) {
  console.log(i + ' is ' + checkMultiple5(i));
}
