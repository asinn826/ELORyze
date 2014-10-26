var summonerName;
var apiKey1 = "5ea162cb-a47a-4515-b12d-bcd27e1ac3ae"; // alfred's api key
var apiKey2 = "a3fe81d6-1dbc-4b3b-9155-0064a9a76fbe"; // joon's api key
var apiKey3 = "671a7a2c-2d12-4d1c-a6d1-d13a87be1cb3"; // alfred's other api key
var apiKey4 = "727f4483-b231-4586-986c-13804037dc7f"; // joon's other api key
var apiKeys = [apiKey1, apiKey2, apiKey3, apiKey4];
var region = "na";
var summonerId;
var summonerObject;
var summonerStats;
var leagueStats;
var matchHistory;

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
* THIS RETURNS SUMMONER INFO
*==================================================================
*/

function retrieveSummonerObject() {
	var APIlink = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + "?api_key=" + apiKeys[Math.floor((Math.random() * 4))];
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	summonerObject = JSON.parse(myRequest.responseText);
}
retrieveSummonerObject();

function getSummonerName() {
	document.getElementById("summoner-banner").innerHTML = "<h1 class ='banner-center banner-text center'>" + summonerObject[summonerName].name + "</h1>";
}
//getSummonerName();

function getSummonerPic() {
	document.getElementById("summoner-pic").innerHTML = "<div class='banner-text banner-container'>" + 
	"<img src =" + "'http://avatar.leagueoflegends.com/na/" + summonerName + ".png'>  " + 
	summonerObject[summonerName].name + "</div>";
}
getSummonerPic();

function setSummonerIdVar() {
	summonerId = summonerObject[summonerName].id;
}
setSummonerIdVar();

function getSummonerId() {
	document.getElementById("summonerId").innerHTML = "<h3>Summoner Id: </h3>" + "<p>" + summonerObject[summonerName].id + "</p>";
}
// getSummonerId();

function getSummonerIconNum() {
	document.getElementById("summonerIconNum").innerHTML = "<h3>Summoner Icon Number: </h3>" + "<p>" + summonerObject[summonerName].profileIconId + "</p>";
}
//getSummonerIconNum();

function getSummonerLvl() {
	document.getElementById("summoner-level").innerHTML = "Level " + summonerObject[summonerName].summonerLevel;
}
getSummonerLvl();

/*
*==================================================================
* THIS RETURNS SEASON 4 SUMMONER STATS
*==================================================================
*/

function retrieveStatsObject() {
	var APIlink = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/summary?season=SEASON4&api_key="+ apiKeys[Math.floor((Math.random() * 4))];
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	summonerStats = JSON.parse(myRequest.responseText);
}
retrieveStatsObject();

function getSummonerRankedStats() {
	for (var i in summonerStats.playerStatSummaries) {
		if (summonerStats.playerStatSummaries[i].playerStatSummaryType == "RankedSolo5x5") {
			document.getElementById("rankedwins").innerHTML = "<h3>Ranked Wins: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].wins + "</p>";
			document.getElementById("rankedlosses").innerHTML = "<h3>Ranked Losses: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].losses + "</p>";
			document.getElementById("rankedkills").innerHTML = "<h3>Ranked Kills: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].aggregatedStats.totalChampionKills + "</p>";
			document.getElementById("rankedassists").innerHTML = "<h3>Ranked Assists: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].aggregatedStats.totalAssists + "</p>";
		}
	}	
}
getSummonerRankedStats();

function getSummonerNormalsStats() {
	for (var i in summonerStats.playerStatSummaries) {
		if (summonerStats.playerStatSummaries[i].playerStatSummaryType == "Unranked") {
			document.getElementById("normsWins").innerHTML = "<h3>Normal Wins: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].wins + "</p>";
			document.getElementById("normsKills").innerHTML = "<h3>Normal Champion Kills: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].aggregatedStats.totalChampionKills + "</p>";
			document.getElementById("normsCS").innerHTML = "<h3>Normal Minion Kills: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].aggregatedStats.totalMinionKills + "</p>";
			document.getElementById("normsAssists").innerHTML = "<h3>Normal Assists: </h3>" + "<p>" + summonerStats.playerStatSummaries[i].aggregatedStats.totalAssists + "</p>";
		}
	}
}
getSummonerNormalsStats();

/*
*==================================================================
* ISE stuff
*==================================================================
*/

function retrieveLeagueStatsObject() {
	var APIlink = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v2.5/league/by-summoner/" + summonerId + "?api_key=" + apiKeys[Math.floor((Math.random() * 4))];
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	leagueStats = JSON.parse(myRequest.responseText);
}
retrieveLeagueStatsObject();

function retrieveMatchHistoryObject() {
	var APIlink = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v2.2/matchhistory/" + summonerId + "?api_key=" + apiKeys[Math.floor((Math.random() * 4))];
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", APIlink, false);
	myRequest.send();
	matchHistory = JSON.parse(myRequest.responseText);
}
retrieveMatchHistoryObject();

function getISE() {
	var elo_factor = 800; // 1

	/*
	 *	Calculate leaguestats portion of ISE
	 *  This takes into consideration:
	 *	- Ranked division
	 *  - Ranked tier
	 */
	for (var i in leagueStats[summonerId]) {
		if (leagueStats[summonerId][i].queue == "RANKED_SOLO_5x5") {
			for (var j in leagueStats[summonerId][i].entries) {
				if (leagueStats[summonerId][i].entries[j].playerOrTeamId == summonerId) {
					// Calculate division ISE score
					if (leagueStats[summonerId][i].entries[j].division == "V") {
						elo_factor += 1;
					} else if (leagueStats[summonerId][i].entries[j].division == "IV") {
						elo_factor += 1*72;
					} else if (leagueStats[summonerId][i].entries[j].division == "III") {
						elo_factor += 2*72;
					} else if (leagueStats[summonerId][i].entries[j].division == "II") {
						elo_factor += 3*72;
					} else if (leagueStats[summonerId][i].entries[j].division == "I") {
						elo_factor += 4*72;
					}

					// Add in league points into ISE
					elo_factor += (0.72 * leagueStats[summonerId][i].entries[j].leaguePoints);

					// Add in points for tier (bronze, silver, gold, etc...)
					if (leagueStats[summonerId][i].tier == "BRONZE") {
						// bronzies deserve nothing
						elo_factor += 0;
					} else if (leagueStats[summonerId][i].tier == "SILVER") {
						elo_factor += 360*1;
					} else if (leagueStats[summonerId][i].tier == "GOLD") {
						elo_factor += 360*2;
					} else if (leagueStats[summonerId][i].tier == "PLATINUM") {
						elo_factor += 360*3;
					} else if (leagueStats[summonerId][i].tier == "DIAMOND") {
						elo_factor += 360*4;
					} else if (leagueStats[summonerId][i].tier == "CHALLENGER") {
						elo_factor += 360*5;
					} else if (leagueStats[summonerId][i].tier == "MASTER") {
						// if a master tier player is looking ar this page, they
						// deserve massive points :D
						elo_factor += 9000;
					}
				}
			}
		}		
	}


	/*
	 *	Calculate match history portion of ISE - only info from past 10 games is
	 *  taken into consideration, so this will continually "update"
	 *  This takes into consideration:
	 *	- Ranked queue type (points only awarded to ranked soloQ)
	 *  - Ranked damange dealt to champions
	 * 	- First blood
	 *	- Kill streak combos (double, triple, quadra, penta)
	 *	- Kills
	 *	- Deaths
	 */
	for (var i in matchHistory.matches) {
		if (matchHistory.matches[i].queueType == "RANKED_SOLO_5x5") {
			for (var j in matchHistory.matches[i].participants) {
				// Give a small reward for those with massive cs counts
				if (matchHistory.matches[i].participants[j].stats.minionsKilled > 399) {
					elo_factor *= 1.1;
				} else if (matchHistory.matches[i].participants[j].stats.minionsKilled > 359) {
					elo_factor *= 1.07;
				} else if (matchHistory.matches[i].participants[j].stats.minionsKilled > 299) {
					elo_factor *= 1.03;
				} else if (matchHistory.matches[i].participants[j].stats.minionsKilled > 199) {
					elo_factor *= 1.03;
				} else {
					elo_factor *= 1.01;
				}

				// Account for damage dealt to champions
				// Reward big damage, scale back ISE for a tiny bit for relatively
				// small amounts of damage
				if (matchHistory.matches[i].participants[j].stats.totalDamageDealtToChampions > 30000) {
					elo_factor *= 1.2;
				} else if (matchHistory.matches[i].participants[j].stats.totalDamageDealtToChampions > 26000) {
					elo_factor *= 1.1;
				} else if (matchHistory.matches[i].participants[j].stats.totalDamageDealtToChampions > 24000) {
					elo_factor *= 1.05;
				} else if (matchHistory.matches[i].participants[j].stats.totalDamageDealtToChampions > 22000) {
					elo_factor *= 1.03;
				} else if (matchHistory.matches[i].participants[j].stats.totalDamageDealtToChampions > 20000) {
					elo_factor *= 1.02;
				} else if (matchHistory.matches[i].participants[j].stats.totalDamageDealtToChampions > 18000) {
					elo_factor *= 1.01;
				} else {
					elo_factor *= 0.99;
				}

				// Reward for firstBloodKill
				if (matchHistory.matches[i].participants[j].stats.firstBloodKill) {
					elo_factor *= 1.03;
				}

				// Increase winner ISE, decrease loser ISE 
				if (matchHistory.matches[i].participants[j].stats.winner) {
					elo_factor *= 1.06;
				} else {
					elo_factor *= 0.94;
				}

				// Increase ISE for kill combos
				if (matchHistory.matches[i].participants[j].stats.pentaKills) {
					elo_factor += elo_factor * 0.1 * matchHistory.matches[i].participants[j].stats.pentaKills;
				}
				if (matchHistory.matches[i].participants[j].stats.quadraKills) {
					elo_factor += elo_factor * 0.05 * matchHistory.matches[i].participants[j].stats.quadraKills;
				}
				if (matchHistory.matches[i].participants[j].stats.tripleKills) {
					elo_factor += elo_factor * 0.02 * matchHistory.matches[i].participants[j].stats.tripleKills;
				}
				if (matchHistory.matches[i].participants[j].stats.doubleKills) {
					elo_factor += elo_factor * 0.01 * matchHistory.matches[i].participants[j].stats.doubleKills;
				} 
				if (matchHistory.matches[i].participants[j].stats.kills){
					elo_factor += elo_factor * 0.01 * matchHistory.matches[i].participants[j].stats.kills;
				}

				// Give some bonus ISE for 0-death games
				// Take away some ISE per death
				if (!matchHistory.matches[i].participants[j].stats.deaths) {
					elo_factor *= 1.05;
				} else {
					elo_factor -= elo_factor*0.01*matchHistory.matches[i].participants[j].stats.deaths;
				}

			}
		}
	}

	var final_ise = parseInt(elo_factor, 10);
	document.getElementById("skillLevel").innerHTML = "<h2>" + final_ise + "</h2>";
}
getISE();