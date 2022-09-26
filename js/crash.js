multiplierid = document.getElementById("multiplier");
inputfield = document.getElementById("crashbetinput");

var currentmultiplier = 1;
var time = 1;
var cash = 0;

function startcrash() {
multiplierid.style.color='#505880';

if (inputfield.value >= 0 && inputfield.value <= 0) {
time = 0;
currentmultiplier = 1;
multiplierid.innerHTML = 1;
inputfield.disabled = true;
document.getElementById("startcrash").disabled = true;
}
else {
alert('you do not have the balance for this action')
}

}

function cashout() {

if (time == 0 && cash == 0) {
multiplierid.style.color='#32cd32';
console.log('done')
cash = 1;
document.getElementById("startcrash").disabled = true;
}

}




var interval = setInterval(function() { 
   if (time == 0) { 
	currentmultiplier += 0.01
	multiplierid.innerHTML = currentmultiplier.toFixed(2);

const alive = Math.random()

if (alive >= 0.01) {
console.log("alive");

}
else {

console.log("crashed");
time = 1;
cash = 0;
multiplierid.style.color='red';
inputfield.disabled = false;
document.getElementById("startcrash").disabled = false;

}
   }
}, 100);