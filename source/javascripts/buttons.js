function press_left() {
    inputObject.shiftCursorLeft();
}

function press_right() {
    inputObject.shiftCursorRight();
}

function press_0() {
    //alert("zero pressed");
    inputObject.addToString(0);
}

function press_1() {
    inputObject.addToString(1);
}

function press_2() {
    inputObject.addToString(2);
}

function press_3() {
    inputObject.addToString(3);
}

function press_4() {
    inputObject.addToString(4);
}

function press_5() {
    inputObject.addToString(5);
}

function press_6() {
    inputObject.addToString(6);
}

function press_7() {
    inputObject.addToString(7);
}

function press_8() {
    inputObject.addToString(8);
}

function press_9() {
    inputObject.addToString(9);
}

function press_plus() {
    inputObject.addToString("+");
}

function press_minus() {
    inputObject.addToString("-");
}

function press_multiply() {
    inputObject.addToString("*");
}

function press_divide() {
    inputObject.addToString("/");
}

function press_return() {
    var text = inputObject.returnInputString();
    document.getElementById("output").innerHTML = text;
}

function press_clear() {
    inputObject.clearInput();
}

function press_delete() {
    inputObject.deleteFromString();
}

function press_tan() {
    inputObject.addToString("tan()");
    inputObject.shiftCursorLeft();
}

function press_sin() {
    inputObject.addToString("sin()");
    inputObject.shiftCursorLeft();
}

function press_cos() {
    inputObject.addToString("cos()");
    inputObject.shiftCursorLeft();
}

function press_radical() {
    inputObject.addToString("sqrt()");
    inputObject.shiftCursorLeft();
}

function press_inverse() {
    inputObject.addToString("^-1");
}

function press_exponent() {
    inputObject.addToString("^")
}

function press_square() {
    inputObject.addToString("^2");
}

function press_factorial() {
    inputObject.addToString("!");
}

function press_negative() {
    inputObject.addToString("(-)");
    inputObject.shiftCursorLeft();
}

function press_point() {
    inputObject.addToString(".");
}

function press_left_paren() {
    inputObject.addToString("(");
}

function press_right_paren() {
    inputObject.addToString(")");
}


function toggleTrigMode() {
    inputObject.toggleTrigMode();
    el = document.getElementById("trig_out");
    el.innerHTML = inputObject.returnTrigMode();
}
