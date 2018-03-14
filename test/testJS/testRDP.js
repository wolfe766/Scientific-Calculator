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


