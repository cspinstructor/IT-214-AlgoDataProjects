function checkDivision(num) {
  if (num % 5 == 0) {
    return 'divisible by 5';
  } else {
    return 'not divisible by 5';
  }
}

for (var i = 1; i <= 20; i++) {
  console.log(i + ' is ' + checkDivision(i));
}
