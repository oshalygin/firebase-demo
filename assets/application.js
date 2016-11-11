const gamePath = "/game";
const playerOnePath = "/players/playerOne";
const playerTwoPath = "/game";

function initializeGameDetails(database, gameData, playerOne, playerTwo) {
    database.ref(gamePath).set(gameData);
    database.ref(playerOnePath).set(playerOne);
    database.ref(playerTwoPath).set(playerTwo);
}

function printPlayerOneDetails(database) {
    database.ref(playerOnePath).on("value", (snapshot) => {
        console.log(snapshot.val());
    });
}

function printPlayerTwoDetails(database) {
    database.ref(playerTwoPath).on("value", (snapshot) => {
        console.log(snapshot.val());
    });
}


const gameData = {
    inGame: false,
    playerOneLocked: false,
    playerTwoLocked: false,
    players: 0
};

const playerOne = {
    choice: "",
    name: "",
    losses: 0,
    wins: 0
};

const playerTwo = {
    choice: "",
    name: "",
    losses: 0,
    wins: 0
};


const database = firebase.database(); //eslint-disable-line no-undef
initializeGameDetails(database, gameData, playerOne, playerTwo);
printPlayerOneDetails(database);
printPlayerTwoDetails(database);
