$(document).ready(function() {
	
	var currColor = "white";
	//			width, height
	var gridSize = [4,4];

	// bind color selector 
	$('.div-color-block').click( function(){
		$('.div-color-block').css("outline","none");
		$this = $(this);
		$this.css("outline","solid black");
		currColor = $this.css("background-color");
	});

	populateGrid(gridSize);

	$('.div-node').click( function(){
		$(this).css("background-color", currColor);
	});

});

function populateGrid(gridSize) {
	// get container height and width
	var gridContainer = $("#grid-container");
	var gridDimensions = [parseInt(gridContainer.css("width")),parseInt(gridContainer.css("height"))];
	gridDimensions[0] -= parseInt(gridContainer.css("margin"));
	gridDimensions[1] -= parseInt(gridContainer.css("margin"));

	// calculate nodes dimensions
	var nodeDimensions = [gridDimensions[0]/gridSize[0], gridDimensions[1]/gridSize[1]];
	var nodeDiv = "<div class='ui-div-node div-node' style='float:left;border:thin solid black;width:"+ nodeDimensions[0] 
					+"px;height:"+ nodeDimensions[1] +"px;'></div>";

	for (var i = 0; i < gridSize[0]*gridSize[1]; i++){
		gridContainer.append(nodeDiv);
	}
};