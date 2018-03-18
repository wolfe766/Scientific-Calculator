/*
	CREATED: Sam Wolfe 3/18/2018
	Description: Tests for the history objects.

*/
var testEntry = new Entry("12+5","17");

input = document.getElementById("input");
input.addEventListener("click", function(){
	printToHistory(testEntry);
});

//Will be more fully fleshed out in the future once actual
//calculation abilities are up and running
