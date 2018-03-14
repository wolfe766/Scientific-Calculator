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
  TODO: Consider parameters from the view that determine how the trig. functions will be
  interpreted, i.e. is the calculator in degree or radian mode.  Possible solution, add
  an extra parameter view object to each non terminal parsing method that contains this 
  information.
*/

/*
  CREATED: Henry Karagory 03/12/2018

  Description:  Parsing function corresponding to the expr non-terminal
  symbol.  

  parameters:
    tokenQueue: A queue of tokens with expr as a prefix.
    trigMode: A string giving the interpretation of the argument to trigonometric 
    functions.  Either "rad" or "deg".

  return:  The value of the expression.
*/
function calculateExpression(tokenQueue, trigMode="rad"){
  var exprValue = calculateTerm(tokenQueue, trigMode);

  while(tokenQueue[0] == "+" || tokenQueue[0] == "-" ){
    var operation = tokenQueue.shift();
    if(operation == "+"){
      exprValue = exprValue + calculateTerm(tokenQueue, trigMode);
    }else{
      exprValue = exprValue - calculateTerm(tokenQueue, trigMode);
    }
  }
  return exprValue;
}

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
    -trigMode: A string giving the interpretation of the argument to trigonometric 
    functions.  Either "rad" or "deg".

  return: the value of the term
*/
function calculateTerm(tokenQueue, trigMode) {
  var value = calculateFactor(tokenQueue, trigMode);
  /* begin looping for multiplication operations */
  while (tokenQueue[0] == "*" || tokenQueue[0] == "/") {
    var operation = tokenQueue.shift();
    if (operation == "*") {
      value *= calculateFactor(tokenQueue, trigMode);
    } else {
      value /= calculateFactor(tokenQueue, trigMode);
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
    -trigMode: A string giving the interpretation of the argument to trigonometric 
    functions.  Either "rad" or "deg".

  return: the value of the factor.
*/
function calculateFactor(tokenQueue, trigMode) {
  /* Functions names that may appear in the factor. */
  var funcNames = ["fact", "sin", "cos", "tan", "sqrt"];
  var value;
  var token = tokenQueue.shift();    
  
  /* Case expression wraped in parenthesis */
  if (token == "(") {
    value = calculateExpression(tokenQueue, trigMode);
    tokenQueue.shift();
  /* Case function call */
  } else if (funcNames.includes(token)) {
    tokenQueue.shift();
    var funcString = token;
    var funcParam = calculateExpression(tokenQueue, trigMode);
    value = evaluateFunction(funcString, funcParam, trigMode);
    tokenQueue.shift();
  /* Case two expressions wrapped in a power function*/
  } else if (token == "pow") {
    tokenQueue.shift();
    /* Evaluate first and second expression in pow */
    var expr1val = calculateExpression(tokenQueue, trigMode);
    tokenQueue.shift();
    var expr2val = calculateExpression(tokenQueue, trigMode);
    value = Math.pow(expr1val, expr2val);
    tokenQueue.shift();
  /* Case number */
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
    -funcString: A string representing one of five supported functions, 
     "fact" for factorial, "sin" for sine, "cos" for cosine, "tan" for tangent,
     and "sqrt" for square root.
    -funcParam: The parameter to pass into the function.
    -trigMode: A string giving the interpretation of the argument to trigonometric 
    functions.  Either "rad" or "deg".

  return: the value of the factor.
*/
function evaluateFunction(funcString, funcParam, trigMode) {
  var valToReturn;
  switch (funcString) {
    case "fact":
      valToReturn = factorial(funcParam);
      break;

    case "sin":
      if(trigMode == "rad"){
        valToReturn = Math.sin(funcParam);
      }else{
        valToReturn = Math.sin(funcParam * Math.PI/180.0);
      }
      break;

    case "cos":
      if(trigMode == "rad"){
        valToReturn = Math.cos(funcParam);
      }else{
        valToReturn = Math.cos(funcParam * Math.PI/180.0);
      }
      break;

    case "tan":
      if(trigMode == "rad"){
        valToReturn = Math.tan(funcParam);
      }else{
        valToReturn = Math.tan(funcParam * Math.PI/180.0);
      }
      break;

    case "sqrt":
      valToReturn = Math.sqrt(funcParam);
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
  returnVal = 1;
  if (value != 0) {
    returnVal = value * factorial(value - 1);
  }
  return returnVal;
}
