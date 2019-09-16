var num1 = null;
document.getElementById("1").onclick = function() { handleNumberInput(this) };
document.getElementById("2").onclick = function() { handleNumberInput(this) };
document.getElementById("3").onclick = function() { handleNumberInput(this) };
document.getElementById("4").onclick = function() { handleNumberInput(this) };
document.getElementById("5").onclick = function() { handleNumberInput(this) };
document.getElementById("6").onclick = function() { handleNumberInput(this) };
document.getElementById("7").onclick = function() { handleNumberInput(this) };
document.getElementById("8").onclick = function() { handleNumberInput(this) };
document.getElementById("9").onclick = function() { handleNumberInput(this) };
document.getElementById(".").onclick = function() { handleNumberInput(this) };
document.getElementById("0").onclick = function() { handleNumberInput(this) };
document.getElementById("C").onclick = function() { zero() };
document.getElementById("+/=").onclick = function() { operation(this) };
document.getElementById("-").onclick = function() { operation(this) };
document.getElementById("x").onclick = function() { operation(this) };
document.getElementById("/").onclick = function() { operation(this) };

function display(number) {
    document.getElementById("output").innerHTML = number;
}

function read() {
    var text = document.getElementById("output").innerHTML;
    if (text == "") {
        return 0;
    }

    return parseFloat(text);
}

function handleNumberInput(sid) {
    /*if (state == ABOUT_TO_CLEAR) {
        document.getElementById("output").innerHTML = "";
        state = RECEIVING_SECOND;
    }
    if (document.getElementById("output").innerHTML == "0") {
        document.getElementById("output").innerHTML = sid.id;
    } else {
        document.getElementById("output").innerHTML =
            document.getElementById("output").innerHTML + sid.id;
    }*/

    if (num1 != null) {
        clear();
    }

    var text = read();
    if (text == "0") {
        display(sid.id);
    } else {
        display(text + sid.id);
    }
}

function zero() {
    display(0);
    num1 = null;
}

function clear() {
    setOnEqual(function() { operation(this) });
    display("");
}

function setOnEqual(func) {
    document.getElementById("+/=").onclick = func;
}

function getOpFunc(id) {
    switch (id) {
        case "+/=":
            return function(n1, n2) { return n1 + n2 };
        case "x":
            return function(n1, n2) { return n1 * n2 };
        case "-":
            return function(n1, n2) { return n1 - n2 };
        case "/":
            return function(n1, n2) { return n1 / n2 };
    }

    throw new Error("Should not be here");
}

function getNum1() {
    return num1;
}

function operation(sid) {
    if (num1 == null) {
        var op = getOpFunc(sid.id);
        var tmpNum = read();
        num1 = function(n2) { return op(tmpNum, n2) };
    } else if (typeof(num1) == "function") {
        var result = num1(read());
        var op = getOpFunc(sid.id);
        num1 = function(n2) { return op(result, n2) };
        display(result);
    }
}