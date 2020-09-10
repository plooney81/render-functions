// How would you abstract:
    // Two basketball teams, each with 8 players, but can only have 5 playing on the court.
    // Each player has a name, jersey#, and a count of how many points they have scored.
    // Each team has a name, a record of how many fouls they've made.

const werePlaying = [
    {
        name: "Clippers",
        fouls: 100,
        players:[
            {
                name: "Blake Griffin",
                jersey: "13",
                points: 1000,
                isPlaying: true
            },
            {
                name: "Chris Paul",
                jersey: "3",
                points: 2000,
                isPlaying: false
            }
        ]
    },
    {
        name: "Lakers",
        fouls: 0,
        players:[
            {
                name: "LeBron James",
                jersey: "23",
                points: 10000,
                isPlaying: true
            },
            {
                name: "Kobe",
                jersey: "13",
                points: 2000,
                isPlaying: true
            }
        ]
    }
]

function renderBBall(teamObject) {
    let teamPlayers = '';

    for (let index = 0; index < teamObject[0].players.length; index++){
        teamPlayers += `
            <li>${teamObject[0].players[index].name}</li>
        `
    }
    return `
        <div class='team' team-id='${teamObject[0].name}'>
            <h1>${teamObject[0].name}</h1>
            <h2>Players: </h2>
            <ul>
            ${teamPlayers}
            </ul>
        </div>
    `
}

const container = document.querySelector('#teamsContainer')

container.innerHTML = renderBBall(werePlaying);