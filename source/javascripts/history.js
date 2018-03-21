/*CREATED: Sam Wolfe 3/18/2018
Description: This file manages both the smaller history 
box and the big history box. 
*/

//Number of entries to display in the history at one time
//Edit to account for size of history display
const BIG_HISTORY_ENTRY_COUNT = 7;

/*CREATED: Sam Wolfe 3/18/2018
Description: Constructor method for the Entry object.

Parameters:
  eq: String - The equation
  ans: String - The Answer (or Error)
*/
function Entry(eq, ans){
  this.equation = eq;
  this.answer = ans;
}

/*CREATED: Sam Wolfe 3/18/2018
Description: Controller object for everything related to the history boxes
*/
var historyController = 
{
  //The stack of all past entries.
  entryStack: [],

  //Determines current position of big history box in the stack of entries
  historyOffset: 0,

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Generates an HTML element to place inside of the
  history box.

  Parameters:
      entry: Entry - Object containing information to be contained in element
  */
  generateHistoryElement: function(entry){
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

    //Add generated elements to appropriate containers
    historyElement.appendChild(eq);
    historyElement.appendChild(ans);

    return historyElement;
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Generates the object that appears above the calculator

  Parameters:
   entry: Entry - The entry to be written
  */
  generateSmallHistoryElement: function(entry){
    var element = document.createElement("p");
    var eq = this.prettifyEquation(entry.equation);
    fullText = eq + " = " + entry.answer;
    element.innerHTML = fullText;
    return element;
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Prints spaces before and after operators
  in order to generate a more pleasant visual output

  Parameters:
    eq: String - The equation to be prettified

  Returns:
    Prettified equation string
  */
  prettifyEquation: function(eq){
    var updated = eq.replace(/\+/g," + ");
    updated = updated.replace(/-/g," - ");
    updated = updated.replace(/\//g," / ");
    updated = updated.replace(/\*/g," * ");
    return updated;
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Prints the given entry to the approriate history container
  and updates history containers accordingly.

  Parameters:
   entry: Entry - The entry to be written to history
  */
  addToHistory: function(entry){
    //Add this entry to the stack
    this.entryStack.push(entry);

    //Create HTML elements for approriate history containers
    var bigContainer = document.getElementById("bigHistory");
    var smallContainer = document.getElementById("smallHistory");

    historyElementBig = this.generateHistoryElement(entry);

    //Only add this element to the big visual history if they aren't scrolled up
    if(this.historyOffset == 0){
      bigContainer.insertBefore(historyElementBig,bigContainer.firstChild);
    }else{
      this.historyOffset++;
      scroll = document.getElementById("scrollToBottom");
      scroll.style.background = "#bb0000";
    }

    //do not print small history of the result is an error
    if(!isNaN(entry.answer)){
      var historyElementSmall = this.generateSmallHistoryElement(entry);
      smallContainer.replaceChild(historyElementSmall, smallContainer.childNodes[0]);
    }
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Scroll up one entry in the big history pane
  */
  scrollUp: function(){
    console.log("scrolling up");
    if((this.historyOffset + BIG_HISTORY_ENTRY_COUNT) > this.entryStack.length){
      //do not scroll
    }else{
      this.historyOffset++;
      bigContainer = document.getElementById("bigHistory");
      bigHistory.removeChild(bigHistory.firstChild);
      document.getElementById("scrollToBottom").style.display = "block";
    }
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Scroll down one entry in the big history pane
  */
  scrollDown: function(){
    console.log("scrolling down");
    if(this.historyOffset == 0){
      //do not scroll
    }else{
      this.historyOffset--;
      bigContainer = document.getElementById("bigHistory");
      historyElement = this.generateHistoryElement(this.entryStack[this.entryStack.length - 1 - this.historyOffset]);
      bigHistory.insertBefore(historyElement, bigContainer.firstChild);

      //Hide the scrollToBottom button when at the bottom of the list
      if(this.historyOffset == 0){
        scroll = document.getElementById("scrollToBottom");
        scroll.style.display = "none";
        scroll.style.background = "black";
      }
   }
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Scroll down to the first entry
  */
  scrollToBottom: function(){
    console.log("scrolling to bottom");
    scroll = document.getElementById("scrollToBottom");
    scroll.style.background = "black";
    while(this.historyOffset != 0){
      this.scrollDown();
    }
  }
};

/*CREATED: Sam Wolfe 3/18/2018

Description: This is the controller object for everything related
to memory. Properties include the values for ans and the current 
value stored in memory.
*/
var memoryController = 
{
  ansValue: null,
  memValue: null,

  /*CREATED: Sam Wolfe 3/18/2018

  Description: Prints the string "ans" to the display
  This string is handled by the preprocessor
  */
  ansToString: function(){
    inputObject.addToString('ans');
  },

  /*CREATED: Sam Wolfe 3/18/2018

  Description: Clears the current value stored in memory
  disables all memory buttons
  */
  memoryClear: function(){
    this.memValue = null;
    disableAllMemoryButtons();
    console.log("Memory Cleared: " + this.memValue);
    this.updateMemoryDisplay(true);
  },

  /*CREATED: Sam Wolfe 3/18/2018

  Description: Stores the current value in the display to memory
  enables all memory buttons upon success
  */
  memoryStore: function(){
    var eq = inputObject.peakString();
    var trigMode = inputObject.returnTrigMode();
    //Null checking for ans value is handled in the preprocessor
    eq = preprocess(eq,this.ansValue);
    eq = tokenizeExpression(eq);
    eq = calculateExpression(eq, trigMode);
    if(isNaN(eq)){
      console.log("Memory Store Failed -- RDP returned error: " + eq);
    }else{
      this.memValue = eq;
      console.log("Memory Store Success -- New Value: " + this.memValue);

      //Enable memory buttons on success
      enableAllMemoryButtons();
      this.updateMemoryDisplay();
    }
  },

  /*CREATED: Sam Wolfe 3/18/2018

  Description: Adds the current value in the display to the
  value stored in memory. 
  */
  memoryPlus: function(){
    var eq = inputObject.peakString();
    var trigMode = inputObject.returnTrigMode();
    eq = preprocess(eq,this.ansValue);
    eq = tokenizeExpression(eq);
    eq = calculateExpression(eq, trigMode);
    if(isNaN(eq)){
      console.log("Memory Plus Failed -- RDP returned error: " + eq);
    }else{
      this.memValue += eq;
      console.log("Memory Add Success -- New Value: " + this.memValue);
      this.updateMemoryDisplay();
    }
  },

  /*CREATED: Sam Wolfe 3/18/2018

  Description: Prints the string "ans" to the display
  This string is handled by the preprocessor
  */
  memoryMinus: function(){
    var eq = inputObject.peakString();
    var trigMode = inputObject.returnTrigMode();
    eq = preprocess(eq,this.ansValue);
    eq = tokenizeExpression(eq);
    eq = calculateExpression(eq, trigMode);
    if(isNaN(eq)){
      console.log("Memory Minus Failed -- RDP returned: " + eq);
    }else{
      this.memValue -= eq;
      console.log("Memory Subtract Success -- New Value: " + this.memValue);
      this.updateMemoryDisplay();
    }
  },

  /*CREATED: Sam Wolfe 3/18/2018

  Description: Prints the current value in memory to the screen
  */
  memoryRecall: function(){
    inputObject.addToString(this.memValue);
  },

  /*CREATED: Sam Wolfe 3/21/2018

  Descriptions: Updates the on screen view of the memory value
  */
  updateMemoryDisplay: function(clear = false){
    var display = document.getElementById("memoryValue");
    if(!clear){
      var fullText = "Memory Value: ";
      fullText += this.memValue.toString();
      display.innerHTML = fullText;
    }else{
      display.innerHTML = "";
    }
  }
};