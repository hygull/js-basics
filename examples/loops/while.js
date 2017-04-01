/*
	{
		"created_on" : "31 march 2017",
		"aim" : "Using while loop",
		"coded_by" : "Rishikesh Agrawani"
	}
*/

//Example 1
var arr = [ 1, 3, 5, 7, 9, 11 ]

l = arr.length

while ( l )  //If l will become 0 then loop will terminate
{
	console.log( arr[ arr.length - l ] )
	l--
}
console.log("\n")


//Example 2 (Printing only odd numbers before 1st even number if any)
twodArr = [ [ 23, 12, 53 ], [ 88, 45 ],  [77, 81, 22, 56 ] ]
twodArr.forEach(
	function(num){
			l = num.length
			while( l && ( num[ num.length - l ] % 2 != 0 ) ) 
			{
				console.log( num[ num.length - l ]  )
				l -= 1
			}//while's end
	}//function's end
)

//Example 3 - (very simple)
cities = [ "Raipur", "Bangalore", "Delhi", "Nagpur" ]
var i = 0
while ( i < cities.length )
{	
	console.log( cities[ i ] )
	i += 1
}

/*
1
3
5
7
9
11


23
77
81
Raipur
Bangalore
Delhi
Nagpur
*/

