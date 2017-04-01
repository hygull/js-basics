/*
	{
		"created_on" : "1 April 2017, 12:08 a.m",
		"aim" : "Creating linked list in javascript",
		"coded_by" : "Rishikesh Agrawani"
	}
*/

//Defining Node of lnked list
function Node( data ) {
	this.data = data      //Data
	this.next = null      //Reference to next node
}

//A function that displays the information on nodes
function display_nodes_info( node ) 
{
	while( node != null )
	{
		console.log( "Data : ",node.data )
		node = node.next
	}
}

function main()
{
		//Creating a node(tha starting one)
		var start = new Node( 12 )  

		/*
			+---------------+
		start-->|   12	| null	|
			+-------+-------+
		*/

		//Creating second node and inserting at the end
		start.next = new Node( 14 ) 

		/*
			+---------------+	+-------+-------+	
		start-->|    12	|   ----------->|   14  | null  |
			+-------+-------+       +-------+-------+
		*/

		//Creating third node and inserting at the end
		start.next.next = new Node( 15 )

		/*
			+---------------+	   +-------+-------+	 +-------+-------+
		start-->|   12	|      ----------->|  14   |	-------->| 15    | null  |
			+-------+-------+	   +-------+-------+     +-------+-------+
		*/

		display_nodes_info( start )
}

main()
