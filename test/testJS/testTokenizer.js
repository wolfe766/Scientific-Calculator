/*
	CREATED: Henry Karagory 3/12/2018
	Description: This file contains tests for the functions in tokenizer.js.
*/
QUnit.test( "Tokenizer Simple Test 1", function( assert ) {
  var inputExpressionString = "3+3";
  var expectedTokenQueue = ["3", "+", "3"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);

  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Simple Test 2", function( assert ) {
  var inputExpressionString = "3*3";
	var expectedTokenQueue = ["3", "*", "3"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);

  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Simple Test 3", function( assert ) {
  var inputExpressionString = "3.5*3.5";
	var expectedTokenQueue = ["3.5", "*", "3.5"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);

  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Parantheses 1", function( assert ) {
  var inputExpressionString = "(3+3)*2";
  var expectedTokenQueue = ["(","3", "+", "3", ")", "*", "2"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);

  console.log(actualTokenQueue);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Parantheses 2", function( assert ) {
  var inputExpressionString = "(3.14+3.141592)*2.001";
  var expectedTokenQueue = ["(","3.14", "+", "3.141592", ")", "*", "2.001"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);

  console.log(actualTokenQueue);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Parantheses 3", function( assert ) {
  var inputExpressionString = "(3+3)";
  var expectedTokenQueue = ["(","3", "+", "3", ")"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Parantheses 4", function( assert ) {
  var inputExpressionString = "(3+3)*(2+(1+1))";
  var expectedTokenQueue = ["(","3", "+", "3", ")","*","(","2","+","(","1","+","1",")",")"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Function Name 1", function( assert ) {
  var inputExpressionString = "sin(1)";
  var expectedTokenQueue = ["sin", "(", "1", ")"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Function Name 2", function( assert ) {
  var inputExpressionString = "sin(sin(1))";
  var expectedTokenQueue = ["sin", "(", "sin", "(", "1", ")", ")"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Function Name 3", function( assert ) {
  var inputExpressionString = "sin(tan(1))";
  var expectedTokenQueue = ["sin", "(", "tan", "(", "1", ")", ")"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Function Name 4", function( assert ) {
  var inputExpressionString = "pow(1,2)";
  var expectedTokenQueue = ["pow", "(", "1", ",", "2", ")"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Function Name 5", function( assert ) {
  var inputExpressionString = "pow(1,2)*sin(1+tan(3))";
  var expectedTokenQueue = ["pow", "(", "1", ",", "2", ")", "*", "sin", "(", "1", "+", "tan", "(", "3", ")", ")"];

  var actualTokenQueue = tokenizeExpression(inputExpressionString);
  assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Longest Number From Position Test 1", function( assert ) {
  var inputExpressionString = "1234+123456";
  var startIndex = 0;

  var expectedNumber = "1234";
  var actualNumber = longestNumberFromPosition(startIndex, inputExpressionString);

  assert.equal(actualNumber, expectedNumber);
});

QUnit.test( "Longest Number From Position Test 2", function( assert ) {
  var inputExpressionString = "1+123456";
  var startIndex = 0;

  var expectedNumber = "1";
  var actualNumber = longestNumberFromPosition(startIndex, inputExpressionString);

  assert.equal(actualNumber, expectedNumber);
});

QUnit.test( "Longest Number From Position Test 3", function( assert ) {
  var inputExpressionString = "1+123456";
  var startIndex = 2;

  var expectedNumber = "123456";
  var actualNumber = longestNumberFromPosition(startIndex, inputExpressionString);

  assert.equal(actualNumber, expectedNumber);
});

QUnit.test( "Longest Number From Position Test 4", function( assert ) {
  var inputExpressionString = "(3+3)"
  var startIndex = 3;

  var expectedNumber = "3";
  var actualNumber = longestNumberFromPosition(startIndex, inputExpressionString);

  assert.equal(actualNumber, expectedNumber);
});