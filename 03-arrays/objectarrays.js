var studentArrays = [
  {
    name: 'adrian',
    age: 16,
    ic: 123345
  },
  {
    name: 'betty',
    age: 17,
    ic: 347764
  },
  {
    name: 'cathy',
    age: 18,
    ic: 887734
  }
];

for (var i = 0; i < studentArrays.length; i++) {
  console.log('student ' + (i + 1));
  console.log('name: ' + studentArrays[i].name);
  console.log('age: ' + studentArrays[i].age);
  console.log('ic: ' + studentArrays[i].ic);
  console.log('--------------------');
}

console.log(studentArrays);
