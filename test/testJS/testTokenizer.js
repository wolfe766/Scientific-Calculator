/*
    CREATED: Henry Karagory 3/12/2018
    MODIFIED: Brandon Brown 3/21/2018
       - Added more test cases for tokenizer
       - Fixed formatting of file 
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

QUnit.test( "Tokenizer Test With Tan", function( assert ) {
    var inputExpressionString = "tan(1)";
    var expectedTokenQueue = ["tan", "(", "1", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Cos", function( assert ) {
    var inputExpressionString = "cos(1)";
    var expectedTokenQueue = ["cos", "(", "1", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Factorial", function( assert ) {
    var inputExpressionString = "fact(1)";
    var expectedTokenQueue = ["fact", "(", "1", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Negative Number", function( assert ) {
    var inputExpressionString = "-1";
    var expectedTokenQueue = ["-1"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Square Root", function( assert ) {
    var inputExpressionString = "sqrt(1)";
    var expectedTokenQueue = ["sqrt", "(", "1", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Inverse", function( assert ) {
    var inputExpressionString = "inv(2)";
    var expectedTokenQueue = ["inv", "(", "2", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Squared", function( assert ) {
    var inputExpressionString = "pow(1,2)";
    var expectedTokenQueue = ["pow", "(", "1", ",", "2", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Exponent", function( assert ) {
    var inputExpressionString = "pow(2,5)";
    var expectedTokenQueue = ["pow", "(", "2", ",", "5", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Inverse", function( assert ) {
    var inputExpressionString = "inv(2)";
    var expectedTokenQueue = ["inv", "(", "2", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Sin and Nested Cos", function( assert ) {
    var inputExpressionString = "sin(cos(2))";
    var expectedTokenQueue = ["sin", "(", "cos", "(", "2", ")", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Sin and Nested Tan", function( assert ) {
    var inputExpressionString = "sin(tan(2))";
    var expectedTokenQueue = ["sin", "(", "tan", "(", "2", ")", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Cos and Nested Sin", function( assert ) {
    var inputExpressionString = "cos(sin(2))";
    var expectedTokenQueue = ["cos", "(", "sin", "(", "2", ")", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Cos and Nested Tan", function( assert ) {
    var inputExpressionString = "cos(sin(2))";
    var expectedTokenQueue = ["cos", "(", "tan", "(", "2", ")", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Tan and Nested Sin", function( assert ) {
    var inputExpressionString = "tan(sin(2))";
    var expectedTokenQueue = ["tan", "(", "sin", "(", "2", ")", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Tan and Nested Cos", function( assert ) {
    var inputExpressionString = "tan(cos(2))";
    var expectedTokenQueue = ["tan", "(", "cos", "(", "2", ")", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Power and Nested Squared Power", function( assert ) {
    var inputExpressionString = "pow(pow(1,2),2)";
    var expectedTokenQueue = ["pow", "(", "pow", "(", "1", "2", ")", ",", "2", ")"];
    var actualTokenQueue = tokenizeExpression(inputExpressionString);

    assert.deepEqual(actualTokenQueue, expectedTokenQueue);
});

QUnit.test( "Tokenizer Test With Power and Nested Power", function( assert ) {
    var inputExpressionString = "pow(pow(1,3),4)";
    var expectedTokenQueue = ["pow", "(", "pow", "(", "1", "3", ")", ",", 4", ")"];
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
