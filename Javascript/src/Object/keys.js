// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 9: 'e', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7','9', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
	getFoo: {
		value: function () { return this.foo; }
	}
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']