/*
  CREATED: David Levine 03/12/2018

  Description: The following file contains the necessary methods to
  implement a recursive descent parser needed to implement the 
  functionality of our calculator. The CFG implemented can be found below:

  NOTES ON CFG: 
    - expr is our start symbol. 
    - expr, term, and factor are non-terminal. All other symbols are terminal.

  expr -> term {add-op term}
  term -> factor {mult-op factor}
  factor -> (expr)|number|function_name(expr)|pow(expr,expr)
  add-op -> +|-
  mult-op -> *|/
  function_name -> fact|sin|cos|tan|sqrt
*/


/*
  CREATED: David Levine 03/12/2018

  Description: implements the parse method for the non-terminal 
  symbol term. A term consists of zero or more mulitplication operations against 
  another term. Using a CFG, the equivalent derivation is: 
    - term -> factor {mult-op factor}

  Implementation heavily guided by OSU CSE 2231 Recursive Descent Parsing slides,
  which can be found here: 
      -http://web.cse.ohio-state.edu/software/2231/web-sw2/extras/slides/27.Recursive-Descent-Parsing.pdf

  parameters: 
    -tokenQueue: a queue of tokens containing a term we want to parse

  return: the value of the term
*/
function calculateTerm(tokenQueue) {
  var value = calculateFactor(tokenQueue);
  /* begin looping for multiplication operations */
  while (tokenQueue[0] == "*" || tokenQueue[0] == "/") {
    var operation = tokenQueue.shift();
    if (operation == "*") {
      value *= calculateFactor(tokenQueue);
    } else {
      value /= calculateFactor(tokenQueue);
    }
  }
  return value;
}

/*
  CREATED: David Levine 03/12/2018

  Description: implements the parse method for the non-terminal 
  symbol factor. Using a CFG, the equivalent derivation is:
    - factor -> (expr)|number|function_name(expr)|pow(expr,expr) 

  parameters: 
    -tokenQueue: a queue of tokens containing a factor we want to parse.

  return: the value of the factor.
*/
function calculateFactor(tokenQueue) {
  /* Establish valid unary function names to check for */
  funcNames = ["fact", "sin", "cos", "tan", "sqrt"];
  var value;
  var token = tokenQueue.shift();    
  /* expression wraped in parenthesis */
  if (token == "(") {
    value = calculateExpression(tokenQueue);
    /* remove trailing parenthesis */
    tokenQueue.shift();
  /* expression wrapped in a uniary function */
  } else if (funcNames.includes(token)) {
    var funcString = funcNames[funcNames.indexOf(token)];
    value = evaluateFunction(funcString, parseFloat(tokenQueue.shift));
    /* remove trailing parenthesis */
    tokenQueue.shift();
  /* Two expressions wrapped in a power function*/
  } else if (token == "pow") {
    /* discard "pow" and "(" tokens */
    tokenQueue.shift();
    tokenQueue.shift();
    /* evaluate first and second expression in pow */
    var expr1val = calculateExpression(tokenQueue);
    tokenQueue.shift();
    var expr2val = calculateExpression(tokenQueue);
    /* calculate the power value */
    value = pow(expr1val, expr2val);
    /* remove trailing parenthesis */
    tokenQueue.shift();
  /* otherwise, we are only dealing with a number */
  } else {
    value = parseFloat(token);
  }
  return value;
}


/*
  CREATED: David Levine 03/12/2018

  Description: calculates the value of a unary function given 
  a string representing the function and the corresponding value
  to evaluate.

  parameters: 
    -funcString: a string representing one of five supported functions, 
     "fact" for factorial, "sin" for sine, "cos" for cosine, "tan" for tangent,
     and "sqrt" for square root.
    -funcParam: the parameter to pass into the function.

  return: the value of the factor.
*/
function evaluateFunction(funcString, funcParam) {
  var valToReturn;
  switch (funcString) {
    case "fact":
      valToReturn = factorial(funcParam);
      break;

    case "sin":
      valToReturn = sin(funcParam * Math.PI / 180);
      break;

    case "cos":
      valToReturn = cos(funcParam * Math.PI / 180);
      break;

    case "tan":
      valToReturn = tan(funcParam * Math.PI / 180);
      break;

    case "sqrt":
      valToReturn = sqrt(funcParam);
      break;
  }

  return valToReturn;
}

/*
  CREATED: David Levine 03/12/2018

  Description: recursively calculates the factorial of a
  given number.

  parameters: 
    -value: the number to find the factorial of

  requires: value is greater than 0

  return: the factorial value.
*/
function factorial(value) {
  returnVal = 0;
  if (value != 0) {
    returnVal = value * factorial(value - 1);
  }
  return returnVal;
}
