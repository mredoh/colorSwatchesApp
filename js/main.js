
$(document).click(function(){
	$.getJSON("js/colors.json", function(result,status){
		console.log(result);
	});
});