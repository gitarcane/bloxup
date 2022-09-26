resetmines()

function openmine(number) {
random = Math.random() 
element = document.getElementById(number)
input = document.getElementById('input')
h1 = document.getElementById('h1')
profit = input.value


if (random >= 0.1) {
element.innerHTML = 'mined'
profit = profit * 1.1
input.value = Math.round(profit * 100) / 100
element.disabled = true;

}
else {
element.innerHTML = 'death'
input.value = 0
}


}



function resetmines() {
document.getElementById('1').innerHTML = ''
document.getElementById('2').innerHTML = ''
document.getElementById('3').innerHTML = ''
document.getElementById('4').innerHTML = ''
document.getElementById('5').innerHTML = ''
document.getElementById('6').innerHTML = ''
document.getElementById('7').innerHTML = ''
document.getElementById('8').innerHTML = ''
document.getElementById('9').innerHTML = ''
document.getElementById('10').innerHTML = ''
document.getElementById('11').innerHTML = ''
document.getElementById('12').innerHTML = ''
document.getElementById('13').innerHTML = ''
document.getElementById('14').innerHTML = ''
document.getElementById('15').innerHTML = ''
document.getElementById('16').innerHTML = ''
document.getElementById('17').innerHTML = ''
document.getElementById('18').innerHTML = ''
document.getElementById('19').innerHTML = ''
document.getElementById('20').innerHTML = ''
document.getElementById('21').innerHTML = ''
document.getElementById('22').innerHTML = ''
document.getElementById('23').innerHTML = ''
document.getElementById('24').innerHTML = ''
document.getElementById('25').innerHTML = ''


document.getElementById('1').disabled = false
document.getElementById('2').disabled = false
document.getElementById('3').disabled = false
document.getElementById('4').disabled = false
document.getElementById('5').disabled = false
document.getElementById('6').disabled = false
document.getElementById('7').disabled = false
document.getElementById('8').disabled = false
document.getElementById('9').disabled = false
document.getElementById('10').disabled = false
document.getElementById('11').disabled = false
document.getElementById('12').disabled = false
document.getElementById('13').disabled = false
document.getElementById('14').disabled = false
document.getElementById('15').disabled = false
document.getElementById('16').disabled = false
document.getElementById('17').disabled = false
document.getElementById('18').disabled = false
document.getElementById('19').disabled = false
document.getElementById('20').disabled = false
document.getElementById('21').disabled = false
document.getElementById('22').disabled = false
document.getElementById('23').disabled = false
document.getElementById('24').disabled = false
document.getElementById('25').disabled = false





}