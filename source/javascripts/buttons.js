/*
  Created By: Alec Maier 3/18/2018
  
  Description: functions for all button presses
*/

// User pressed button to move left
function press_left() {
    inputObject.shiftCursorLeft();
}

// User pressed button to move right
function press_right() {
    inputObject.shiftCursorRight();
}

// User pressed button to enter '0' 
function press_0() {
    //alert("zero pressed");
    inputObject.addToString(0);
}

// User pressed button to enter '1'
function press_1() {
    inputObject.addToString(1);
}

// User pressed button to enter '2'
function press_2() {
    inputObject.addToString(2);
}

// User pressed button to enter '3'
function press_3() {
    inputObject.addToString(3);
}

// User pressed button to enter '4'
function press_4() {
    inputObject.addToString(4);
}

// User pressed button to enter '5'
function press_5() {
    inputObject.addToString(5);
}

// User pressed button to enter '6'
function press_6() {
    inputObject.addToString(6);
}

// User pressed button to enter '7'
function press_7() {
    inputObject.addToString(7);
}

// User pressed button to enter '8'
function press_8() {
    inputObject.addToString(8);
}

// User pressed button to enter '9'
function press_9() {
    inputObject.addToString(9);
}

// User pressed button to enter '+'
function press_plus() {
    inputObject.addToString("+");
}

// User pressed button to enter '-'
function press_minus() {
    inputObject.addToString("\u2212");
}

// User pressed button to enter '*'
function press_multiply() {
    inputObject.addToString("*");
}

// User pressed button to enter '/'
function press_divide() {
    inputObject.addToString("/");
}

function press_return() {
    document.getElementById("output").innerHTML = inputObject.returnInputString;
}

// User pressed button to clear display
function press_clear() {
    inputObject.clearInput();
}

// User pressed button to delete last operation or number
function press_delete() {
    inputObject.deleteFromString();
}

// User pressed button to enter 'tan'
function press_tan() {
    inputObject.addToString("tan()");
    inputObject.shiftCursorLeft();
}

// User pressed button to enter 'sin'
function press_sin() {
    inputObject.addToString("sin()");
    inputObject.shiftCursorLeft();
}

// User pressed button to enter 'cos'
function press_cos() {
    inputObject.addToString("cos()");
    inputObject.shiftCursorLeft();
}

// User pressed button to enter 'sqrt'
function press_radical() {
    inputObject.addToString("sqrt()");
    inputObject.shiftCursorLeft();
}

// User pressed button to enter invervse
function press_inverse() {
    inputObject.addToString("inv()");
    inputObject.shiftCursorLeft();
}

// User pressed button to enter exponent
function press_exponent() {
    inputObject.addToString("pow(,)");
    inputObject.shiftCursorLeft();
    inputObject.shiftCursorLeft();
}

// User pressed button to enter square
function press_square() {
    inputObject.addToString("pow(,2)");
    inputObject.shiftCursorLeft();
    inputObject.shiftCursorLeft();
    inputObject.shiftCursorLeft();
}

// User pressed button to enter '/'
function press_factorial() {
    inputObject.addToString("fact()");
    inputObject.shiftCursorLeft();
}

// User pressed button to make the value negative
function press_negative() {
    inputObject.addToString("-")
}

// User pressed button to make value a decimal
function press_point() {
    inputObject.addToString(".");
}

// User pressed button to enter '('
function press_left_paren() {
    inputObject.addToString("(");
}

// User pressed button to enter ')'
function press_right_paren() {
    inputObject.addToString(")");
}

// User pressed button to toggole between radians and degrees
function toggle_trig_mode() {
    inputObject.toggleTrigMode();
    el = document.getElementById("trig_display");
    el.value = inputObject.returnTrigMode();
}

// User pressed button to evaluat and display result
function press_enter() {
    if(inputObject.peakString().length > 0){
        //Reset the previous result upon beginning the ENTER sequence
        previousResult.reset();

        // Get entered equation
        var input = inputObject.returnInputString();

        // Preprocess equation
        var equation = preprocess(input, memoryController.ansValue);

        // Get Trig Mode
        var trigMode = inputObject.returnTrigMode();

        // Tokenize expression
        var tokenize = tokenizeExpression(equation);

        // Get evaluation of entered equation
        var value = calculateExpression(tokenize, trigMode);

        //enable the ans button if value returned non-error
        if(!isNaN(value)){
            enableButton("ans");
            memoryController.ansValue = value;
            previousResult.wasNumber = true;
        }else{
            //Update previous result object to notify user that it was an error
            previousResult.wasError = true;
        }

        //Add to history 
        //eqRaw is the raw user input without * inserted at implicit mult spots
        //This is what is printed to history and to the display - ans is still replaced
        var eqRaw = preprocess(input, memoryController.ansValue, false);
        historyEntry = new Entry(eqRaw,value);
        historyController.addToHistory(historyEntry);

        //Update the notification panel
        setNotification(previousResult.getPriorityState());

        // Update display of computed value
        inputObject.addToString(value);
    }
}
