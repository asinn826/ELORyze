//Mashape key: 6ME20pU81BmbLcrJu1dTG8sWuq2B6b2A

// CHANGE THIS SHIT
var summonerName = "rxneggroll";

function testFunc() {
  var APIlink = "https://community-league-of-legends.p.mashape.com/api/v1.0/NA/summoner/retrieveInProgressSpectatorGameInfo/" + summonerName;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.setRequestHeader("X-Mashape-Key", "6ME20pU81BmbLcrJu1dTG8sWuq2B6b2A");
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	// document.write(responseObj.game.playerChampionSelections.array[0].summonerInternalName);
	document.getElementById("nameOfPlayer").innerHTML = "<h3>Summoner Name: </h3>" + "<p>" + responseObj.game.playerChampionSelections.array[0].summonerInternalName + "</p>";

}	

testFunc();