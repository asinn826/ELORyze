var summonerName;
var apiKey = "5ea162cb-a47a-4515-b12d-bcd27e1ac3ae"; // alfred's api key
var apiKey2 = "a3fe81d6-1dbc-4b3b-9155-0064a9a76fbe"; // joon's api key
var apiKey3 = "671a7a2c-2d12-4d1c-a6d1-d13a87be1cb3"; // alfred's other api key
var region = "na";
var summonerId;
	/*

	Sample Response Body

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
* THIS RETURNS SUMMONER ID FROM SUMMONER NAME
*==================================================================
*/
/*	
function returnSummonerID(summonerName) {
var APIlink = "https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
var myRequest = new XMLHttpRequest();
myRequest.open("GET", APIlink, false);
myRequest.send();
var responseObj = JSON.parse(myRequest.responseText);
return responseObj[summonerName].id;	
}*/

/*
*==================================================================
* THIS RETURNS SUMMONER NAME FROM SUMMONER ID
*==================================================================
*/
/*
function returnSummonerName(summonerID) {
var APIlink = "https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/" + summonerID + "?api_key=" + apiKey;
var myRequest = new XMLHttpRequest();
myRequest.open("GET", APIlink, false);
myRequest.send();
var responseObj = JSON.parse(myRequest.responseText);
return responseObj.[summonerID].name;
}*/

/*
*==================================================================
* Run this first to assign the query to a var
* jacked the get QueryVariable function from http://css-tricks.com/snippets/javascript/get-url-variables/
*==================================================================
*/
function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("?");
   for (var i = 0; i < vars.length; i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable) {
           		return pair[1];
           }
   }
   return(false);
}

function processSearch() {
	summonerName = getQueryVariable("query");
}
	
/*
*==================================================================
* THIS RETURNS SUMMONER INFO!
*==================================================================
*/
function getSummonerName() {
	var APIlink = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("summonerName").innerHTML = "<h3>Summoner Name: </h3>" + "<p>" + responseObj[summonerName].name + "</p>";
}

function setSummonerIdVar() {
	var APIlink = "https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	summonerId = responseObj[summonerName].id;
}

function getSummonerId() {
	var APIlink = "https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	document.getElementById("summonerId").innerHTML = "<h3>Summoner Id: </h3>" + "<p>" + responseObj[summonerName].id + "</p>";
}

function getSummonerIconNum() {
	var APIlink = "https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKey;
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
	document.getElementById("normsWins").innerHTML = "<h3>Normal Wins: </h3>" + "<p>" + responseObj.playerStatSummaries[7].wins + "</p>";
	document.getElementById("normsKills").innerHTML = "<h3>Normal Losses: </h3>" + "<p>" + responseObj.playerStatSummaries[7].aggregatedStats.totalChampionKills + "</p>";
	document.getElementById("normsCS").innerHTML = "<h3>Normal Kills: </h3>" + "<p>" + responseObj.playerStatSummaries[7].aggregatedStats.totalMinionKills + "</p>";
	document.getElementById("normsAssists").innerHTML = "<h3>Normal Assists: </h3>" + "<p>" + responseObj.playerStatSummaries[7].aggregatedStats.totalAssists + "</p>";
}


/*
*==================================================================
* Function calls
*==================================================================
*/

processSearch();
getSummonerName();
setSummonerIdVar();
getSummonerId();
getSummonerIconNum();
getSummonerLvl();
getSummonerRankedStats();
getSummonerNormalsStats();
