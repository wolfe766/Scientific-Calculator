/*
  CREATED: Henry Karagory 03/21/2018

  This file contains test cases for the functions in input.js

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