var numopstate = {
    num1: null,
    state: 0,
    op: null
};

document.getElementById("1").onclick = function() { numberInput(this) };
document.getElementById("2").onclick = function() { numberInput(this) };
document.getElementById("3").onclick = function() { numberInput(this) };
document.getElementById("4").onclick = function() { numberInput(this) };
document.getElementById("5").onclick = function() { numberInput(this) };
document.getElementById("6").onclick = function() { numberInput(this) };
document.getElementById("7").onclick = function() { numberInput(this) };
document.getElementById("8").onclick = function() { numberInput(this) };
document.getElementById("9").onclick = function() { numberInput(this) };
document.getElementById(".").onclick = function() { numberInput(this) };
document.getElementById("0").onclick = function() { numberInput(this) };
document.getElementById("C").onclick = function() { clear() };
document.getElementById("+/=").onclick = function() { operation(this) };
document.getElementById("-").onclick = function() { operation(this) };
document.getElementById("x").onclick = function() { operation(this) };
document.getElementById("/").onclick = function() { operation(this) };

function numberInput(sid) {
    if (numopstate.state == 1) {
        document.getElementById("output").innerHTML = "";
        numopstate.state = 2;
    }
    if (document.getElementById("output").innerHTML == null) {
        document.getElementById("output").innerHTML = sid.id;
    } else {
        document.getElementById("output").innerHTML =
            document.getElementById("output").innerHTML + sid.id;
    }
}

function clear() {
    document.getElementById("output").innerHTML = "";
    numopstate.num1 = null;
    numopstate.state = 0;
    numopstate.op = null;
}

function operation(sid) {
    var total = 0;
    if (document.getElementById("output").innerHTML == "" && sid.id == "-") {
        document.getElementById("output").innerHTML = "-";
    }
    if (numopstate.state == 0 && document.getElementById("output").innerHTML != "-") {
        numopstate.num1 = parseFloat(document.getElementById("output").innerHTML);
        numopstate.op = sid.id;
        numopstate.state = 1;
    } else if (numopstate.state == 2) {
        num2 = parseFloat(document.getElementById("output").innerHTML);
        if (numopstate.op == "+/=") {
            total = numopstate.num1 + num2;
            numopstate.state = 1;
        } else if (numopstate.op == "-") {
            total = numopstate.num1 - num2;
            numopstate.state = 1;
        } else if (numopstate.op == "x") {
            total = numopstate.num1 * num2;
            numopstate.state = 1;
        } else if (numopstate.op == "/") {
            total = numopstate.num1 / num2;
            numopstate.state = 1;
        }
        numopstate.num1 = total;
        document.getElementById("output").innerHTML = total;
        numopstate.op = sid.id;
    } else if (numopstate.state == 1) {
        numopstate.op = sid.id;
    }

}