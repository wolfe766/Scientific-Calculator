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
    - factor -> {mult-op factor}

  parameters: 
    -tokenQueue: a queue of tokens containing a term we want to parse

  return: the value of the term
*/
function calculateTerm(tokenQueue) {

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

}
