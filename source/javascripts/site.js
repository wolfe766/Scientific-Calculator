// This is where it all goes :)

//TODO: Disable ANS/Memory buttons when there is no previous ANS or memory
//DONE: Add a physical button for MC (memory clear)
//DONE: Integrate memory functions with evaluate_expression so that an equation can be evaluated and the result stored (need to check for errors)
//TODO: Update/Enable ANS when enter button is clicked and result is valid
//TODO: Update history when enter button is clicked
//TODO: Call preprocssor when enter is clicked (and produce test cases for preprocessor function)

/*NOTE: Currently the enabling/disabling of buttons requires that buttons
contain ONLY the class "enabled" or "disabled". If other classes are needed
this will need to be updated (possible to do, but much more difficult)*/

//window.onload stops JS from executing until the HTML page is fully formed
//this is necessary otherwise we risk getting null objects if an element was not yet created
window.onload = function(){
	disableButton("ans");
	disableAllMemoryButtons();

	document.getElementById("ms").addEventListener("click", function(){memoryController.memoryStore()});
	document.getElementById("ans").addEventListener("click", function(){memoryController.ansToString()});
	document.getElementById("mr").addEventListener("click", function(){memoryController.memoryRecall()});
	document.getElementById("mAdd").addEventListener("click", function(){memoryController.memoryPlus()});
	document.getElementById("mSub").addEventListener("click", function(){memoryController.memoryMinus()});
	document.getElementById("mc").addEventListener("click", function(){memoryController.memoryClear()});

	document.getElementById("scrollUp").addEventListener("click", function(){historyController.scrollUp()});
	document.getElementById("scrollDown").addEventListener("click", function(){historyController.scrollDown()});
	document.getElementById("scrollToBottom").addEventListener("click", function(){historyController.scrollToBottom()});

	//Listener for clicking on items in the history panel
	document.addEventListener("click", function(e){
		var e = e;
		var target = e.target;
		if((target.className == "historyEq") || (target.className == "historyAns")){
			addToString(target.innerHTML);
		}
	});
}