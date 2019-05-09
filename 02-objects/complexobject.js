var student = {
  name: {
    firstname: 'Mike',
    lastname: 'Lee'
  },
  age: 18,
  ic: 123456
};

console.log('firstname: ', student.name.firstname);
console.log('lastname: ', student.name.lastname);
console.log('age: ', student.age);
console.log('ic: ', student.ic);

var jsonString = JSON.stringify(student);
console.log(jsonString);
