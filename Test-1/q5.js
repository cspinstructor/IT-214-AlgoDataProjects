var employee = [
  {
    name: 'Peter',
    age: 24,
    ic: 950215385486
  },
  {
    name: 'Mary',
    age: 29,
    ic: 901005087568
  },
  {
    name: 'James',
    age: 31,
    ic: 880506386553
  }
];

for (var i = 0; i < employee.length; i++) {
  console.log('Name: ' + employee[i].name);
  console.log('Age: ' + employee[i].age);
  console.log('IC: ' + employee[i].ic);

  console.log('----------------------');
}
