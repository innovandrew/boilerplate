$(document).ready(function(){

	console.log("domready");
	console.log("start js_main");
	
	var main_id = $main.attr("id");
	var $main = $(main_id);
	
	var svgdefs_html = $.get("/svg/defs.html");
 	var skip_html = "<a id=\"skip\" href=\"#" + main_id + ">Skip to Main</a>";

	$("body").prepend(svgdefs_html, function(){
		console.log("svg defs injected")
	});


	$("body").prepend(skip_html, function(){
		console.log("skip link injected")
	});

	console.log("end js_main");
});