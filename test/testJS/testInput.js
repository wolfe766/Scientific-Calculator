/*
  CREATED: David Levine 03/13/2018
    
  Description: The following file will initalize listeners which will interact with the 
  input box described in testInput.html. This will be used as a playground to test and fix bugs,
  which will be kept track of in a inputTestBugs.txt file in the directory titled testNotes.
*/

/* create input object which all functions will have access to */

var inputObject = new Input(document.getElementById("input"));


/* make functions to deal with each button press */
function leftCursorPress() {
  inputObject.shiftCursorLeft();
}

function rightCursorPress() {
   inputObject.shiftCursorRight();
}

function button0() {
   //alert("zero pressed");
   inputObject.addToString(0);
}

function button1() {
   inputObject.addToString(1);
}

function button2() {
   inputObject.addToString(2);
}

function button3() {
   inputObject.addToString(3);
}

function button4() {
   inputObject.addToString(4);
}

function button5() {
   inputObject.addToString(5);
}

function button6() {
    inputObject.addToString(6);
}

function button7() {
    inputObject.addToString(7);
}

function button8() {
    inputObject.addToString(8);
}

function button9() {
    inputObject.addToString(9);
}

function buttonPlus() {
    inputObject.addToString("+");
}

function buttonMinus() {
    inputObject.addToString("-"); 
}

function buttonMult() {
    inputObject.addToString("*");
}

function buttonDivide() {
    inputObject.addToString("/");
}

function buttonReturn() {
    var text = inputObject.returnInputString();
    document.getElementById("output").innerHTML = text;
}

function buttonClear() {      
    inputObject.clearInput();
}

/* add event listeners */
document.getElementById("left").addEventListener("click", leftCursorPress);
document.getElementById("right").addEventListener("click", rightCursorPress);
document.getElementById("id_0").addEventListener("click", button0);
document.getElementById("id_1").addEventListener("click", button1);
document.getElementById("id_2").addEventListener("click", button2);
document.getElementById("id_3").addEventListener("click", button3);
document.getElementById("id_4").addEventListener("click", button4);
document.getElementById("id_5").addEventListener("click", button5);
document.getElementById("id_6").addEventListener("click", button6);
document.getElementById("id_7").addEventListener("click", button7);
document.getElementById("id_8").addEventListener("click", button8);
document.getElementById("id_9").addEventListener("click", button9);
document.getElementById("plus").addEventListener("click", buttonPlus);
document.getElementById("minus").addEventListener("click", buttonMinus);
document.getElementById("divide").addEventListener("click", buttonDivide);
document.getElementById("return").addEventListener("click", buttonReturn, false);
document.getElementById("clear").addEventListener("click", buttonClear);

