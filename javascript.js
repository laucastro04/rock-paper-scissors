//part 1
//Create a variable called humanScore that keeps track of the persons score IN GLOBAL SCOPE initial value is 0
//Create a variable called computerScore that tracks the computers score IN GLOBAL SCOPE initial value is 0
let humanScore = 0;
let computerScore = 0;

//part 2
//call math.random to randomly generate a number between 0-2
//create an if stating that if num is equal to zero to
    //return the word rock
// Else if the number is equal to 1 
    //return the word pape
//else if the number is equal to 2
    //return the woprd scissor
function getComputerChoice() {
    if (num == 0) {
        console.log('Computer Chose: rock');
        return "Rock";
    } else if (num == 1) {
        console.log('Computer Chose: paper');
        return "Paper";
    } else if (num == 2) {
        console.log('Computer Chose: scissors');
        return "Scissors";
    }
}

//part 3
//Create a funtion called getHumanChoice and give it the parameters of input
//Create a a variable and call it answer that stores the infor for the user prompt
//Analyze the input and if the input Rock or rock 
    //return 0
//else if input is equal to paper or Paper
    //return 1
//else if inout is equal to scissors or Scissors
    //return 2
function getHumanChoice() {
    if (answer === "rock" || answer === "paper" || answer === "scissors") {
        console.log(`You chose: ${answer}`);
        return answer;
    } else {
        console.log("Invalid input. Please choose Rock, Paper, or Scissors.");
        return getHumanChoice(); // Recursively ask again for valid input
    }
}

//part 4
//Create a function called playRound that takes two paramteters humanChoice and ComputerChoice
    //set an iff statement stating what values are equal to eachother
        // if so print thats a tie
    // else if answer is rock and num is paper
        //Computer wins is logged
        //the current score for both is shown
    //else if answer is rock and num is scissors
        //Human wins is logged
        //the current score for both is shown
    //else if answer is rock and num is scissors
        //Human wins is logged
        //the current score for both is shown
function playRound (HumanChoice, ComputerChoice) {
    if (answer === "rock" && num == 0 || answer === "paper" && num == 1 || answer === "scissors" && num == 2 ) {
        console.log("Thers a Tie!");
        console.log (`The current score is: Computer: ${computerScore}, Human: ${humanScore}`);
    } else if (answer == "rock" && num == 1) {
        console.log("The Computer Wins!");
        computerScore ++;
        console.log (`The current score is: Computer: ${computerScore}, Human: ${humanScore}`);
    } else if (answer == "rock" && num == 2) {
        console.log("The Human Wins!");
        humanScore ++;
        console.log (`The current score is: Computer: ${computerScore}, Human: ${humanScore}`);
    } else if (answer == "paper" && num == 0) {
        console.log("The Human Wins!");
        humanScore ++;
        console.log (`The current score is: Computer: ${computerScore}, Human: ${humanScore}`);
    } else if (answer == "paper" && num == 2) {
        console.log("The Computer Wins!");
        computerScore ++;
        console.log (`The current score is: Computer: ${computerScore}, Human: ${humanScore}`);
    } else if (answer == "scissors" && num == 0) {
        console.log("The Computer Wins!");
        computerScore ++;
        console.log (`The current score is: Computer: ${computerScore}, Human: ${humanScore}`);
    } else if (answer == "scissors" && num == 1) {
        console.log("The Human Wins!");
        humanScore ++;
        console.log (`The current score is: Computer: ${computerScore}, Human: ${humanScore}`);
    }
} 

/*Step 5: */
// Create a function called play game with empty parameters
    //create a for loop that creates a variable called game and sets value ton 0 and states that while values is less than 5 keep going, increase game by 1 each round
        //print out the round
        //declare num for the computer to cose a random number each round
        //declare answer for the computer to cose a random number each round
        //call the getComputerChoice function
        //call the getHumanChoice function
        //call play Round

    //Print out the title and the final score
    //create an if statement saying that if the computeScore is greater than the humanScore
        //Print out the computer is the winner
    // else if the humanScore is greater than the computerScore
        //printout the human is the winner
    // else
        //print out there is a tie
function playGame () {
    for (let game = 0; game < 5; game++) {
        console.log(game);
        num = Math.floor(Math.random() * 3);
        answer = prompt("Choose Rock, Paper, or Scissors!").trim().toLowerCase();
        getComputerChoice();
        getHumanChoice();
        playRound();
    }

    console.log("The Final Score Is")
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`)
    if (computerScore > humanScore) {
        console.log("THE COMPUTER IS THE WINNER");
    } else if (humanScore > computerScore) {
        console.log("THE HUMAN IS THE WINNER");
    } else {
        console.log("COMPUTER AND HUMAN ARE TIED")
    }
}
playGame();