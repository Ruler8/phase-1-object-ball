function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black","white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 1

                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamdunks: 7
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 11,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamdunks: 5
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamdunks: 1
                }
            }
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamdunks: 2
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamdunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamdunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamdunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamdunks: 12
                }
                    
            }
        }
    }
}

console.log(gameObject())

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}
console.log(homeTeamName());

function homeTeamName() {
    return gameObject().home.teamName;
}
console.log(homeTeamName());

function awayTeamName() {
    return gameObject().away.teamName;
}
console.log(awayTeamName());
// PLAYER POINTS
function numPointsScored(playerName) {
    return gameObject().away.players[playerName].points
}
console.log(numPointsScored("Bismak Biyombo"))

function playerStats(playerName) {
    return gameObject().home.players[playerName] || gameObject().away.players[playerName]
}
console.log(playerStats("Ben Gordon"))

function shoeSize(playerName) {
    return playerStats(playerName).shoe
}
console.log(shoeSize("Ben Gordon"))

// PLAYER POINTS
function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        if(game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
}
console.log(numPointsScored("Ben Gordon"))
