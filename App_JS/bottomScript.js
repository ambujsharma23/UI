var setEvents = function(){
	var editLink = document.getElementById("editLink");
	editLink.addEventListener("click",editLinkEH,false);
	console.log("In SetEvents");
}();

var editLinkEH = function(e){
	alert("Event Fired"+e.name);
}