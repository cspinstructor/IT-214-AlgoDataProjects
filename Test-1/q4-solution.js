var myarray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

function checkDivide5(num) {
  if (num % 5 === 0) {
    return num + ' is divisible by 5';
  }
}

for (var i = 0; i < myarray.length; i++) {
  var tmp = checkDivide5(myarray[i]);
  if (tmp) {
    console.log(tmp);
  }
}
