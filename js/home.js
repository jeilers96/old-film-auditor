function filterSelection(category){
	var tiles, i;
	tiles = document.getElementsByClassName("tile"); //get all tiles
	if (category == "All"){
		category = ""; //if all is selected then see all tiles
	} 
	for (i = 0; i < tiles.length; i++){
		removeClass(tiles[i], "show");
		if (tiles[i].className.indexOf(category) > -1){ 
			addClass(tiles[i], "show");
		} 
	}
}

function setActiveSelection(){
	var catSelectors, i;
	catSelectors = document.getElementsByClassName("catSelector");
	for (i = 0; i < catSelectors.length; i++){
		catSelectors[i].addEventListener("click", function(){
		document.getElementById("activeCat").removeAttribute("id");
		this.id += "activeCat";
	  });
	}

}
function addClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function removeClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	}	
	element.className = arr1.join(" ");
}

function dropDown() {
	var x = document.getElementById("filterNav");
	if (x.className === "filter") {
		x.className += " responsive";
	} else {
		x.className = "filter";
	}
}
			
$(function(){
		var includes = $('[data-include]');
		jQuery.each(includes, function(){
		var file = 'tiles/' + $(this).data('include') + '.html';
		$(this).load(file);
	});
});

