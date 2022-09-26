crashdiv = document.getElementById('crashdiv')
coindiv = document.getElementById('coindiv')
slotsdiv = document.getElementById('slotsdiv')
minesdiv = document.getElementById('minesdiv')

function opencoinflip() {

coindiv.style.display = "block";
slotsdiv.style.display = "none";
minesdiv.style.display = "none";
crashdiv.style.display = "none";
}

function openslots() {

coindiv.style.display = "none";
slotsdiv.style.display = "block";
minesdiv.style.display = "none";
crashdiv.style.display = "none";
}

function openmines() {

coindiv.style.display = "none";
slotsdiv.style.display = "none";
minesdiv.style.display = "block";
crashdiv.style.display = "none";

}

function opencrash() {

coindiv.style.display = "none";
slotsdiv.style.display = "none";
minesdiv.style.display = "none";
crashdiv.style.display = "block";

}

var items = Array('anyone else hitting?', 'WWWWWWWW', 'W WIN', 'NO I LOST', 'OMG', 'wtf', 'yo', 'tip me 5', 'tip me 5 and I will triple', 'give me robux', 'cashout now', 'crash is hitting', 'when does it end?', 'FIRST TO SAY 123 gets 10k', 'who wants free robux?', '123', 'I just made 2000???', 'LOL', '25mil BET?', 'EASYYY', 'way better than bloxflip', 'ong', 'this site is crazy wtffff', 'AWIFBWAUFBAW', 'When is the giveaway', 'join my discord guys', 'Add me on roblox', 'Mines is hitting rn', 'I just made 5040 on mines', 'IWAONFOIANW');






var interval = setInterval(function() { 


var item = document.createElement('li');
       item.textContent = items[Math.floor(Math.random()*items.length)];
       $( "#messages" ).append(item);

}, 500);