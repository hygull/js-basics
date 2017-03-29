/*
	{
		"created_on" : "29 march 2017",
		"aim" : "To print the contents of an array using for & forEach loop",
		"coded_by" : "Rishikesh Agrawani"
	}
*/

//Defining an array of 5 elements
arr = [1, 2, 4, 7, 9]

s = ""
//Printing elements of an array using for loop
for(var i=0; i<arr.length; i++)
{
	console.log(arr[i] )
}

console.log("\n");
//Printing elements of an array using forEach loop
arr.forEach(
	function(num){
		console.log(num)  
	}
)
