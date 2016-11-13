const gamePath = "/game";
const database = firebase.database(); //eslint-disable-line no-undef
const playerOnePath = "/players/playerOne";
const playerTwoPath = "/game";

function initializeGameDetails(gameData, playerOne, playerTwo) {
    database.ref(gamePath).set(gameData);
    database.ref(playerOnePath).set(playerOne);
    database.ref(playerTwoPath).set(playerTwo);
}

function processConnectedUsers() {
    database.ref(".info/connected").on("value", (snapshot) => {
        if (snapshot.val()) {
            console.log(`Someone connected: ${snapshot.val()}`);
        }
    });
}

function printPlayerOneDetails() {
    database.ref(playerOnePath).on("value", (snapshot) => {
        console.log(snapshot.val());
    });
}

function printPlayerTwoDetails() {
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



initializeGameDetails(gameData, playerOne, playerTwo);
printPlayerOneDetails();
printPlayerTwoDetails();
processConnectedUsers();

