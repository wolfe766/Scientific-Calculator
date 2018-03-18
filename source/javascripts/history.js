/*CREATED: Sam Wolfe 3/18/2018
Description: This file manages both the smaller history 
box and the big history box. 
*/

//The stack of all past entries.
var entryStack = [];

/*CREATED: Sam Wolfe 3/18/2018
Description: Constructor method for the Entry object.

Parameters:
	eq: String - The equation
	ans: String - The Answer (or Error)
*/
function Entry(eq, ans){
	this.equation = eq;
	this.answer = ans;
	//We could automatically add this to the entryStack right here if desired
}

/*CREATED: Sam Wolfe 3/18/2018
Description: Prints the given entry to the approriate history container
and updates history containers accordingly.

Parameters:
	entry: Entry - The entry to be written to history
*/
function printToHistory(entry){

	var container = document.getElementById("historyContainer");

	var historyElement = document.createElement("div");
	historyElement.className = "historyElement";

	var eq = document.createElement("p");
	eq.className = "historyEq";
	var eqText = document.createTextNode(entry.equation);
	eq.appendChild(eqText);

	var ans = document.createElement("p");
	ans.className = "historyAns";
	var ansText = document.createTextNode(entry.answer);
	ans.appendChild(ansText);

	historyElement.appendChild(eq);
	historyElement.appendChild(ans);

	container.insertBefore(historyElement,container.firstChild);
};