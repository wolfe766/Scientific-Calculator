// This is where it all goes :)

//TODO: Disable ANS/Memory buttons when there is no previous ANS or memory
//TODO: Integrate memory functions with evaluate_expression so that an equation can be evaluated and the result stored (need to check for errors)
//TODO: Update/Enable ANS when enter button is clicked and result is valid
//TODO: Update history when enter button is clicked
//TODO: Call preprocssor when enter is clicked (and produce test cases for preprocessor function)

//window.onload stops JS from executing until the HTML page is fully formed
//this is necessary otherwise we risk getting null objects if an element was not yet created
window.onload = function(){

        // Calculator Functionality
        document.getElementById("0").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("1").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("2").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("3").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("4").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("5").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("6").addEventListener("click", function(){memoryController.memoryStore()});  
        document.getElementById("7").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("8").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("9").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("plus").addEventListener("click", function(){memoryController.memoryStore()})
        document.getElementById("minus").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("multiply").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("divide").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("squareRoot").addEventListener("click", function(){memoryController.memoryStore()});        
        document.getElementById("inverse").addEventListener("click", function(){memoryController.memoryStore()});  
        document.getElementById("sine").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("square").addEventListener("click", function(){memoryController.memoryStore()});    
        document.getElementById("cosine").addEventListener("click", function(){memoryController.memoryStore()});  
        document.getElementById("exponent").addEventListener("click", function(){memoryController.memoryStore()});  
        document.getElementById("tan").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("parenLeft").addEventListener("click", function(){memoryController.memoryStore()});    
        document.getElementById("parenRight").addEventListener("click", function(){memoryController.memoryStore()});  
        document.getElementById("factorial").addEventListener("click", function(){memoryController.memoryStore()}); 
        document.getElementById("negative").addEventListener("click", function(){memoryController.memoryStore()});  
        document.getElementById("decimal").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("delete").addEventListener("click", function(){memoryController.memoryStore()});     
        document.getElementById("clear").addEventListener("click", function(){memoryController.memoryStore()});
        document.getElementById("left").addEventListener("click", function(){memoryController.memoryStore()}); 
        document.getElementById("right").addEventListener("click", function(){memoryController.memoryStore()});  
        document.getElementById("enter").addEventListener("click", function(){memoryController.memoryStore()});     

        // Memory Functionality
	document.getElementById("ms").addEventListener("click", function(){memoryController.memoryStore()});
	document.getElementById("ans").addEventListener("click", function(){memoryController.ansToString()});
	document.getElementById("mr").addEventListener("click", function(){memoryController.memoryRecall()});
	document.getElementById("mAdd").addEventListener("click", function(){memoryController.memoryPlus()});
	document.getElementById("mSub").addEventListener("click", function(){memoryController.memoryMinus()});
	document.getElementById("mc").addEventListener("click", memoryController.memoryClear);
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

