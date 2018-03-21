// This is where it all goes :)

//TODO: Disable ANS/Memory buttons when there is no previous ANS or memory
//DONE: Add a physical button for MC (memory clear)
//DONE: Integrate memory functions with evaluate_expression so that an equation can be evaluated and the result stored (need to check for errors)
//TODO: Update/Enable ANS when enter button is clicked and result is valid
//TODO: Update history when enter button is clicked
//TODO: Call preprocssor when enter is clicked (and produce test cases for preprocessor function)
//TODO: Documentation for memory functions
//TODO: Actual display for current memory value

/*NOTE: Currently the enabling/disabling of buttons requires that buttons
contain ONLY the class "enabled" or "disabled". If other classes are needed
this will need to be updated (possible to do, but much more involved)*/

//window.onload stops JS from executing until the HTML page is fully formed
//this is necessary otherwise we risk getting null objects if an element was not yet created

var inputObject = new Input(document.getElementById("display"));
var trigString = document.getElementById("trig_display");
window.onload = function(){
    // Initial button states
    disableButton("ans");
    disableAllMemoryButtons();
    trigString.value = inputObject.returnTrigMode();
    console.log(trigString.value)

    // Memory functionality
    document.getElementById("ms").addEventListener("click", function(){memoryController.memoryStore()});
    document.getElementById("ans").addEventListener("click", function(){memoryController.ansToString()});
    document.getElementById("mr").addEventListener("click", function(){memoryController.memoryRecall()});
    document.getElementById("mAdd").addEventListener("click", function(){memoryController.memoryPlus()});
    document.getElementById("mSub").addEventListener("click", function(){memoryController.memoryMinus()});
    document.getElementById("mc").addEventListener("click", function(){memoryController.memoryClear()});

    // Calculator Functionality
    document.getElementById("0").addEventListener("click", press_0);
    document.getElementById("1").addEventListener("click", press_1);
    document.getElementById("2").addEventListener("click", press_2);
    document.getElementById("3").addEventListener("click", press_3);
    document.getElementById("4").addEventListener("click", press_4);
    document.getElementById("5").addEventListener("click", press_5);
    document.getElementById("6").addEventListener("click", press_6);
    document.getElementById("7").addEventListener("click", press_7);
    document.getElementById("8").addEventListener("click", press_8);
    document.getElementById("9").addEventListener("click", press_9);
    document.getElementById("plus").addEventListener("click", press_plus);
    document.getElementById("minus").addEventListener("click", press_minus);
    document.getElementById("multiply").addEventListener("click", press_multiply);
    document.getElementById("divide").addEventListener("click", press_divide);
    document.getElementById("squareRoot").addEventListener("click", press_radical);
    document.getElementById("inverse").addEventListener("click", press_inverse);
    document.getElementById("sine").addEventListener("click", press_sin);
    document.getElementById("square").addEventListener("click", press_square);
    document.getElementById("cosine").addEventListener("click", press_cos);
    document.getElementById("exponent").addEventListener("click", press_exponent);
    document.getElementById("tan").addEventListener("click", press_tan);
    document.getElementById("parenLeft").addEventListener("click", press_left_paren);
    document.getElementById("parenRight").addEventListener("click", press_right_paren);
    document.getElementById("factorial").addEventListener("click", press_factorial);
    document.getElementById("negative").addEventListener("click",press_negative );
    document.getElementById("decimal").addEventListener("click", press_point);
    document.getElementById("delete").addEventListener("click", press_delete);
    document.getElementById("clear").addEventListener("click", press_clear);
    document.getElementById("left").addEventListener("click", press_left);
    document.getElementById("right").addEventListener("click", press_right);
    document.getElementById("enter").addEventListener("click", press_enter);
    document.getElementById("trig").addEventListener("click", toggle_trig_mode);

    // History scroll buttons
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
};

