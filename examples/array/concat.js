/*
	{
		"created_on" : "29 march 2017",
		"aim" : "To use concat() method with an arrays and strings",
		"coded_by" : "Rishikesh Agrawani"
	}
*/

var odds_arr = [ 3, 7, 9, 1, 5 ]

console.log(odds_arr)
console.log("\n")

var evens_arr = [ 2, 4, 8, 10, 0]

console.log(evens_arr)
console.log("\n")

var new_arr = evens_arr.concat(12)	//Creating new array by taking all items of evens_arr and adding 12 

console.log(new_arr)
console.log("\n")

new_arr = evens_arr.concat(16,48) //Creating new array by taking all items of evens_arr and adding 16 & 48

console.log(new_arr)
console.log("\n")

new_arr = evens_arr.concat([ 12, 82, 34, 14 ]) //Creating new array by taking all items of evens_arr and [ 12, 82, 34, 14 ]

console.log(new_arr)
console.log("\n")

evens_arr.concat(evens_arr)

whole_numbers_arr = odds_arr.concat(evens_arr) //Creating a new array having whole numbers

console.log(whole_numbers_arr)
console.log("\n")

void_arr = [ "Rishikesh", 24, { "brother" : "Hemkesh", age : 22}]

console.log(void_arr)
console.log("\n")

void_arr = void_arr.concat(undefined) //Modifying the void_arr

console.log(void_arr)
console.log("\n")

void_arr = void_arr.concat(NaN) //Modifying the void_arr

console.log(void_arr)
console.log("\n")

void_arr = void_arr.concat(Infinity) //Modifying the void_arr

console.log(void_arr)
console.log("\n")

void_arr = void_arr.concat({ "sister" : "Malinikesh", "age" : 20}) //Modifying the void_arr (by adding an object)

console.log(void_arr)
console.log("\n")

/*concat() method with strings*/
var firstname = "Rishikesh"
var lastname = "Agrawani"

var fullname = firstname.concat(" "+lastname) //If " " then result => RishikeshAgrawani

console.log(fullname)
console.log("\n")

console.log("A coder should have a passion to code as ".concat("it is the main task to be done."))
/*
[ 3, 7, 9, 1, 5 ]


[ 2, 4, 8, 10, 0 ]


[ 2, 4, 8, 10, 0, 12 ]


[ 2, 4, 8, 10, 0, 16, 48 ]


[ 2, 4, 8, 10, 0, 12, 82, 34, 14 ]


[ 3, 7, 9, 1, 5, 2, 4, 8, 10, 0 ]


[ 'Rishikesh', 24, { brother: 'Hemkesh', age: 22 } ]


[ 'Rishikesh', 24, { brother: 'Hemkesh', age: 22 }, undefined ]


[ 'Rishikesh',
  24,
  { brother: 'Hemkesh', age: 22 },
  undefined,
  NaN ]


[ 'Rishikesh',
  24,
  { brother: 'Hemkesh', age: 22 },
  undefined,
  NaN,
  Infinity ]


[ 'Rishikesh',
  24,
  { brother: 'Hemkesh', age: 22 },
  undefined,
  NaN,
  Infinity,
  { sister: 'Malinikesh', age: 20 } ]


Rishikesh Agrawani


A coder should have a passion to code as it is the main task to be done.
*/



