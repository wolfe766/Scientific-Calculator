/*
  CREATED: Henry Karagory 3/12/2018
  Description:  This file contains the implementation of the expression tokenizer
  function tokenizeExpression and helper functions.
*/

/*
  CREATED: Henry Karagory 3/12/2018
  Description: Accepts a string and returns true if the string represents
  a number, false otherwise.

  Parameters:
    nunberString: A string.
*/
function isANumber(numberString){
    return !isNaN(numberString);
}


/*
  CREATED: Henry Karagory 3/12/2018
  Description: Accepts a string and returns true if the string is a valid
  single character symbol in an expression, false otherwise.

  Parameters: 
    symbol: A string.
*/
function isASimpleSymbol(symbol){
    var symbolsArray = ["(", ")", "+", "-", "*","!", "/", ","];

    return symbolsArray.includes(symbol);
}

/*
  CREATED: Henry Karagory 3/12/2018
  Description: Accepts a string and returns true if the string is a valid
  funcition name in an expression, false otherwise.

  Parameters:
    name: A string.
*/
function isAFunctionName(name){
    var functionNames = ["sin","fact", "cos", "tan", "inv", "pow"];

    return functionNames.includes(name);
}

/*
  CREATED: Henry Karagory 3/12/2018
  Description: Accepts an integer index and an expression string and returns the
  longest subtring of expression starting at startIndex that is a number.

  Parameters:
    startIndex: The index in the expression string where the number will begin.
    expression: The expression string.  Must only contain simple symbols,
    numbers, and function names.
*/
function longestNumberFromPosition(startIndex, expression){
    var endIndex = startIndex + 1;

    while(endIndex < expression.length){
        if(isANumber(expression.substring(startIndex, endIndex+1))){
            endIndex++;
        }else{
            break;
        }
    }
    return expression.substring(startIndex, endIndex);
}

/*
  CREATED: Henry Karagory 3/12/2018
  Description: Accepts an integer index and an expression string and returns the
  longest subtring of expression starting at startIndex that is a number.

  Parameters:
    startIndex: The index in the expression string where the function name will begin.
    expression: The expression string.  Must only contain simple symbols,
    numbers, and function names.
*/
function functionNameFromPosition(startIndex, expression){
    var endIndex = startIndex + 1;
    var alphaRegEx = /^[a-zA-Z]+$/;

    while(endIndex < expression.length && alphaRegEx.exec(expression.substring(startIndex, endIndex)) != null){
        if(alphaRegEx.exec(expression.substring(startIndex, endIndex+1)) != null){
            endIndex++;
        }else{
            break;
        }
    }
    return expression.substring(startIndex, endIndex);
}

/*
  CREATED: Henry Karagory 3/12/2018
  Description: This function accepts a string representing 
  an expression as a string with no spaces.  The function returns
  the tokenized version of the expression.

  Parameters:
    expression:  The expression string.  Must only contains simple symbols,
    numbers, and function names.
*/
function tokenizeExpression(expression){
    var index = 0;
    var tokenQueue = [];

    while(index<expression.length){
        var startChar = expression.charAt(index);
        // Three cases to consider.  Simple symbol, number, and function name.
        if(isASimpleSymbol(startChar)){
            tokenQueue.push(startChar);
            index = index + 1;
        }else if(isANumber(startChar)){
            // Push the number starting at position index onto the queue.
            var numToPush = longestNumberFromPosition(index, expression);
            tokenQueue.push(numToPush);
            index = index + numToPush.length;
        }else{
            // Push the function name starting at position index onto the queue.
            var functionName = functionNameFromPosition(index, expression);
            tokenQueue.push(functionName);
            index = index + functionName.length;
        }
    }
    return tokenQueue;
}