/*
	CREATED: Sam Wolfe 3/18/2018
	Description: Tests for the history objects.
	
	Equations and answers generated in this final will NOT BE CORRECT
	they're strictly used for formatting
*/
var equation = Math.floor(Math.random() * 100).toString() + " + " + Math.floor(Math.random() * 100).toString();
var answer = Math.floor(Math.random() * 100).toString();
var testEntry = new Entry(equation, answer);

input = document.getElementById("input");
input.addEventListener("click", function(){
	historyController.addToHistory(testEntry);
	testEntry.equation = Math.floor(Math.random() * 100).toString() + " + " + Math.floor(Math.random() * 100).toString();
	testEntry.answer = Math.floor(Math.random() * 100).toString();
});

//Will be more fully fleshed out in the future once actual
//calculation abilities are up and running
