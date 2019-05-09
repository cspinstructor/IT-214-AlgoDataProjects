var fruits = ['apple', 'banana', 'ciku', 'durian', 'kiwi'];

console.log(fruits);

//-- (a) --
fruits.unshift('rambutan');
console.log(fruits);

//-- (b) --
fruits.push('langsat');
console.log(fruits);

//-- (c) --

//var myfruits = fruits.splice(0, fruits.length);
var myfruits = fruits.slice(0);
console.log('fruits: ', fruits);
console.log('myfruits: ', myfruits);
