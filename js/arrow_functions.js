//Example 1
sum=(a,b) => a+b //An expression so parenthesis is not necessary

console.log(sum(25,56))

/*Example 2*/
multiplication	= (a,b)	=>	{return a*b} //Now parenthesis is necessary
console.log(multiplication(5,7))

getSmall = arr => {
	if (arr.length==0){
		alert("An array should contain atleast\t "+1+" digits.\nRetry...");
	}
	var min=arr[0]
	for (i=1;i<arr.length;++i){
		if (arr[i]<min){
			min=arr[i]
		}
	}
	return min;	
}

console.log(getSmall([12,45,6,7,8,5,3,4,2,1])) //1

getObject = (name,age,salary,languages) => {
	return {"Name":name,"Age":age,"Salary":salary,"Languages":languages}
}

console.log(getObject("Rishikesh Agrawani",24,150000,["C","C++","Core Java","Python","C#","PHP","Golang","Javascript"]))

/*Output
81
35
1
{ Name: 'Rishikesh Agrawani',
  Age: 24,
  Salary: 150000,
  Languages: 
   [ 'C',
     'C++',
     'Core Java',
     'Python',
     'C#',
     'PHP',
     'Golang',
     'Javascript' ] }

*/