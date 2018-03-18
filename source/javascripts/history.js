/*CREATED: Sam Wolfe 3/18/2018
Description: This file manages both the smaller history 
box and the big history box. 
*/

//Number of entries to display in the history at one time
//Edit to account for size of history display
const BIG_HISTORY_ENTRY_SIZE = 7;
const SMALL_HISTORY_ENTRY_SIZE = 2;

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

  //Num entries currently in each history box
  largeHistoryEntryCount: 0,
  smallHistoryEntryCount: 0,

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
    historyElementSmall = historyElementBig.cloneNode(true);

    bigContainer.insertBefore(historyElementBig,bigContainer.firstChild);
    smallContainer.insertBefore(historyElementSmall,smallContainer.firstChild);

    //Increment history count, remove overflow
    this.largeHistoryEntryCount++;
    this.smallHistoryEntryCount++;
    historyController.removeHistoryOverflow();
  },

  /*CREATED: Sam Wolfe 3/18/2018
  Description: Adjusts the view of the HTML object when the history
  boxes become full
  */
  removeHistoryOverflow: function (){
    if (this.largeHistoryEntryCount >= BIG_HISTORY_ENTRY_SIZE){
      bigContainer = document.getElementById("bigHistory");
      bigContainer.removeChild(bigContainer.lastChild);
      this.largeHistoryEntryCount--;
    }

    if (this.smallHistoryEntryCount >= SMALL_HISTORY_ENTRY_SIZE){
      smallContainer = document.getElementById("smallHistory");
      smallContainer.removeChild(smallContainer.lastChild);
      this.smallHistoryEntryCount--;
    }
  }
};