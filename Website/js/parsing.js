var summonerName = "rxneggroll";
var apiKey = "5ea162cb-a47a-4515-b12d-bcd27e1ac3ae";
var summonerId;
	/*
	Sample response body

	{"rxneggroll": {
   "id": 25729367,
   "name": "RxN EggRoll",
   "profileIconId": 19,
   "revisionDate": 1403028570000,
   "summonerLevel": 30
	}}
	Link: https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/rxneggroll?api_key=5ea162cb-a47a-4515-b12d-bcd27e1ac3ae
	*/
/*
*==================================================================
* THIS RETURNS SUMMONER INFO!
*==================================================================
*/
function getSummonerName() {
	var APIlink = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("summonerName").innerHTML = "<h3>Summoner Name: </h3>" + "<p>" + responseObj[summonerName].name + "</p>";
} // HOW TO ABSTRACT THE "responseObj.rxneggroll.name", esp the rxneggroll parameter

function getSummonerId() {
	var APIlink = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("summonerId").innerHTML = "<h3>Summoner Id: </h3>" + "<p>" + responseObj[summonerName].id + "</p>";
	summonerId = responseObj.rxneggroll.id;
}

function getSummonerIconNum() {
	var APIlink = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("summonerIconNum").innerHTML = "<h3>Summoner Icon Number: </h3>" + "<p>" + responseObj[summonerName].profileIconId + "</p>";
}

function getSummonerLvl() {
	var APIlink = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("summonerLvl").innerHTML = "<h3>Summoner Level: </h3>" + "<p>" + responseObj[summonerName].summonerLevel + "</p>";
}


/*
*==================================================================
* THIS RETURNS SEASON 4 SUMMONER STATS
*==================================================================
*/

function getSummonerRankedStats() {
	var APIlink = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/summary?season=SEASON4&api_key="+ apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("rankedwins").innerHTML = "<h3>Ranked Wins: </h3>" + "<p>" + responseObj.playerStatSummaries[4].wins + "</p>";
	document.getElementById("rankedlosses").innerHTML = "<h3>Ranked Losses: </h3>" + "<p>" + responseObj.playerStatSummaries[4].losses + "</p>";
	document.getElementById("rankedkills").innerHTML = "<h3>Ranked Kills: </h3>" + "<p>" + responseObj.playerStatSummaries[4].aggregatedStats.totalChampionKills + "</p>";
	document.getElementById("rankedassists").innerHTML = "<h3>Ranked Assists: </h3>" + "<p>" + responseObj.playerStatSummaries[4].aggregatedStats.totalAssists + "</p>";
}

function getSummonerNormalsStats() {
	var APIlink = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/summary?season=SEASON4&api_key="+ apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("normsWins").innerHTML = "<h3>Ranked Wins: </h3>" + "<p>" + responseObj.playerStatSummaries[7].wins + "</p>";
	document.getElementById("normsKills").innerHTML = "<h3>Ranked Losses: </h3>" + "<p>" + responseObj.playerStatSummaries[7].aggregatedStats.totalChampionKills + "</p>";
	document.getElementById("normsCS").innerHTML = "<h3>Ranked Kills: </h3>" + "<p>" + responseObj.playerStatSummaries[7].aggregatedStats.totalMinionKills + "</p>";
	document.getElementById("normsAssists").innerHTML = "<h3>Ranked Assists: </h3>" + "<p>" + responseObj.playerStatSummaries[7].aggregatedStats.totalAssists + "</p>";
}


getSummonerName();
getSummonerId();
getSummonerIconNum();
getSummonerLvl();
getSummonerRankedStats();
getSummonerNormalsStats();