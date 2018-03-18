/*
	CREATED: Henry Karagory 3/12/2018
  
	Description: This file contains tests for the functions in rdp.js.
*/

// Simple tests with no parentheses or functions.

QUnit.test( "Calculate Expression Simple Test 1", function( assert ) {
  var tokenQueue = ["3", "+", "3"];
  var expectedValue = 6;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 2", function( assert ) {
  var tokenQueue = ["3"];
  var expectedValue = 3;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 3", function( assert ) {
  var tokenQueue = ["3", "*", "3"];
  var expectedValue = 9;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 4", function( assert ) {
  var tokenQueue = ["4", "*", "5", "+", "1"];
  var expectedValue = 21;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 5", function( assert ) {
  var tokenQueue = ["1", "+", "4", "*", "5"];
  var expectedValue = 21;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 6", function( assert ) {
  var tokenQueue = ["5", "*", "6", "/", "10"];
  var expectedValue = 3;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 7", function( assert ) {
  var tokenQueue = ["5", "+", "5", "*", "6","-", "10", "/", "10"];
  var expectedValue = 34;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 8", function( assert ) {
  var tokenQueue = ["1", "-", "1"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 9", function( assert ) {
  var tokenQueue = ["20123412.47891", "*", "0"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

// Tests with parentheses and no functions

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 1", function( assert ) {
  var tokenQueue = ["(", "1.0101", ")"];
  var expectedValue = 1.0101;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 2", function( assert ) {
  var tokenQueue = ["(", "5.000", ")", "*", "(", "5.", ")"];
  var expectedValue = 25;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 3", function( assert ) {
  var tokenQueue = ["(", "1", "+", "6", ")", "*", "3"];
  var expectedValue = 21;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 4", function( assert ) {
  var tokenQueue = ["(", "1", "+", "6", ")", "-", "(", "1", "+", "(", "3", "-", "2", "*", "2", ")", ")"];
  var expectedValue = 7;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 5", function( assert ) {
  var tokenQueue = ["1", "+", "(", "2", "+", "(", "3", ")", ")"];
  var expectedValue = 6;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

// Tests with trig functions in rad mode with no parentheses

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 1", function( assert ) {
  var tokenQueue = ["sin", "(", "0", ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 2", function( assert ) {
  var argument = (Math.PI/2.0).toString();
  var tokenQueue = ["sin", "(", argument, ")"];
  var expectedValue = 1;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 3", function( assert ) {
  var argument = (Math.PI).toString();
  var tokenQueue = ["sin", "(", argument, ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 4", function( assert ) {
  var argument = (3.0*Math.PI/2.0).toString();
  var tokenQueue = ["sin", "(", argument, ")"];
  var expectedValue = -1;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 5", function( assert ) {
  var argument = (2.0*Math.PI).toString();
  var tokenQueue = ["sin", "(", argument, ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 6", function( assert ) {
  var tokenQueue = ["cos", "(", "0", ")"];
  var expectedValue = 1;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 7", function( assert ) {
  var argument = (Math.PI/2.0).toString();
  var tokenQueue = ["cos", "(", argument, ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 8", function( assert ) {
  var argument = (Math.PI).toString();
  var tokenQueue = ["cos", "(", argument, ")"];
  var expectedValue = -1;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 9", function( assert ) {
  var argument = (3.0*Math.PI/2.0).toString();
  var tokenQueue = ["cos", "(", argument, ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 10", function( assert ) {
  var argument = (2.0*Math.PI).toString();
  var tokenQueue = ["cos", "(", argument, ")"];
  var expectedValue = 1;

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Rad Mode And No Parentheses Test 7", function( assert ) {
  var tokenQueue = ["tan", "(", "0", ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);
  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

// Tests with trig functions in deg mode with no parentheses

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 1", function( assert ) {
  var tokenQueue = ["sin", "(", "90", ")"];
  var expectedValue = 1;

  var actualValue = calculateExpression(tokenQueue, "deg");

  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 2", function( assert ) {
  var tokenQueue = ["sin", "(", "180", ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue, "deg");
  
  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 3", function( assert ) {
  var tokenQueue = ["sin", "(", "270", ")"];
  var expectedValue = -1;

  var actualValue = calculateExpression(tokenQueue, "deg");

  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 4", function( assert ) {
  var tokenQueue = ["sin", "(", "0", ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue, "deg");
  
  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 5", function( assert ) {
  var tokenQueue = ["cos", "(", "90", ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue, "deg");

  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 6", function( assert ) {
  var tokenQueue = ["cos", "(", "180", ")"];
  var expectedValue = -1;

  var actualValue = calculateExpression(tokenQueue, "deg");
  
  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 7", function( assert ) {
  var tokenQueue = ["cos", "(", "270", ")"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue, "deg");

  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Calculate Expression With Trig Functions Deg Mode And No Parentheses Test 8", function( assert ) {
  var tokenQueue = ["cos", "(", "0", ")"];
  var expectedValue = 1;

  var actualValue = calculateExpression(tokenQueue, "deg");
  
  var difference = Math.abs(actualValue - expectedValue);

  assert.equal(difference < .001, true);
});

// Tests evaluating expressions with pow function and no parentheses

QUnit.test( "Calculate Expression With Pow Function And No Parentheses Test 1", function( assert ) {
  var tokenQueue = ["pow", "(", "1", ",", "0", ")"];
  var expectedValue = 1;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Pow Function And No Parentheses Test 2", function( assert ) {
  var tokenQueue = ["pow", "(", "5", ",", "2", ")"];
  var expectedValue = 25;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

// Tests evaluating expressions with pow function and parenthesis
QUnit.test( "Calculate Expression With Pow Function And Parentheses Test 1", function( assert ) {
  var tokenQueue = ["pow", "(", "(", "5", ")", ",", "2", ")"];
  var expectedValue = 25;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Pow Function And Parentheses Test 2", function( assert ) {
  var tokenQueue = ["pow", "(", "(", "5", "+", "7", ")", ",", "2", ")"];
  var expectedValue = 144;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Pow Function And Parentheses Test 3", function( assert ) {
  var tokenQueue = ["pow", "(", "(", "5", "+", "7", ")", ",", "(", "2", "*", "3", ")" , ")"];
  var expectedValue = 2985984;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Pow Function And Parentheses Test 4", function( assert ) {
  var tokenQueue = ["pow", "(", "(", "5", "-", "7", ")", ",", "(", "2", "*", "3", ")" , ")"];
  var expectedValue = 64;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

// Tests evaluating expressions with factorial and no inside parenthesis
QUnit.test( "Calculate Expression With Factorial Function And No Inside Parentheses Test 1", function( assert ) {
  var tokenQueue = ["fact", "(", "5", ")"];
  var expectedValue = 120;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Factorial Function And No Inside Parentheses Test 2", function( assert ) {
  var tokenQueue = ["fact", "(", "5", ")" , "+", "fact", "(", "2", ")"];
  var expectedValue = 122;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});




QUnit.test( "Calculate Expression With Factorial Function And No Inside Parentheses Test 3", function( assert ) {
  var tokenQueue = ["fact", "(", "3", ")", "*", "fact", "(", "0", ")"];
  var expectedValue = 6;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

// Tests evaluating expressions with factorial and inside paraenthese
QUnit.test( "Calculate Expression With Factorial Function And Inside Parentheses Test 1", function( assert ) {
  var tokenQueue = ["fact", "(", "(","3", "*", "3" ,")", ")", "*", "fact", "(", "0", ")"];
  var expectedValue = 362880;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Factorial Function And Inside Parentheses Test 2", function( assert ) {
  var tokenQueue = ["fact", "(", "(","3", "*", "3" ,")", "+", "(","3", "/", "3" ,")", ")"];
  var expectedValue = 3628800;

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});


/*
  Tests for checkFactorialArg
*/

/* tests involving valid factorial arguments */
QUnit.test( "Check Factorial Arg With Valid Arg 1", function( assert ) {
  var arg = 0;
  var expectedValue = 1;

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Factorial Arg With Valid Arg 2", function( assert ) {
  var arg = 3;
  var expectedValue = 1;

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Factorial Arg With Valid Arg 3", function( assert ) {
  var arg = 43365431;
  var expectedValue = 1;

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

/* tests involving negative factorial values */
QUnit.test( "Check Factorial Arg With Negative Arg 1", function( assert ) {
  var arg = -1;
  var expectedValue = "ERR: FACTORIAL DOMAIN (NEGATIVE)";

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Factorial Arg With Negative Arg 2", function( assert ) {
  var arg = -3;
  var expectedValue = "ERR: FACTORIAL DOMAIN (NEGATIVE)";

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Factorial Arg With Negative Arg 3", function( assert ) {
  var arg = -328091;
  var expectedValue = "ERR: FACTORIAL DOMAIN (NEGATIVE)";

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

/* tests involving non-integer values */
QUnit.test( "Check Factorial Arg With Non-Integer Arg 1", function( assert ) {
  var arg = 0.5;
  var expectedValue = "ERR: FACTORIAL DOMAIN (NOT INTEGER)";

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});


QUnit.test( "Check Factorial Arg With Non-Integer Arg 2", function( assert ) {
  var arg = 2.75;
  var expectedValue = "ERR: FACTORIAL DOMAIN (NOT INTEGER)";

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Factorial Arg With Non-Integer Arg 3", function( assert ) {
  var arg = 431.543276;
  var expectedValue = "ERR: FACTORIAL DOMAIN (NOT INTEGER)";

  var actualValue = checkFactorialArg(arg);

  assert.equal(actualValue, expectedValue);
});

/*
  Tests for checkSqrtArg
*/

// tests involving valid arguments
QUnit.test( "Check Sqrt Arg With Valid Arg 1", function( assert ) {
  var arg = 0;
  var expectedValue = true;

  var actualValue = checkSqrtArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Sqrt Arg With Valid Arg 2", function( assert ) {
  var arg = 2;
  var expectedValue = true;

  var actualValue = checkSqrtArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Sqrt Arg With Valid Arg 3", function( assert ) {
  var arg = 12897456.32;
  var expectedValue = true;

  var actualValue = checkSqrtArg(arg);

  assert.equal(actualValue, expectedValue);
});

// tests involving negative arguments
QUnit.test( "Check Sqrt Arg With Negative Arg 1", function( assert ) {
  var arg = -1;
  var expectedValue = false;

  var actualValue = checkSqrtArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Sqrt Arg With Negative Arg 2", function( assert ) {
  var arg = -13214;
  var expectedValue = false;

  var actualValue = checkSqrtArg(arg);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Check Sqrt Arg With Negative Arg 3", function( assert ) {
  var arg = -0.4578156669;
  var expectedValue = false;

  var actualValue = checkSqrtArg(arg);

  assert.equal(actualValue, expectedValue);
});

/*
  Error message detection in RDP.
*/


// Factorial tests
QUnit.test( "Test Error Message With Negative Factorial Argument Test 1", function( assert ) {
  var tokenQueue = ["fact", "(", "-1", ")"];
  var expectedValue = "ERR: FACTORIAL DOMAIN (NEGATIVE)";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});


QUnit.test( "Test Error Message With Negative Factorial Argument Test 2", function( assert ) {
  var tokenQueue = ["fact", "(", "-43254", ")"];
  var expectedValue = "ERR: FACTORIAL DOMAIN (NEGATIVE)";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Error Message With Non-Integer Factorial Argument Test 1", function( assert ) {
  var tokenQueue = ["fact", "(", "0.25243", ")"];
  var expectedValue = "ERR: FACTORIAL DOMAIN (NOT INTEGER)";

  var actualValue = calculateExpression(tokenQueue);

  var difference = Math.abs(expectedValue - actualValue);

  assert.equal(difference < .001, true);
});

QUnit.test( "Test Error Message With Non-Integer Factorial Argument Test 2", function( assert ) {
  var tokenQueue = ["fact", "(", "6.5", ")"];
  var expectedValue = "ERR: FACTORIAL DOMAIN (NOT INTEGER)";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

// Square root tests
QUnit.test( "Test Error Message With Negative Square Root Argument Test 1", function( assert ) {
  var tokenQueue = ["fact", "(", "-1", ")"];
  var expectedValue = "ERR: SQRT DOMAIN (NEGATIVE)";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Error Message With Negative Square Root Argument Test 2", function( assert ) {
  var tokenQueue = ["fact", "(", "-4315", ")"];
  var expectedValue = "ERR: SQRT DOMAIN (NEGATIVE)";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Error Message With Negative Square Root Argument Test 3", function( assert ) {
  var tokenQueue = ["fact", "(", "-1", "*", "6", ")"];
  var expectedValue = "ERR: SQRT DOMAIN (NEGATIVE)";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

/*
  syntax error messages
*/

QUnit.test( "Test Syntax Error Message With Mismatched Parenthesis 1", function( assert ) {
  var tokenQueue = ["(", "-1", "*", "6", ")", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Syntax Error Message With Mismatched Parenthesis 2", function( assert ) {
  var tokenQueue = ["-1", "*", "6", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Syntax Error Message With Mismatched Parenthesis 3", function( assert ) {
  var tokenQueue = ["(", "-1", "*", "6"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Syntax Error Message With Mismatched Parenthesis 4", function( assert ) {
  var tokenQueue = ["("];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Syntax Error Message With Mismatched Parenthesis 5", function( assert ) {
  var tokenQueue = [")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

// pow syntax error
QUnit.test( "Test Pow One Argument 1", function( assert ) {
  var tokenQueue = ["pow", "(", "23", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Pow One Argument 2", function( assert ) {
  var tokenQueue = ["pow", "(", "23", "*", "2" , ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Pow One Argument 3", function( assert ) {
  var tokenQueue = ["pow", "(", "3", "," , ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Pow One Argument 4", function( assert ) {
  var tokenQueue = ["pow", "(", "," , "3" , ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});


// Test all functions with no arguments
QUnit.test( "Test Pow No Args 1", function( assert ) {
  var tokenQueue = ["pow", "(", "," , ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Pow No Args 2", function( assert ) {
  var tokenQueue = ["pow", "(", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Fact No Args", function( assert ) {
  var tokenQueue = ["fact", "(", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Sin No Args", function( assert ) {
  var tokenQueue = ["sin", "(", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Cos No Args", function( assert ) {
  var tokenQueue = ["cos", "(", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Tan No Args", function( assert ) {
  var tokenQueue = ["tan", "(", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});

QUnit.test( "Test Sqrt No Args", function( assert ) {
  var tokenQueue = ["sqrt", "(", ")"];
  var expectedValue = "ERR: SYNTAX";

  var actualValue = calculateExpression(tokenQueue);

  assert.equal(actualValue, expectedValue);
});
