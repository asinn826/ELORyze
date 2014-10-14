var summonerName; //of queried player
var mashApiKey = "6ME20pU81BmbLcrJu1dTG8sWuq2B6b2A"; // joon's mashape production api key
//>>>>>>> Stashed changes
var riotApiKey = "a3fe81d6-1dbc-4b3b-9155-0064a9a76fbe"; //joon's Riot api key
var region = "NA";
var summonerId; //of queried player
var mashObj; //of queried player
var riotObj; //of queried player

var team1player1Id;
var team1player2Id;
var team1player3Id;
var team1player4Id;
var team1player5Id;

var team2player1Id;
var team2player2Id;
var team2player3Id;
var team2player4Id;
var team2player5Id;

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

/*
*==================================================================
* helper to search for array key
*==================================================================
*/
function lookup(query, array, marker) {
    for(var i = 0, len = array.length; i < len; i++) {
        if( array[ i ].key === query )
            marker = i;
    }
    marker = -1;
}

/*
*==================================================================
* capitalizes first letter of string
*==================================================================
*/
function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var apiLink = "https://community-league-of-legends.p.mashape.com/api/v1.0/NA/summoner/retrieveInProgressSpectatorGameInfo/" + summonerName; 
//Mashape url for retrieveInProgressSpectatorGameInfo

/*
*==================================================================
* RETRIEVES ALL CURRENT GAME INFO ONCE
*==================================================================
*/
function retrieveMashInfo() {
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", apiLink, false);
	myRequest.setRequestHeader("X-Mashape-Key", mashApiKey);
	myRequest.send();
	mashObj = JSON.parse(myRequest.responseText);
}
retrieveMashInfo();

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
	summonerId = riotObj[summonerName].id;
}
setSummonerIdVar();

/*
*==================================================================
* getMapType() RETURNS MAP TYPE! (div id = "mapType")
*==================================================================
*/
function getMapType() {
	if(mashObj.game.mapId == "1"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Summoner's Rift" + "</p>";
	} else if(mashObj.game.mapId == "2"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Summoner's Rift - Autumn" + "</p>";
	} else if(mashObj.game.mapId == "3"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "The Proving Grounds" + "</p>";
	} else if(mashObj.game.mapId == "4"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Twisted Treeline - The Original" + "</p>";
	} else if(mashObj.game.mapId == "8"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "The Crystal Scar" + "</p>";
	} else if(mashObj.game.mapId == "10"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Twisted Treeline" + "</p>";
	} else if(mashObj.game.mapId == "12"){
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Howling Abyss" + "</p>";
	} else{
		document.getElementById("mapType").innerHTML = "<h3>Map Type: </h3>" + "<p>" + "Unknown Map!" + "</p>";
	}
}

/*
*==================================================================
* getGameType() RETURNS GAME TYPE! (div id = "gameType")
*==================================================================
*/
function getGameType() {
	if(mashObj.game.gameType == "NORMAL_GAME") {
		document.getElementById("gameType").innerHTML = "<h3>Game Type: </h3>" + "<p>" + "Normal" + "</p>";
	} else if(mashObj.game.gameType == "RANKED_GAME") {
		document.getElementById("gameType").innerHTML = "<h3>Game Type: </h3>" + "<p>" + "Ranked" + "</p>";
	} else if(mashObj.game.gameType == "TUTORIAL_GAME") {
		document.getElementById("gameType").innerHTML = "<h3>Game Type: </h3>" + "<p>" + "Tutorial" + "</p>";
	} else if(mashObj.game.gameType == "CUSTOM_GAME") {
		document.getElementById("gameType").innerHTML = "<h3>Game Type: </h3>" + "<p>" + "Custom" + "</p>";
	} else if(mashObj.game.gameType == "MATCHED_GAME") {
		document.getElementById("gameType").innerHTML = "<h3>Game Type: </h3>" + "<p>" + "Uknown Matched" + "</p>";
	} else{
		document.getElementById("gameType").innerHTML = "<h3>Game Type: </h3>" + "<p>" + "Unkown Game Type!" + "</p>";	
	}
}

/*
*==================================================================
* getGameMode() RETURNS GAME MODE! (div id = "gameMode") ---DOESN'T SEEM TO WORK, COMMENTED OUT 7/6/14 BY ALFRED
*==================================================================
*/

function getGameMode() {
	if(mashObj.game.gameMode == "CLASSIC"){
		document.getElementById("gameMode").innerHTML = "<h3>Game Mode: </h3>" + "<p>" + "Classic" + "</p>";
	} else if(mashObj.game.gameMode == "ARAM"){
		document.getElementById("gameMode").innerHTML = "<h3>Game Mode: </h3>" + "<p>" + "ARAM" + "</p>";
	} else{
		document.getElementById("gameMode").innerHTML = "<h3>Game Mode: </h3>" + "<p>" + "Unknown Game Mode!" + "</p>";
	}
}

/*
*==================================================================
* getTeam1Player1() - getTeam1Player5 RETURNS PLAYER 1 through 5 FROM TEAM 1! (div id = "team1Player1" and so forth)
*==================================================================
*/
function getTeam1Player1() {
	document.getElementById("team1Player1").innerHTML = "<h3>Player 1 from Team 1: </h3>" + "<p>" + mashObj.game.teamOne.array[0].summonerName + "</p>";
}

function getTeam1Player2() {
	document.getElementById("team1Player2").innerHTML = "<h3>Player 2 from Team 1: </h3>" + "<p>" + mashObj.game.teamOne.array[1].summonerName + "</p>";
}

function getTeam1Player3() {
	document.getElementById("team1Player3").innerHTML = "<h3>Player 3 from Team 1: </h3>" + "<p>" + mashObj.game.teamOne.array[2].summonerName + "</p>";
}

function getTeam1Player4() {
	document.getElementById("team1Player4").innerHTML = "<h3>Player 4 from Team 1: </h3>" + "<p>" + mashObj.game.teamOne.array[3].summonerName + "</p>";
}

function getTeam1Player5() {
	document.getElementById("team1Player5").innerHTML = "<h3>Player 5 from Team 1: </h3>" + "<p>" + mashObj.game.teamOne.array[4].summonerName + "</p>";
}

/*
*==================================================================
* getTeam2Player1() - getTeam2Player5 RETURNS PLAYER 1 through 5 FROM TEAM 2! (div id = "team2Player1" and so forth)
*==================================================================
*/
function getTeam2Player1() {
	document.getElementById("team2Player1").innerHTML = "<h3>Player 1 from Team 2: </h3>" + "<p>" + mashObj.game.teamTwo.array[0].summonerName + "</p>";
}

function getTeam2Player2() {
	document.getElementById("team2Player2").innerHTML = "<h3>Player 2 from Team 2: </h3>" + "<p>" + mashObj.game.teamTwo.array[1].summonerName + "</p>";
}

function getTeam2Player3() {
	document.getElementById("team2Player3").innerHTML = "<h3>Player 3 from Team 2: </h3>" + "<p>" + mashObj.game.teamTwo.array[2].summonerName + "</p>";
}

function getTeam2Player4() {
	document.getElementById("team2Player4").innerHTML = "<h3>Player 4 from Team 2: </h3>" + "<p>" + mashObj.game.teamTwo.array[3].summonerName + "</p>";
}

function getTeam2Player5() {
	document.getElementById("team2Player5").innerHTML = "<h3>Player 5 from Team 2: </h3>" + "<p>" + mashObj.game.teamTwo.array[4].summonerName + "</p>";
}

/*
*==================================================================
* getTierDivision() GETS TIER AND DIVISION OF SUMMONERID (example div id = T1P1TierDivision) <--- stands for the Tier and Division of Team 1 Player 1
*==================================================================
*/
function getTierDivision(summonerId) {
	var link = "https://na.api.pvp.net/api/lol/na/v2.4/league/by-summoner/" + summonerId + "?api_key=" + riotApiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", apiLink, false);
	myRequest.send();
	var tempObj = JSON.parse(myRequest.responseText);
	//tempObj.summonerId.entries <---- this is the array of players in the league
	var tier = capitalizeFirstLetter((tempObj.summonerId.tier).toLowerCase());
	var division = 0;
	var marker = -1;
	var teamNum = summonerId.charAt(4);
	var playerNum = summonerId.charAt(11);
	
	lookup(summonerId, tempObj.summonerId.entries, marker);
	if(marker < 0){
		document.getElementById("T" + teamNum + "P" + playerNum + "TierDivision").innerHTML = "<h3>Player " + playerNum + " from Team " + teamNum ": </h3>" + "<p>" + Error! + "</p>";
	}else{
		division = tempObj.summonerId.entries[marker].division;
		document.getElementById("T" + teamNum + "P" + playerNum + "TierDivision").innerHTML = "<h3>Player " + playerNum + " from Team " + teamNum ": </h3>" + "<p>" + Error! + "</p>";
	}
}


/
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
