/*
  CREATED: David Levine 03/12/2018
  
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
    the inner html specified at htmlEl in the calling object
*/
function addToString(element) {
  this.leftString += element.toString();
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
}


/*
  CREATED: David Levine 03/12/2018

  Description: Returns input string to user

  parameters: 
    element: element to add to string

  requires:
    function is called through an input object

  returns:
    the input to the left of the cursor and right of the cursor, concatenated.
*/
function returnInputString() {
  var stringToReturn = this.leftString + this.rightString
  /* clear string and write it to input box*/
  this.leftString = "";
  this.rightString = "";
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
  return stringToReturn;
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: shifts the cursor one position to the left

  requires:
    function is called through an input object
  
  updates:
    the inner html specified at htmlEl in the calling object
*/
function shiftCursorLeft() {
  lastCharFromLeftString = this.leftString.charAt(this.leftString.length - 1);
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
    the inner html specified at htmlEl in the calling object
*/
function shiftCursorRight() {
  firstCharFromRightString = this.rightString.charAt(0);
  this.leftString += firstCharFromRightString;
  this.rightString = this.rightString.slice(1, this.rightString.length);
  writeInputToDOM(this.htmlEl, this.leftString, this.rightString, this.cursor);
}

/*
  CREATED: David Levine 03/12/2018
  
  Description: clears the input box

  requires:
    function is called through an input object
  
  updates:
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

  Description: Used to return an object that lets a user interact with the 
  html box on the web gui. 

  parameters: 
    htmlEl - an element from the DOM which a user would like to write inner html to.
*/ 
function Input(htmlEl) {
  /* initalize properties */
  this.leftString = ""; /* string to the left of the cursor */
  this.rightString = ""; /* string to the right of the cursor */
  this.cursor = "<span>|</span>";
  this.htmlEl = htmlEl;

  /* Functions to manipulate input string */
  this.addToString = addToString;
  this.returnInputString = returnInputString;
  this.shiftCursorLeft = shiftCursorLeft; 
  this.shiftCursorRight = shiftCursorRight;
  this.clearInput = clearInput;
}
