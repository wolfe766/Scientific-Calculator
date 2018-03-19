/*CREATED: Sam Wolfe 3/18/2018
Description: This file manages both the smaller history 
box and the big history box. 
*/

//TODO: Bind scrollUp/Down to mousewheel
//TODO: ANS object, --> preprocess stirng to replace ANS with actual value
//TODO: Memory feature

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
  //We could automatically add this to the entryStack right here if desired
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
    historyElementSmall = this.generateHistoryElement(entry);

    //Only add this element to the big visual history if they aren't scrolled up
    if(this.historyOffset == 0){
      bigContainer.insertBefore(historyElementBig,bigContainer.firstChild);
    }else{
      //TODO: Display "Scroll to bottom"
      this.historyOffset++;
    }
    smallContainer.insertBefore(historyElementSmall,smallContainer.firstChild);
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Scroll up one entry in the big history pane
  */
  scrollUp: function(){
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
    if(this.historyOffset == 0){
      //do not scroll
    }else{
      this.historyOffset--;
      bigContainer = document.getElementById("bigHistory");
      historyElement = this.generateHistoryElement(this.entryStack[this.entryStack.length - 1 - this.historyOffset]);
      bigHistory.insertBefore(historyElement, bigContainer.firstChild);

      //Hide the scrollToBottom button when at the bottom of the list
      if(this.historyOffset == 0){
        document.getElementById("scrollToBottom").style.display = "none";
      }
   }
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Scroll down to the first entry
  */
  scrollToBottom: function(){
    while(this.historyOffset != 0){
      this.scrollDown();
    }
  }
};