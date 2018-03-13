/*
	CREATED: Henry Karagory 3/12/2018
  
	Description: This file contains tests for the functions in rdp.js.
*/

// Simple tests with no parentheses or functions.

QUnit.test( "Calculate Expression Simple Test 1", function( assert ) {
  var tokenQueue = ["3", "+", "3"];
  var expectedValue = 6;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 2", function( assert ) {
  var tokenQueue = ["3"];
  var expectedValue = 3;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 3", function( assert ) {
  var tokenQueue = ["3", "*", "3"];
  var expectedValue = 9;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 4", function( assert ) {
  var tokenQueue = ["4", "*", "5", "+", "1"];
  var expectedValue = 21;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 5", function( assert ) {
  var tokenQueue = ["1", "+", "4", "*", "5"];
  var expectedValue = 21;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 6", function( assert ) {
  var tokenQueue = ["5", "*", "6", "/", "10"];
  var expectedValue = 3;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 7", function( assert ) {
  var tokenQueue = ["5", "+", "5", "*", "6","-", "10", "/", "10"];
  var expectedValue = 34;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 8", function( assert ) {
  var tokenQueue = ["1", "-", "1"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression Simple Test 9", function( assert ) {
  var tokenQueue = ["20123412.47891", "*", "0"];
  var expectedValue = 0;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

// Tests with parentheses and no functions

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 1", function( assert ) {
  var tokenQueue = ["(", "1.0101", ")"];
  var expectedValue = 1.0101;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 2", function( assert ) {
  var tokenQueue = ["(", "5.000", ")", "*", "(", "5.", ")"];
  var expectedValue = 25;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 3", function( assert ) {
  var tokenQueue = ["(", "1", "+", "6", ")", "*", "3"];
  var expectedValue = 21;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 4", function( assert ) {
  var tokenQueue = ["(", "1", "+", "6", ")", "-", "(", "1", "+", "(", "3", "-", "2", "*", "2", ")", ")"];
  var expectedValue = 7;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

QUnit.test( "Calculate Expression With Parentheses And No Functions Test 5", function( assert ) {
  var tokenQueue = ["1", "+", "(", "2", "+", "(", "3", ")", ")"];
  var expectedValue = 6;

  var actualValue = calculateExpression(tokenQueue);

  assert.deepEqual(actualValue, expectedValue);
});

