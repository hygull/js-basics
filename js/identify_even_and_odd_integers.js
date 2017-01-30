//Created on : 30/12/2016.
//This Javascript is being currently used by my site => http://rishikesh67.pythonanywhere.com

function IdentifyNumbers(){
				//Taking i/p which denotes the number of input integers we want in an array
				var l=[];
				var n=prompt("How many integers you wanna enter ?");
				if (!isNaN(n)){
					if (parseInt(n)%1===0){
						//Taking individual i/ps for an array
						num=parseInt(n);
						for (i=0;i<n;i++){
							var element=prompt("Enter the value of Number"+(i+1));
							if (!isNaN(element)){
								e=parseInt(element)%1;
								if (e===0){
									var n2=parseInt(element);
									l[i]=n2;
									if(n2%2==0){
										document.write("<h3 style='color:black;text-align:center;'> Even : "+n2+"</h3><br>");
									}else{
										document.write("<h3 style='color:lightgreen;text-align:center;'> Odd : "+n2+"</h3><br>");
									}
								}else{
									alert("Not an integer");
									window.location.reload();//Reload the current document
								}
								
							}else{
								alert("Not a number");
								window.location.reload();//Reload the current document
							}
						}
					}else{
						alert("Not an integer");
						window.location.reload();//Reload the current document
					}
				}else{
					alert("Not a number");
					window.location.reload();//Reload the current document
				}
	/*********************Now displaying the odd and evens again*****************************/
				var numbers=l;
				document.write("<h1 style='color:red;text-align:center;'>"+numbers.toString()+"</h1>");
				for (index in numbers){
					if (numbers[index]%2==0){
					document.write("<h3 style='color:green;text-align:center;'> Even : "+numbers[index]+"</h3><br>");
					}else{
						document.write("<h3 style='color:blue;text-align:center;'>Odd : "+numbers[index]+"</h3><br>");
					}
				}
			}