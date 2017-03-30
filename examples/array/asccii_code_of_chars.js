/*
	{
		"created_on" : "29 march 2017",
		"aim" : "To print ASCII values of all characters of strings in an array",
		"coded_by" : "Rishikesh Agrawani"
	}
*/
function print_ascii(word){
	for(var i = 0; i < word.length; i++)
	{
		console.log(word.charAt(i)," : ",word.charCodeAt(i))
	}
}

arr = [ "Raipur", "Bangalore", "Apple"]

arr.forEach(
	function(word){
		console.log(word+":-")
		print_ascii(word)
		console.log("\n")
	}
)

/*
Raipur:-
R  :  82
a  :  97
i  :  105
p  :  112
u  :  117
r  :  114


Bangalore:-
B  :  66
a  :  97
n  :  110
g  :  103
a  :  97
l  :  108
o  :  111
r  :  114
e  :  101


Apple:-
A  :  65
p  :  112
p  :  112
l  :  108
e  :  101
*/
