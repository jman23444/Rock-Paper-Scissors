// Init DOM elements
const select = document.querySelector("select"); 
const submit = document.getElementById("submit");
const displayComputerChoice = document.getElementById("display-computer-choice");
const displayWinner = document.getElementById("display-winner"); 
const resetButton = document.getElementById("play-again"); 

// Init default state on page load
document.addEventListener("DOMContentLoaded", resetPage);

// 
submit.addEventListener("click", () => {
    // init variables
    const compChoice =  computerChoice();
    const userChoice = select.value;
    //
    if (determineWinner(userChoice, compChoice) === userChoice) {
        displayWinner.textContent = "You beat The Machine!";
    } else if (determineWinner(userChoice, compChoice) === compChoice) {
        displayWinner.textContent = "The Machine Beat You!";
    } else {
        displayWinner.textContent = "It's a tie!";
    }
    //
    displayComputerChoice.textContent = compChoice;
});

// Helper Function To Determine Winner
function determineWinner(userChoice, compChoice) {
    //
    if (userChoice === compChoice) {
        return "It's a tie!";
    }
    //
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        return userChoice;
    }
    //
    return compChoice;
}

// Helper Function to generate Computer Choice
function computerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computersChoice = "";
    switch (randomNum) {
        case (1):
            computersChoice = "rock";
            break;
        case (2): 
            computersChoice = "scissors";
            break;
        case (3): 
            computersChoice = "paper";
            break;
    }
    return computersChoice;
}

// Game Reset
resetButton.addEventListener("click", resetPage());

// Helper function for returning page to default state
function resetPage() {
    // Resetting computer choice
    displayComputerChoice.textContent = "";
    displayComputerChoice.style.display = "none";
    // Resetting winner display
    displayWinner.textContent = "";
    displayWinner.style.display = "none";
    // Resetting player choice
    select.selectedIndex = 0;
}

