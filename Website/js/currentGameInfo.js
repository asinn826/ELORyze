var summonerName;
var mashApiKey = "6ME20pU81BmbLcrJu1dTG8sWuq2B6b2A"; // joon's mashape production api key
var riotApiKey = "a3fe81d6-1dbc-4b3b-9155-0064a9a76fbe"; //joon's Riot api key
var region = "NA";
var apiLink = "https://community-league-of-legends.p.mashape.com/api/v1.0/NA/summoner/retrieveInProgressSpectatorGameInfo/" + summonerName;
var summonerId;
var responseObj;

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

processSearch();
var apiLink = "https://community-league-of-legends.p.mashape.com/api/v1.0/NA/summoner/retrieveInProgressSpectatorGameInfo/" + summonerName; //Mashape url for retrieveInProgressSpectatorGameInfo

/*
*==================================================================
* RETRIEVES ALL CURRENT GAME INFO ONCE
*==================================================================
*/
function retrieveInfo() {
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", apiLink, false);
	myRequest.setRequestHeader("X-Mashape-Key", mashApiKey);
	myRequest.send();
	responseObj = JSON.parse(myRequest.responseText);
}
retrieveInfo();


/*
*==================================================================
* setSummonerIdVar() SETS SUMMONERID
*==================================================================
*/
function setSummonerIdVar() {
	var APIlink = "https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + riotApiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	var responseObj = JSON.parse(myRequest.responseText);
	summonerId = responseObj[summonerName].id;
}
setSummonerIdVar();

/*
*==================================================================
* getMapType() RETURNS MAP TYPE! (div id = "mapType")
*==================================================================
*/
function getMapType() {
	if(responseObj.game.mapId == "1"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Summoner's Rift" + "</p>";
	}else if(responseObj.game.mapId == "2"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Summoner's Rift - Autumn" + "</p>";
	}else if(responseObj.game.mapId == "3"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "The Proving Grounds" + "</p>";
	}else if(responseObj.game.mapId == "4"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Twisted Treeline - The Original" + "</p>";
	}else if(responseObj.game.mapId == "8"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "The Crystal Scar" + "</p>";
	}else if(responseObj.game.mapId == "10"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Twisted Treeline" + "</p>";
	}else if(responseObj.game.mapId == "12"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Howling Abyss" + "</p>";
	}else{
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Unknown Map!" + "</p>";
	}
}

/*
*==================================================================
* getGameType() RETURNS GAME TYPE! (div id = "gameType")
*==================================================================
*/
function getGameType() {
	if(responseObj.game.gameType == "CUSTOM_GAME") {
	
	}else if(responseObj.game.gameType == "TUTORIAL_GAME") {
}



/*
*=====================================================================================================================================
*                                             THIS IS JUST AN EXAMPLE. TESTING PURPOSES!
*=====================================================================================================================================
*/
function testFunc() {
	var myRequest = new XMLHttpRequest(); //make new request
	myRequest.open("GET", apiLink, false);
	myRequest.setRequestHeader("X-Mashape-Key", mashApiKey); //tag api authorization header
	myRequest.send(); //send request
	var responseObj = JSON.parse(myRequest.responseText); //parse
	document.getElementById("nameOfPlayer").innerHTML = "<h3>Summoner Name: </h3>" + "<p>" + responseObj.game.playerChampionSelections.array[0].summonerInternalName + "</p>";
}	
//testFunc();
