//importing the common interactive command line user interface
const inquirer = require("inquirer");

//to make my setTimeout delays shorter and cleaner
const logger = (message) => {
  console.log(message);
};

//initialising new game
const newGame = () => {
  inquirer
    //prompt is the inquirer command used to ask the user a question
    .prompt([
      {
        name: "newGame",
        message: "A game of Scissors, Paper, Stone perhaps?",
        type: "list",
        choices: ["Sure thang", "Nah Imma nap"],
      },
    ])
    //after the user inputs their answer, we trigger the human vs computer or computer vs computer choice
    //setTimeouts are used so that the game goes at a slower pace and it makes it easier to read in the command line
    .then((answers) => {
      if (answers.newGame === "Sure thang") {
        setTimeout(logger, 500, ".");
        setTimeout(logger, 1000, "Let's Go");
        setTimeout(() => {
          humanOrComputer();
        }, 1500);
        //if user does not answer true, the game ends
      } else {
        setTimeout(logger, 500, ".");
        setTimeout(logger, 1000, "Goodbye son");
      }
    });
};

//humanOrComputer function is evoked to give a choice between being human (human vs computer) or skynet (computer vs computer)
const humanOrComputer = () => {
  inquirer
    .prompt([
      {
        name: "humanOrComputer",
        message: "Do you want to play or let SkyNet play for you?",
        type: "list",
        choices: ["Me play", "SkyNet play"],
      },
    ])
    //choice is made here and the relevant functions are evoked accordingly
    .then((answers) => {
      if (answers.humanOrComputer === "Me play") {
        setTimeout(logger, 500, ".");
        setTimeout(logger, 1000, "Human it is then");
        setTimeout(() => {
          human();
        }, 1500);
      } else {
        setTimeout(logger, 500, ".");
        setTimeout(logger, 1000, "Skynet Mode");
        setTimeout(() => {
          skynet();
        }, 1500);
      }
    });
};

//weapons and random weapons are declared here
const weapons = ["Scissors", "Paper", "Stone"];
const randomWeapon = () => {
  return weapons[Math.floor(Math.random() * weapons.length)];
};

//winner type and label declared here (type is used for testing)
let winner = { type: "", label: "" };

//the main results logic is here
const results = (playerChoice, computerChoice, playerLabel) => {
  let computer = "Computer";
  const user = "User";
  if (playerChoice === computerChoice) {
    winner.type = "No one";
    winner.label = "No one";
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Paper") {
      winner.label = playerLabel;
      winner.type = user;
    }
    if (computerChoice === "Stone") {
      winner.label = computer;
      winner.type = computer;
    }
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Stone") {
      winner.label = playerLabel;
      winner.type = user;
    }
    if (computerChoice === "Scissors") {
      winner.label = computer;
      winner.type = computer;
    }
  } else if (playerChoice === "Stone") {
    if (computerChoice === "Scissors") {
      winner.label = playerLabel;
      winner.type = user;
    }
    if (computerChoice === "Paper") {
      winner.label = computer;
      winner.type = computer;
    }
  }
  return winner;
};

//this is the human mode
const human = () => {
  //player is declared
  playerLabel = "Player";
  inquirer
    //player's choice is given here
    .prompt([
      {
        name: "weapon",
        message: "Select your weapon",
        type: "list",
        choices: weapons,
      },
    ])
    //player and computer choice is declared here
    .then((answers) => {
      playerChoice = answers.weapon;
      computerChoice = randomWeapon();
      setTimeout(logger, 500, ".");
      setTimeout(logger, 1000, `Computer chose ${computerChoice}!`);

      //results function is evoked and winner label is used to console.log winner
      setTimeout(() => {
        results(playerChoice, computerChoice, playerLabel);
        console.log(`${winner.label} wins!`);
      }, 1500);

      //play again function is evoked
      setTimeout(() => {
        playAgain();
      }, 2000);
    });
};

//skynet mode is here
//no choices from human is made, they just sit and watch
const skynet = () => {
  //player is declared
  playerLabel = "Skynet";

  //player and computer choices are declared (player is skynet here)
  playerChoice = randomWeapon();
  computerChoice = randomWeapon();
  setTimeout(logger, 500, ".");
  setTimeout(logger, 1000, `${playerLabel} chose ${playerChoice}!`);
  setTimeout(logger, 1500, `Computer chose ${computerChoice}!`);

  //results function is evoked and winner is logged
  setTimeout(() => {
    results(playerChoice, computerChoice, playerLabel);
    console.log(`${winner.label} wins!`);
  }, 2000);

  //play again function is evoked
  setTimeout(() => {
    playAgain();
  }, 2500);
};

//play again function asks if user wants to play another round
const playAgain = () => {
  inquirer
    .prompt([
      {
        name: "playAgain",
        message: "Play Again?",
        type: "list",
        choices: ["Yes", "No"],
      },
    ])

    //if answer is true, game will rerender humanOrComputer function
    .then((answers) => {
      if (answers.playAgain === "Yes") {
        setTimeout(logger, 500, ".");
        setTimeout(() => {
          humanOrComputer();
        }, 1000);

        //if not, game exits
      } else {
        setTimeout(logger, 500, ".");
        setTimeout(logger, 1000, "Goodbye!");
      }
    });
};

//file exports
exports.newGame = newGame;
exports.results = results;
