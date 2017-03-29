/*
	{
		"created_on" : "29 march 2017",
		"aim" : "To use array's prototype constructor",
		"coded_by" : "Rishikesh Agrawani"
	}
*/

//Defining an array of integer items
var arr = [ 1, 2, 3, 4, 5, 6, 7 ]

//Printing array
console.log(arr)
console.log("\n");

//Using predefined length property of an array
console.log("Number of items in an array(using predefined length property) : ",arr.length)
console.log("\n");

//Let's define our own method items_count() and add to an array to count number of items
Array.prototype.items_count = function(){
	var count = 0
	this.forEach(function(){
		count += 1
	})
	return count
}

console.log("Number of items in an array(using user defined array method)  : ",arr.items_count())
console.log("\n");

//Defining another array
var evens_arr = [ 14, 22, 46, 86, 2, 30]

Array.prototype.sum = function(){
	s = 0
	this.forEach(function(item){
		s += item
	})
	return s
}

console.log("A new array : ", evens_arr)
console.log("\n");
s = evens_arr.sum()
console.log("Sum of all elements of above array : ", s)
console.log("\n");

//Defining an array of strings(cities)
var cities = new Array()
cities = cities.concat([ "Raipur", "Banaglore", "New Delhi"])
console.log("Main form        : ",cities)

//Defining a function to convert all the strings to lowercase 
Array.prototype.lowerCase = function(){

	for(var i = 0; i < this.length; i++)
		this[i] = this[i].toLowerCase()
	
	return this
}

console.log("Lower cased form : ", cities.lowerCase())

/*
[ 1, 2, 3, 4, 5, 6, 7 ]


Number of items in an array(using predefined length property) :  7


Number of items in an array(using user defined array method)  :  7


A new array :  [ 14, 22, 46, 86, 2, 30 ]


Sum of all elements of above array :  200


Main form        :  [ 'Raipur', 'Banaglore', 'New Delhi' ]
Lower cased form :  [ 'raipur', 'banaglore', 'new delhi' ]
*/
