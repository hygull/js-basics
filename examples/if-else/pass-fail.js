/*
	{
		"created_on" : "30 march 2017",
		"aim" : "To use if else in javascript (for beginners)",
		"coded_by" : "Rishikesh Agrawani",
		"node_version" : "v7.0.0",
		"wiki_ref" : "https://simple.wikipedia.org/wiki/Even_number"
		"great_ref" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
	}
*/

//Example 1 - To check whether number is even or odd (if-else)
number1 = 10

if(number1 % 2 === 0){  //Strict equality check
	console.log(number1 + " is even")
}else{
	console.log(number1 + " is odd")
}

number2 = 7
if(number2 % 2 === 0){
	console.log(number2 + " is even")
}else{
	console.log(number2 + " is odd")
}

number3 = -5
if(number3 % 2 === 0){
	console.log(number3 + " is even")
}else{
	console.log(number3 + " is odd")
}

number4 = -48
if(number4 % 2 === 0){
	console.log(number4 + " is even")
}else{
	console.log(number4 + " is odd")
}

number5 = 0
if(number5 % 2 === 0){
	console.log(number5 + " is even")
}else{
	console.log(number5 + " is odd")
}

//Example 2 - To find a maximum number among 3 integers (nested if-else)
function printMaximum(a, b, c)
{
	if ( a < b) //a<b => false => go to else
	{	
		if (b > c) //b>a and b>c
		{
			console.log(b + " is maximum among ", a, b, c)
		}
		else //a<b and c>b  =>  a<b<c
		{
			console.log(c+ " is maximum among ", a, b, c)
		}
	}
	else //a>b
	{
		if (a > c) //a>b and a>c
		{
			console.log(a + " is maximum among ", a, b, c)
		}
		else //a>b and c>a  =>  c>a>b
		{
			console.log(c+ " is maximum among ", a, b, c)
		}
	}
}

printMaximum(11, 12, 13)
printMaximum(15, 22, 4)
printMaximum(34, 3, 9)

/*
10 is even
7 is odd
-5 is odd
-48 is even
0 is even
13 is maximum among  11 12 13
22 is maximum among  15 22 4
34 is maximum among  34 3 9
*/