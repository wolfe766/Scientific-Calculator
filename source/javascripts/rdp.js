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
  TODO: Need to add mechanism for recovering from false input. Some cases to consider:
    -Mismatched parenthesis
    -Domain of factorial function
    -multiple occurances of add-ops or mult-ops (**, ++, /*, etc.)
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
    var exprValue = calculateExpressionRecursive(tokenQueue, trigMode);
    if(tokenQueue.length != 0){
        return "ERR: SYNTAX";
    }

    return exprValue;
}

/*
  CREATED: Henry Karagory 03/12/2018

  Description:  Parsing function corresponding to the expr non-terminal
  symbol. Involved in mutual recursion with calculateTerm and calculateFactor functions. 

  parameters:
    tokenQueue: A queue of tokens with expr as a prefix.
    trigMode: A string giving the interpretation of the argument to trigonometric 
    functions.  Either "rad" or "deg".

  return:  The value of the expression.
*/
function calculateExpressionRecursive(tokenQueue, trigMode){
    var exprValue = calculateTerm(tokenQueue, trigMode);

    // If a string is returned then it is an error message, return the message.
    if(typeof exprValue == "string"){
        return exprValue;
    }

    while(tokenQueue[0] == "+" || tokenQueue[0] == "\u2212" ){
        var operation = tokenQueue.shift();
        if(operation == "+"){
            var exprValueTemp = calculateTerm(tokenQueue, trigMode);
            // If a string is returned then it is an error message, return the message.
            if(typeof exprValueTemp == "string"){
                return exprValueTemp;
            }
            exprValue = exprValue + exprValueTemp;
        }else if (operation == "\u2212"){
            var exprValueTemp = calculateTerm(tokenQueue, trigMode);
            // If a string is returned then it is an error message, return the message.
            if(typeof exprValueTemp == "string"){
                return exprValueTemp;
            }
            exprValue = exprValue - exprValueTemp;
        }
        else {

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
    // If a string is returned then it is an error message, return the message.
    if(typeof value == "string"){
        return value;
    }
    /* begin looping for multiplication operations */
    while (tokenQueue[0] == "*" || tokenQueue[0] == "/") {
        var operation = tokenQueue.shift();
        if (operation == "*") {
            var valueTemp = calculateFactor(tokenQueue, trigMode);
            // If a string is returned then it is an error message, return the message.
            if(typeof valueTemp == "string"){
                return valueTemp;
            }
            value *= valueTemp;
        } else {
            var valueTemp = calculateFactor(tokenQueue, trigMode);
            // If a string is returned then it is an error message, return the message.
            if(typeof valueTemp == "string"){
                return valueTemp;
            }
            value /= valueTemp;
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
    console.log(tokenQueue);
    /* Functions names that may appear in the factor. */
    var funcNames = ["inv","fact", "sin", "cos", "tan", "sqrt"];
    var value;
    var token = tokenQueue.shift();

    /* Case expression wrapped in parenthesis */
    if (token == "(") {
        value = calculateExpressionRecursive(tokenQueue, trigMode);
        // If a string is returned then it is an error message, return the message.
        if(typeof value == "string"){
            return value;
        }
        if (tokenQueue.shift() != ")") { /* It true, mismatched parenthesis */
            value = "ERR: SYNTAX";
        }
        /* Case function call */
    } else if (funcNames.includes(token)) {
        if (tokenQueue.shift() == "(") {
            var funcString = token;
            var funcParam = calculateExpressionRecursive(tokenQueue, trigMode);
            value = evaluateFunction(funcString, funcParam, trigMode);
            // If a string is returned then it is an error message, return the message.
            if(typeof funcParam == "string"){
                return funcParam;
            }
            if (tokenQueue.shift() != ")") {
                value = "ERR: SYNTAX";
            }
        } else {
            value = "ERR: SYNTAX";
        }

        /* Case two expressions wrapped in a power function*/
    } else if (token == "pow") {
        if (tokenQueue.shift() == "(") {
            /* Evaluate first and second expression in pow */
            var expr1val = calculateExpressionRecursive(tokenQueue, trigMode);
            // If a string is returned then it is an error message, return the message.
            if(typeof expr1val == "string"){
                return expr1val;
            }
            if (tokenQueue.shift() == ",") {
                var expr2val = calculateExpressionRecursive(tokenQueue, trigMode);
                // If a string is returned then it is an error message, return the message.
                if(typeof expr2val == "string"){
                    return expr2val;
                }
                value = Math.pow(expr1val, expr2val);
                if (tokenQueue.shift() != ")") {
                    value = "ERR: SYNTAX";
                }
            } else { /* If no comma, then input here is wrong */
                value = "ERR: SYNTAX";
            }
        } else { /* missing parenthesis */
            value = "ERR: SYNTAX";
        }

        /* Case number */
    } else if (!isNaN(token)) {
        value = parseFloat(token);
    } else {
        value = "ERR: SYNTAX"
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

        case "inv":
            valToReturn = 1 / funcParam;
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
            if (checkSqrtArg(funcParam)) {
                valToReturn = Math.sqrt(funcParam);
            } else {
                valToReturn = "ERR: SQRT DOMAIN (NEGATIVE)";
            }
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
    var returnVal = checkFactorialArg(value);
    if (value != 0 && (typeof(returnVal) == "number")) {
        returnVal = value * factorial(value - 1);
    }
    return returnVal;
}


/*
  CREATED: David Levine 3/17/2018

  Description: checks the given value and 
  ensures it is valid for a factorial function
  
  Parameters:
    -arg: the argument passed into the facorial

  Returns: 1 if arg is valid, ERR string describing message otherwise.
*/
function checkFactorialArg(arg) {
    var error = 1;
    if (arg < 0) {
        error = "ERR: FACTORIAL DOMAIN (NEGATIVE)";
    } else if (!Number.isInteger(arg)) {
        error = "ERR: FACTORIAL DOMAIN (NOT INTEGER)";
    }
    return error;
}

/*
  CREATED: David Levine 3/17/2018

  Description: checks the given value and 
  ensures it is valid for a square root function
  
  Parameters:
    -arg: the argument passed into the square root

  Returns: true if arg is valid, false otherwise.
*/
function checkSqrtArg(arg) {
    var isValid = true;
    if (arg < 0) {
        isValid = false;
    }
    return isValid;
}
