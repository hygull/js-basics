/*
	{
		"created_on" : "30 march 2017",
		"aim" : "Using switch case statement(for beginners)",
		"coded_by" : "Rishikesh Agrawani",
		"node_version" : "v7.0.0",
		"special" : "A thought to convert if-else to switch case"
	}
*/

/*
	Example 1 - A very simple switch case that decides whether the integer
				number is even or odd
*/

function checkNumber( n )
{
	boolean = ( n % 2 === 0 )

	switch( boolean ) 
	{
		case true:
					console.log( n + " is even number." ) 
					break;
		case false:
					console.log( n + " is odd number." )
	}
}

checkNumber( 34 )  //function call
checkNumber( 67 )  //function call
console.log( "\n" )


/* Example 2 - To decide whether the integer number is -ve, +ve or 0 */
function checkOnNumberLine( n )
{
	boolean = ( n < 0 )
	console.log("Checking ", n)
	switch(boolean)
	{
		case true:
					console.log( n + " is a negative integer." )
					break;
		case false:
					if ( n > 0 )
					{
						console.log( n + " is postive integer." )
						break
					}
		default:
					console.log( n + " is 0.")
	}
		console.log("\n")
}

checkOnNumberLine( 12 )
checkOnNumberLine( -11 )
checkOnNumberLine( 0 )


/*Example 3 - To print maximum number among 3 integers using nested switch*/
function printMaximumIn( a, b, c ) 
{
	boolean1 = ( a > b )
	switch( boolean1 )
	{
		case true:  //a>b
					boolean2 = ( a > c)
					switch( boolean2 )
					{
						case true:  //a>b and a>c
									console.log( a + " is maximum among ", a, b, c )
									break
						case false: //a>b and c>a => c>a>b
									console.log( c + " is maximum among ", a, b, c )
					}
					break;

		case false: //b>a
					boolean3 = ( b > c)
					switch( boolean3 )
					{
						case true:  //b>a and b>c 
									console.log( b + " is maximum among ", a, b, c )
									break
						case false: //b>a and c>b => c>b>a
									console.log( c + " is maximum among ", a, b, c )
					}
	}
}

printMaximumIn( 12, 13, 67 )
printMaximumIn( 67, 87, -4 )
printMaximumIn( -1, -45, -9)

/*
34 is even number.
67 is odd number.


Checking  12
12 is postive integer.


Checking  -11
-11 is a negative integer.


Checking  0
0 is 0.


67 is maximum among  12 13 67
87 is maximum among  67 87 -4
-1 is maximum among  -1 -45 -9
*/