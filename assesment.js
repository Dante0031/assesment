$(document).ready(function(){
	console.log("yup");
	$('#button').append("<div class='container'></div>");
	$('#button').on('click','.add-container',addContainer);


	function addContainer() {
		$('#button').children().last().append("<div class='container'></div>");
    	$('.container').children().last().append("<button class = 'delete'> Delete </button>");
    	$('.container').children().last().append("<button class = 'change'> Change </button>");
    	
}
	
});
