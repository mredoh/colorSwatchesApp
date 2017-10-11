$('#generateBtn').click(function(){

	$("#swatchBoard").html('');	

	var randomSwatch = Math.floor( Math.random() * 3 );

	$.getJSON("js/colors.json", function(result){
		
		for(var i = 0; i<result[randomSwatch].swatch.length; i++){
			var hex=String(result[randomSwatch].swatch[i].code.hex);
			var color=String(result[randomSwatch].swatch[i].color);
			
			console.log(hex + " " + color);

			$("#swatchBoard").append('<div class="swatch" style="background-color: ' + hex + ';"><h1>' + color + '</h1>' + '<div class="hidden"><ul><li>' + String(result[randomSwatch].swatch[0].color) + '</li><li>' + String(result[randomSwatch].swatch[i].category) + '</li><li>' + String(result[randomSwatch].swatch[i].type) + '</li><li>' + String(result[randomSwatch].swatch[i].code.hex) + '</li></ul></div>' + '</div>');
		}
		$('.swatch').each(function(){
			$(this).click(function(){
				$(this).children('.hidden').css("opacity","1");
			});
		});
	});

});