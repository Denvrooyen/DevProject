const team = {
    _players: [{
        firstName: 'Everton',
        lastName: 'Soares',
        age: 24
    }, {
        firstName: 'Neymar',
        lastName: 'da Silva',
        age: 28,
    }, {
        firstName: 'Alisson Ramses',
        lastName: 'Becker',
        age: 27,
    }],
    _games: [{
        opponet: 'Nigeria',
        teamPoints: 1,
        opponentPoints: 1,
    }, {
        opponet: 'Argentina',
        teamPoints: 0,
        opponentPoints: 1,
    }, {
        opponet: 'South Korea',
        teamPoints: 3,
        opponentPoints: 0,
    }],
    get players() {
        return this.team.players;
    },
    get games() {
        return this.team.games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        };
        this._games.push(game);
    }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
team.addGame('Senegal', 1, 1);
team.addGame('Peru', 0, 1);
team.addGame('Colombia', 2, 2);
console.log(team._games);