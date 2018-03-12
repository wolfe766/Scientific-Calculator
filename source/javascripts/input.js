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

  returns:
    undefined
*/
function addToString(element) {

}


/*
  CREATED: David Levine 03/12/2018

  Description: Returns input string to user

  parameters: 
    element: element to add to string

  returns:
    undefined
*/
function returnInputString() {

}

/*
  CREATED: David Levine 03/12/2018
  
  Description: shifts the cursor one position to the left
*/
function shiftCursorLeft() {

}

/*
  CREATED: David Levine 03/12/2018
  
  Description: shifts the cursor one position to the left
*/
function shiftCursorRight() {

}

/*
  CREATED: David Levine 03/12/2018
  
  Description: writes the updated input to the DOM 

  parameters:
    htmlEl: the html element where you want to write input to

  updates:
    the inner html specified at htmlEl
*/
function writeInputToDOM(htmlEl) {

}


/* 
  CREATED: David Levine 03/12/2018

  Description: Used to return an object that lets a user interact with the 
  html box on the web gui. 

  parameters: 
    htmlEl - an element from the DOM which a user would like to write inner html to.
*/ 
function input(htmlEl) {
  /* initalize properties */
  this.leftString = "";
  this.rightString = "";
  this.cursor = "<span>|</span>";
  this.htmlEl = htmlEl;

  /* Functions to manipulate input string */
  this.addToString = addToString;
  this.returnInputString = returnInputString;
  this.shiftCursorLeft = shiftCursorLeft; 
  this.shiftCursorRight = shiftCursorRight;   
}
