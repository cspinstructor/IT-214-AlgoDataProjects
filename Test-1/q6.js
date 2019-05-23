var object = [
  'table',
  'chair',
  'pen',
  'house',
  'car',
  'book',
  'mouse',
  'phone',
  'cup',
  'key',
  'lamp',
  'shoes',
  'watch',
  'vase',
  'box'
];

console.log('At first:', object);

object[5] = object[2];
object.splice(2, 1);
console.log('3th object extract to 6th', object);

object.splice(0, 0, 'apple');
console.log('Add apple to the array:', object);

object.push('zebra');
console.log('Add zebra to the array:', object);

var myobject = object.splice(0, 1);
console.log('apple is gone:' + object);

object.unshift(myobject);
console.log('apple is back:' + object);

var objects = object.splice(15, 1);
console.log('zebra is gone:' + object);

object.push(objects);
console.log('zebra is back:' + object);
