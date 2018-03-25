/*
    CREATED: Henry Karagory 03/21/2018
    MODIFIED: Brandon Brown 03/25/2018
      - Added test cases for testing preprocess method

    Description: This file contains test cases for the functions in input.js
*/

QUnit.test( "Preprocess Missing Imlpied Multiplication Test 1", function( assert ) {
  var inputExpressionString = "3sin(3)";
  var expectedExpressionString = "3*sin(3)";

  var actualExpressionString = preprocess(inputExpressionString);

  assert.deepEqual(actualExpressionString, expectedExpressionString);
});

QUnit.test( "Preprocess Missing Imlpied Multiplication Test 2", function( assert ) {
  var inputExpressionString = "3(3+3)";
  var expectedExpressionString = "3*(3+3)";

  var actualExpressionString = preprocess(inputExpressionString);

  assert.deepEqual(actualExpressionString, expectedExpressionString);
});

QUnit.test( "Preprocess Missing Imlpied Multiplication Test 3", function( assert ) {
  var inputExpressionString = "3(3+3)+3sin(3)";
  var expectedExpressionString = "3*(3+3)+3*sin(3)";

  var actualExpressionString = preprocess(inputExpressionString);

  assert.deepEqual(actualExpressionString, expectedExpressionString);
});

QUnit.test( "Test Preprocesser method replace ANS", function( assert ){
    var inputExpression = "ans";
    var replaceAns = 4;
    var expectedExpression = "(4)";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in sin", function( assert ){
    var inputExpression = "sin(ans)";
    var replaceAns = 4;
    var expectedExpression = "sin((4))";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in cos", function( assert ){
    var inputExpression = "cos(ans)";
    var replaceAns = 4;
    var expectedExpression = "cos((4))";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in tan", function( assert ){
    var inputExpression = "tan(ans)";
    var replaceAns = 4;
    var expectedExpression = "tan((4))";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in factorial", function( assert ){
    var inputExpression = "fact(ans)";
    var replaceAns = 4;
    var expectedExpression = "fact((4))";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in inverse", function( assert ){
    var inputExpression = "inv(ans)";
    var replaceAns = 4;
    var expectedExpression = "inv((4))";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in squared", function( assert ){
    var inputExpression = "pow(ans,2)";
    var replaceAns = 4;
    var expectedExpression = "pow((4),2)";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in exponent", function( assert ){
    var inputExpression = "pow(ans, 5)";
    var replaceAns = 4;
    var expectedExpression = "pow((4), 5)";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS with negative", function( assert ){
    var inputExpression = "-ans";
    var replaceAns = 4;
    var expectedExpression = "-1*(4)";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS with 4", function( assert ){
    var inputExpression = "4+ans/2";
    var replaceAns = 4;
    var expectedExpression = "4+(4)/2";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method replace ANS in square root", function( assert ){
    var inputExpression = "sqrt(ans)";
    var replaceAns = 4;
    var expectedExpression = "sqrt((4))";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

/* Test preprocesser to balance parenthesis */
QUnit.test( "Test Preprocesser method deal with double negative signs", function( assert ){
    var inputExpression = "--4";
    var replaceAns = 4;
    var expectedExpression = "4";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method deal with double negative signs in expression", function( assert ){
    var inputExpression = "--(--4)";
    var replaceAns = 4;
    var expectedExpression = "(4)";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method deal with implied multiplication - True", function( assert ){
    var inputExpression = "--4(4)";
    var replaceAns = 4;
    var expectedExpression = "4*(4)";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});


QUnit.test( "Test Preprocesser method deal with implied multiplication - False", function( assert ){
    var inputExpression = "--4(4)";
    var replaceAns = 4;
    var expectedExpression = "--4(4)";
    var actualExpression = preprocess(inputExpression, replaceAns, false);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method deal with implied multiplication - True", function( assert ){
    var inputExpression = "sin(2)sin(2)";
    var replaceAns = 4;
    var expectedExpression = "sin(2)*sin(2)";
    var actualExpression = preprocess(inputExpression, replaceAns);

    assert.equal(actualExpression, expectedExpression);
});

QUnit.test( "Test Preprocesser method deal with implied multiplication - False", function( assert ){
    var inputExpression = "sin(2)sin(2)";
    var replaceAns = 4;
    var expectedExpression = "sin(2)sin(2)";
    var actualExpression = preprocess(inputExpression, replaceAns, false);

    assert.equal(actualExpression, expectedExpression);
});




