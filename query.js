$(document).ready(function(){
	//Interaccion draggable
	$("#inter").css({"background-color": "red","width":"200px","text-align": "center"});
	$("#drop").css({"background-color": "grey","width":"300px","height": "300px","text-align": "center", "margin": "0 auto"});
	$("#inter").draggable();	
	//Interaccion droppable
	$("#drop").droppable({
		drop: function(event, ui){
			$(this).css({"background-color": "green","width":"300px","height": "300px","text-align": "center", "margin": "0 auto"}).html("<h1>Soltado!!</h1>");
		}
	});

	//Widgets
	$("#menu").menu();
	$("#enlaces").tabs();

	//Dialogo widget
	$("#dialogo").dialog({autoOpen: false});
	$("#open").on("click", function(){
		$("#dialogo").dialog("open");
	});

	//Effects 
	$("#tog").css({"background-color": "blue","height": "250px"});
	$(document).on("click", function(){
		$("#tog").toggle("bounce", {times: 4}, "slow");
	})
});