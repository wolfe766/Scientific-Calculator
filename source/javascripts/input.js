/*
  CREATED: David Levine 03/12/2018
  MODIFIED: Sam Wolfe 03/18/2018
    -Added preprocessor function
  The following file is responsible for dealing with all input 
  to the calculator through the gui.
*/

/*
  CREATED: David Levine 03/12/2018

  Description: Add element to string based off cursor location

  parameters: 
    element: element to add to string

  requires:
    function is called through an input object
  
  updates:
    this.leftString
    the inner html specified at htmlEl in the calling object
*/
function addToString(element) {
  this.leftString += element.toString();
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
}

/*
  CREATED: David Levine 03/14/2018

  Description: Removes element from string based off cursor location
               in a fashion similar to a traditional backspace function.

  requires:
    function is called through an input object
  
  updates:
    this.leftString
    the inner html specified at htmlEl in the calling object
*/
function deleteFromString() {
  this.leftString = this.leftString.slice(0, this.leftString.length - 1);
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
}

/*
  CREATED: David Levine 03/12/2018

  Description: Returns the current input without clearing string
               or updating the inner html of htmlEl.

  parameters: 
    element: element to add to string

  requires:
    function is called through an input object

  returns:
    the input to the left of the cursor and right of the cursor, concatenated.
*/
function peakString() {
  return this.leftString + this.rightString;
}

/*
  CREATED: David Levine 03/12/2018

  Description: Returns input string to user, clears string, and
               writes string to the htmlEl dom element.

  clears: 
    this.leftString
    this.rightString

  requires:
    function is called through an input object

  returns:
    the input to the left of the cursor and right of the cursor, concatenated.
*/
function returnInputString() {
  var stringToReturn = this.leftString + this.rightString;
  /* clear string and write it to input box*/
  this.leftString = "";
  this.rightString = "";
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
  return stringToReturn;
}

/*
  CREATED: Sam Wolfe 03/18/2018
  MODIFIED: Sam Wolfe 3/20/2018
    -Bugfix: Now replaces all instances of 'ans'
  MODIFIED: Henry Karagory 03/21/2018
    - The function will now insert implied multiplication symbols.
  MODIFIED: Sam Wolfe 03/21/2018
    -Added parameter to disable implied multiplcation

  Description: Attempts to fix unbalanced parentheses
  Replaces "ans" with approriate value

  Parameters:
    eq: String - Equation stored as a string
    ansValue: Number - Value to replace all 'ans' substrings with
    replace: Boolean - If false, the preprocessor will not add mult symbols

  Return:
    The updated equation
*/
function preprocess(eq, ansValue, replace = true){

  if(replace){
    // Global regular expression to find missing implied multiplication symbols.
    var missingMultSymbolNoAnsRE = /\)\d|\d\(|\d[a-zA-Z]/g;

    // Insert a multiplication symbol everywhere the regular expression matches.
    var multSymbolArray = [];
    while ((multSymbolArray = missingMultSymbolNoAnsRE.exec(eq)) !== null) {
      var indexToInsertMultSym = multSymbolArray.index;
      eq = eq.slice(0, indexToInsertMultSym+1) + "*" + eq.slice(indexToInsertMultSym+1, eq.length);
    }

    var missingMultSymbolAnsRE = /ans[a-zA-Z]|\)ans|ans\(|ans\d]/g;
    multSymbolArray = [];
    while ((multSymbolArray = missingMultSymbolAnsRE.exec(eq)) !== null) {
      var indexToInsertMultSym = multSymbolArray.index;
      eq = eq.slice(0, indexToInsertMultSym+3) + "*" + eq.slice(indexToInsertMultSym+3, eq.length);
    }
  }

  //Replace the ans string with the actual value
  if ((ansValue != null) && (eq.includes("ans"))){
    eq = eq.replace(/ans/g,'(' + ansValue.toString() + ')');
  }

  console.log("Processed eq: " + eq);

  /*Add up the total number of left paren
  Subtract off the total num of right paren
  The result is the number of left paren to add */
  var openBracketCount = 0;
  for(var i = 0; i < eq.length; i++){
    if(eq.charAt(i) == '('){
      openBracketCount++;
    }else if (eq.charAt(i) == ')'){
      openBracketCount--;
    }
  }

  if(openBracketCount > 0){
    //The previous answer warning state is updated so that "paren were modifed"
    //Notification can be displayed
    previousResult.wasWarning = true;
    for(;openBracketCount > 0; openBracketCount--){
      eq = eq + ')';
    }
  }

  return eq;
}

/*
  CREATED: Sam Wolfe 03/20/2018

  Description: disables or enables certain memory buttons when
  there is no value stored in memory

  NOTE: This currently requires that buttons have no other class value
  than "enabled" or "disabled" this can be changed later if necessary. 

  Parameters:
    buttonID: CSS selector ID of the HTML object 
*/
function enableButton(buttonID){
  var button = document.getElementById(buttonID);
  button.className = "enabled";
}

function disableButton(buttonID){
  var button = document.getElementById(buttonID);
  button.className = "disabled";
}

/*CREATED: Sam Wolfe 03/20/2018

Description: Disables / Enables all memory buttons that should not
function when no value is stored in memory.
*/
function disableAllMemoryButtons(){
  disableButton("mr");
  disableButton("mAdd");
  disableButton("mSub");
  disableButton("mc");
}

function enableAllMemoryButtons(){
  enableButton("mr");
  enableButton("mAdd");
  enableButton("mSub");
  enableButton("mc");
}

/*CREATED: Sam Wolfe 03/20/2018

Description: Toggles the "An attempt was made to fix paren" notification
*/
function setNotification(status){
  var notEl = document.getElementById("notification");
  if(status == 0){
    notEl.style.background = "rgba(0,255,0,.1)";
    notEl.innerHTML = "\u2714";
  }else if(status == 1){
    notEl.style.background = "rgba(255,128,0,.2)";
    notEl.innerHTML = "An Attempt Was Made To Fix Parentheses";
  }else if(status == 2){
    notEl.style.background = "rgba(255,0,0,.1)";
    notEl.innerHTML = "Error :(";
  }

  //We always reset the previous result upon updating this banner
  previousResult.reset();
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: shifts the cursor one position to the left

  requires:
    function is called through an input object
  
  updates:
    this.leftString
    this.rightString
    the inner html specified at htmlEl in the calling object
*/
function shiftCursorLeft() {
  var lastCharFromLeftString = this.leftString.charAt(this.leftString.length - 1);
  this.rightString = lastCharFromLeftString + this.rightString;
  this.leftString = this.leftString.slice(0, this.leftString.length - 1);
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: shifts the cursor one position to the right

  requires:
    function is called through an input object
  
  updates:
    this.leftString
    this.rightString
    the inner html specified at htmlEl in the calling object
*/
function shiftCursorRight() {
  this.leftString += this.rightString.charAt(0);
  this.rightString = this.rightString.slice(1, this.rightString.length);
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: clears the input box

  requires:
    function is called through an input object
  
  updates:
    this.leftString
    this.rightString
    the inner html specified at htmlEl in the calling object
*/
function clearInput() {
  this.leftString = "";
  this.rightString = "";
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: writes the updated input to the DOM 

  parameters:
    htmlEl: the html element where you want to write input to

  updates:
    the inner html specified at htmlEl
*/
function writeInputToDOM(htmlEl, leftString, rightString, cursor) {
  htmlEl.innerHTML = leftString + cursor + rightString;
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: Changes the toggle mode from deg to rad, or 
               from rad to deg.

  requires:
    function is called through an input object
  
  updates:
    this.toggleTrigMode
*/
function toggleTrigMode() {
  if (this.trigMode === "deg") {
    this.trigMode = "rad";
  } else {
    this.trigMode = "deg";
  }
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: Returns a string containing either
               "deg" or "rad" depending on the active
               string mode.

  requires:
    function is called through an input object
  
  updates:
    this.toggleTrigMode
*/
function returnTrigMode() {
  return this.trigMode;
}


/* 
  CREATED: David Levine 03/12/2018
  MODIFIED: David Levine 03/14/2018
    -Moved the input functions into another class, which 
     are now chained using prototyping.

  Description: Used to return an object that lets a user interact with the 
  html box on the web gui. 

  parameters: 
    htmlEl - an element from the DOM which a user would like to write inner html to.
*/ 
function Input(htmlEl) {
  /* initalize properties */
  this.leftString = ""; /* string to the left of the cursor */
  this.rightString = ""; /* string to the right of the cursor */
  this.cursor = "|";
  this.htmlEl = htmlEl;
  this.trigMode = "deg";

  /* write cursor to input box during initalization */
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor)
  
}

/* 
  CREATED: David Levine 03/14/2018

  Description: Object containing properites to their corresponding functions
               for handling input. 

*/ 
function InputFunctions() {
  this.addToString = addToString;
  this.returnInputString = returnInputString;
  this.peakString = peakString;
  this.shiftCursorLeft = shiftCursorLeft; 
  this.shiftCursorRight = shiftCursorRight;
  this.clearInput = clearInput;
  this.deleteFromString = deleteFromString;
  this.toggleTrigMode = toggleTrigMode;
  this.returnTrigMode = returnTrigMode;
}

/* Chain Input to InputFunctions through prototype  */
Input.prototype = new InputFunctions();
