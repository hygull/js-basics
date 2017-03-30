/*
	{
		"created_on" : "30 march 2017",
		"aim" : "Using functions for object oriented programming (for beginners)",
		"node_version" : "v7.0.0",
		"coded_by" : "Rishikesh Agrawani"
	}
*/

/* Example 1*/
//Defining skeleton of Car object
function Car(name, color, price, company){
	this.name = name
	this.color = color
	this.price = price
	this.company  =company
}

//Instantiating Car object
myCar = new Car("Ferrari", "red", 3.37*10000000, "Ferrari")

console.log(myCar.name)

console.log(myCar.color)

console.log(myCar.price)

console.log(myCar.company)
console.log("\n")

/* Example 2 - 1st way */
//Defining a class named Arr and our own property like predefined length property on array objects
function Arr(arr=[]){
	this.arr = arr
	this.type = typeof arr
	
	this.total_items_count = function (){
		count = 0
		for (var i = 0; i < this.arr.length; i++){
			count += 1
		}
		return count
	}
	this.len = this.total_items_count()
}

//Instantiating Arr object
myArr = new Arr([ 1, 2, 3, 6, 7, 8 ])
console.log(myArr.arr)
console.log("Type : ",myArr.type)
console.log("Total items : ",myArr.len  )
console.log("\n")

//Example 3 - 2nd way
//Defining a class named Arr and our own property like predefined length property on array objects
function MyArray(arr=[]){
	this.arr = arr
	this.type = typeof arr
	this.len = total_items
	this.sum = function(){
		s = 0
		this.arr.forEach(function(item){
			s += item
		})
		return s
	}
}

function total_items(){
		count = 0
		this.arr.forEach(function(){
			count += 1
		})
		return count
}

//Instantiating Arr object
myArr = new MyArray([ 1, 2, 3, -5, 8, 6, 0, 7 ])
console.log(myArr.arr)
console.log("Type : ",myArr.type)
console.log("Total items : ",myArr.len()  )
console.log("Sum of all numbers : ", myArr.sum())

/*
Ferrari
red
33700000
Ferrari


[ 1, 2, 3, 6, 7, 8 ]
Type :  object
Total items :  6


[ 1, 2, 3, -5, 8, 6, 0, 7 ]
Type :  object
Total items :  8
Sum of all numbers :  22
*/