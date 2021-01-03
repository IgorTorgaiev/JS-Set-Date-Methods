// setFullYear

var a = new Date();
a.setFullYear(2021);
document.getElementById("demo").innerHTML = a;

// setDate

var b = new Date();
b.setDate(3);
document.getElementById("demo1").innerHTML = b;

// setHours

var c = new Date();
c.setHours(20);
document.getElementById("demo2").innerHTML = c;


// setMinutes

var d = new Date();
d.setMinutes(53);
document.getElementById("demo3").innerHTML = d;


// setMonth
var e = new Date();
e.setMonth(0);
document.getElementById("demo4").innerHTML = e;


var current, other, txt;

var current = new Date();
var other = new Date();
other.setFullYear(2021-01-03);

if (current > other) {
    txt = "The current year is 2021";
} else {
    txt = "The current year is 2022";
} 
document.getElementById("year").innerHTML = txt;