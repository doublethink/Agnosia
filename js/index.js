$(document).ready(function() {
	//alert("Hello World!");
	$('.div-color-block').click( function(){
		$('.div-color-block').css("outline","transparent");
		$(this).css("outline","solid black");
	});
});