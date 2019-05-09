var fruits = ['apple', 'banana', 'ciku', 'durian'];
console.log(fruits);

var f = fruits.splice(2, 2);
console.log(fruits);
console.log('removed: ', f);

fruits.splice(1, 0, 'grapes', 'peach');
console.log(fruits);
