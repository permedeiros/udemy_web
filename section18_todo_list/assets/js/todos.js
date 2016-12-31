

$("ul").on("click", "li", function (){
	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
		//Stop event propation on the parents elements
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// check if the typed chacaracter is 'enter'
	if(event.which === 13){
		//grabbing new tod text from input 
		var todoText = $(this).val();
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}	
});