/*
	{
		"created_on" : "30 march 2017",
		"aim" : "To print characters from their related UNICODE number",
		"coded_by" : "Rishikesh Agrawani"
	}
*/

function print_unicode(unicode){
		console.log(unicode+" : "+String.fromCharCode(unicode))
}

arr = [ 82, 97, 105, 112, 117, 114 ]

arr.forEach(
	function(unicode_number){
		print_unicode(unicode_number)
	}
)

/*
82 : R
97 : a
105 : i
112 : p
117 : u
114 : r
*/
