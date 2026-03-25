// Gets Computer choice - by having rnadom number from 0 - 99 if if 0-32 = rock 33-66 = scissors 
// 67-99 = paper  
function getComputerChoice() {
   a = Math.random() * 100 
     if (a >= 0 && a <= 32) {
        return "Rock"
     } else if (a >= 33 && a <= 66) {
        return "Scissors"
     } else if (a >= 67) {
        return "Paper"
     }
  
}

// Ask the human for their choice
function getHumanChoice() {
     return prompt("We're playing Rock Paper Scissors: 3, 2, 1 GO!!") 
        
}

// intializes two new variables for scores 
let humanScore = 0
let computerScore = 0

// this function initiates the game which has 5 rounds in 
function playGame() {
// sets scores to 0 in the function

    humanScore = 0 
    computerScore = 0 

// this is the function that gets called to play each specific round of RPS

    function playRound(humanChoice, computerChoice) {

// Sets humanchoice to lowercase so there choice is caps insensitive  

    humanChoice = humanChoice.toLowerCase()

// shows the selection of the human and computer in the console 

    console.log("Computer chose " + computerChoice)
    console.log("Human chose " + humanChoice)

// Logic for deciding who wins each game of rock paper scissor and the output message
// Also adds 1 to the scoreboard for the respective winner

    if (humanChoice == "rock" && computerChoice == "Rock") {
        return "Draw, both chose Rock" 
     } else if (humanChoice == "rock" && computerChoice == "Scissors") {
        humanScore += 1
        return "You Win!, Rock beats Scissors"
     } else if (humanChoice == "rock" && computerChoice == "Paper") {
        computerScore += 1
        return "Computer Wins :(, Paper beats Rock"
     } else if (humanChoice == "paper" && computerChoice == "Rock") {
        humanScore += 1
        return "You Win!, Paper beats Rock"
     } else if (humanChoice == "paper" && computerChoice == "Paper") {
        return "Draw, both chose Paper"
     } else if (humanChoice == "paper" && computerChoice == "Scissors") {
        computerScore += 1
        return "Computer Wins :(, Scissors beats Paper" 
     }  else if (humanChoice == "scissors" && computerChoice == "Rock") {
        computerScore += 1
        return "Computer Wins :(, Rock beats Scissors"
     } else if (humanChoice == "scissors" && computerChoice == "Scissors") {
        return "Draw, both chose Scissors"
     } else if(humanChoice == "scissors" && computerChoice == "Paper") {
        humanScore += 1
        return "You Wins!, Scissors beats Paper"
     } else {
        return "Invalid Game, You must chose either Rock, Paper or Scissors"
     }  
    }

// The for loop to run 5 rounds of RPS

    for (let i = 0; i < 5; i++) {
       console.log(playRound(getHumanChoice(), getComputerChoice()))
       
}  

// To output the scoreboard after the 5 rounds 

    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)
    
// Write a message based off who won the overall game of RPS

    if (humanScore > computerScore) {
        console.log("Human Wins Yay")
    } else if (computerScore > humanScore) {
        console.log("Computer wins :(")
    } else if (humanScore == computerScore){
        console.log("It's a draw, Good Game")
    }
}

// Calls the function 

playGame()