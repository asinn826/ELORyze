var summonerName;
var mashApiKey = "6ME20pU81BmbLcrJu1dTG8sWuq2B6b2A"; // joon's mashape production api key
var riotApiKey = "a3fe81d6-1dbc-4b3b-9155-0064a9a76fbe"; //joon's Riot api key
var riotApiKey2 = "671a7a2c-2d12-4d1c-a6d1-d13a87be1cb3"; // alfred's other api key
var mashObject;
var region = "na";
var summonerId;
var summonerObject;
var summonerStats;


/*
*==================================================================
* Run this first to assign the query to a var
* jacked the getQueryVariable helper function from http://css-tricks.com/snippets/javascript/get-url-variables/
*==================================================================
*/
function getQueryVariable(variable) {
   var query = window.location.	search.substring(1);
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
* Set summoner id var by calling Riot API
*==================================================================
*/

function setSummonerId() {
	var APIlink = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + riotApiKey;
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	summonerObject = JSON.parse(myRequest.responseText);
	summonerId = summonerObject[summonerName].id;
}
setSummonerId();

/*
*==================================================================
* Retrieve all current game info from MashApe API
*==================================================================
*/
function retrieveMashapeInfo() {
	var myRequest = new XMLHttpRequest();
	//Mashape url for retrieveInProgressSpectatorGameInfo
	var mashapeApiLink = "https://community-league-of-legends.p.mashape.com/api/v1.0/NA/summoner/retrieveInProgressSpectatorGameInfo/" + summonerName; 
	myRequest.open("GET", mashapeApiLink, false);
	myRequest.setRequestHeader("X-Mashape-Key", mashApiKey);
	myRequest.send();
	mashObject = JSON.parse(myRequest.responseText);
}
retrieveMashapeInfo();

// // Check for non-null mashape object
// if (!mashObject.game) {
// 	document.getElementById("null-search").innerHTML = "Player not in game!";
// }


// Set game Map
function setMapType() {
	var mapID = mashObject.game.mapId;
	if (mapID == "1") {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "Summoner's Rift";
	} else if (mapID == "2") {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "Summoner's Rift - Autumn";
	} else if (mapID == "3") {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "The Proving Grounds";
	} else if (mapID == "4") {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "Twisted Treeline - The Original" ;
	} else if (mapID == "8") {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "The Crystal Scar";
	} else if (mapID == "10") {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "Twisted Treeline" + "</p>";
	} else if (mapID == "12") {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "Howling Abyss";
	} else {
		document.getElementById("mapType").innerHTML = "<strong>Map: </strong>" + "Unknown Map!";
	}
}
setMapType();

// Set Game Type - ranked, normal, etc
function setGameType() {
	var gameId = mashObject.game.gameType;
	if (gameId == "NORMAL_GAME") {
		document.getElementById("gameType").innerHTML = "<strong>Game Type: </strong>" + "Normal";
	} else if (gameId == "RANKED_GAME") {
		document.getElementById("gameType").innerHTML = "<strong>Game Type: </strong>" + "Ranked";
	} else if (gameId == "TUTORIAL_GAME") {
		document.getElementById("gameType").innerHTML = "<strong>Game Type: </strong>" + "Tutorial";
	} else if (gameId == "CUSTOM_GAME") {
		document.getElementById("gameType").innerHTML = "<strong>Game Type: </strong>" + "Custom";
	} else if (gameId == "MATCHED_GAME") {
		document.getElementById("gameType").innerHTML = "<strong>Game Type: </strong>" + "Uknown Matched";
	} else {
		document.getElementById("gameType").innerHTML = "<strong>Game Type: </strong>" + "Unkown Game Type!";	
	}
}
setGameType();

//Set game mode - classic or aram
function setGameMode() {
	var gameMode = mashObject.game.gameMode;
	if (gameMode == "CLASSIC") {
		document.getElementById("gameMode").innerHTML = "<strong>Game Mode: </strong>" + "Classic";
	} else if (gameMode == "ARAM") {
		document.getElementById("gameMode").innerHTML = "<strong>Game Mode: </strong>" + "ARAM";
	} else {
		document.getElementById("gameMode").innerHTML = "<strong>Game Mode: </strong>" + "Unknown Game Mode!";
	}
}
setGameMode();

/*
*==================================================================
* getTeam1Player1() - getTeam1Player5 RETURNS PLAYER 1 through 5 FROM TEAM 1! (div id = "team1Player1" and so forth)
*==================================================================
*/
function getTeam1Player1() {
	document.getElementById("team1Player1").innerHTML = "<p>1. " + mashObject.game.teamOne.array[0].summonerName + "</p>";
}

function getTeam1Player2() {
	document.getElementById("team1Player2").innerHTML = "<p>2. " + mashObject.game.teamOne.array[1].summonerName + "</p>";
}

function getTeam1Player3() {
	document.getElementById("team1Player3").innerHTML = "<p>3. " + mashObject.game.teamOne.array[2].summonerName + "</p>";
}

function getTeam1Player4() {
	document.getElementById("team1Player4").innerHTML = "<p>4. " + mashObject.game.teamOne.array[3].summonerName + "</p>";
}

function getTeam1Player5() {
	document.getElementById("team1Player5").innerHTML = "<p>5. " + mashObject.game.teamOne.array[4].summonerName + "</p>";
}
getTeam1Player1();
getTeam1Player2();
getTeam1Player3();
getTeam1Player4();
getTeam1Player5();

// function getTeam1Players() {
// 	for (var i = 0; i <= 4; i++) {
// 		document.getElementById("team1Player" + (i + 1)).innerHTML = 
// 		"<p>" + (i + 1) + ". " + mashObject.game.teamOne.array[i].summonerName + "</p>";
// 	}
// }
// getTeam1Players();

/*
*==================================================================
* getTeam2Player1() - getTeam2Player5 RETURNS PLAYER 1 through 5 FROM TEAM 2! (div id = "team2Player1" and so forth)
*==================================================================
*/
function getTeam2Player1() {
	document.getElementById("team2Player1").innerHTML = "<p>1. " + mashObject.game.teamTwo.array[0].summonerName + "</p>";
}

function getTeam2Player2() {
	document.getElementById("team2Player2").innerHTML = "<p>2. " + mashObject.game.teamTwo.array[1].summonerName + "</p>";
}

function getTeam2Player3() {
	document.getElementById("team2Player3").innerHTML = "<p>3. " + mashObject.game.teamTwo.array[2].summonerName + "</p>";
}

function getTeam2Player4() {
	document.getElementById("team2Player4").innerHTML = "<p>4. " + mashObject.game.teamTwo.array[3].summonerName + "</p>";
}

function getTeam2Player5() {
	document.getElementById("team2Player5").innerHTML = "<p>5. " + mashObject.game.teamTwo.array[4].summonerName + "</p>";
}

function getTeam2Players() {
	getTeam2Player1();
	getTeam2Player2();
	getTeam2Player3();
	getTeam2Player4();
	getTeam2Player5();
}
getTeam2Players();

/*
*==================================================================
* helper to search for array key
*==================================================================
*/
function lookup(query, array, marker) {
    for(var i = 0, len = array.length; i < len; i++) {
        if( array[ i ].playerOrTeamId === query )
            return i;
    }
    return -1;
}

/*
*==================================================================
* helper to capitalize first letter of string
*==================================================================
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//var apiLink = "https://community-league-of-legends.p.mashape.com/api/v1.0/NA/summoner/retrieveInProgressSpectatorGameInfo/" + summonerName; 
//Mashape url for retrieveInProgressSpectatorGameInfo

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
	
	marker = lookup(summonerId, tempObj.summonerId.entries, marker);
	if (marker < 0) {
		document.getElementById("T1P1TierDivision").innerHTML = "<h3>Player " + playerNum + " from Team " + teamNum ": </h3>" + "<p>Error!</p>";
	} else {
		division = tempObj.summonerId.entries[marker].division;
		document.getElementById("T1P1TierDivision").innerHTML = "<h3>Player " + playerNum + " from Team " + teamNum ": </h3>" + "<p>" + division + "</p>";
	}
}
