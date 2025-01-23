
// Default state of page load 
document.addEventListener("DOMContentLoaded", resetPage);

// Intializing variables
const buttons = document.querySelectorAll(".button-container button");
const displayComputerChoice = document.querySelector("#display-computer-choice");
const displayWinner = document.querySelector("#display-winner");
const resetButton = document.querySelector("#play-again");

// Getting user's choice
let userChoice;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove('active'));
        userChoice = button.id;
        button.classList.toggle('active');
    })
})

//
submit.addEventListener("click", () => {
    // 
    const compChoice = generateChoice();
    //
    const result = determineWinner(userChoice, compChoice);
    //
    if (result === "tie") {
        displayWinner.textContent = "It's a tie!";
    } else if (result === userChoice) {
        displayWinner.textContent = "You beat The Machine!";
    } else {
        displayWinner.textContent = "The Machine Beat You!";
    }
    //
    displayComputerChoice.textContent = compChoice;
    displayComputerChoice.style.display = "block";
    displayWinner.style.display = "block";
    //
    submit.style.display = "none";
});

// Game Reset
resetButton.addEventListener("click", resetPage);

// Helper Function To Determine Winner
function determineWinner(userChoice, compChoice) {
    //
    if (userChoice === compChoice) {
        return "tie";
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

// Helper Function To Generate Computer Choice
function generateChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    //
    switch (randomNum) {
        case (0):
            return 'rock';
        case (1):
            return 'paper';
        case (2): 
            return 'scissors';
    }
}

// Helper Function to return page to default state
function resetPage() {
    // Resetting computer choice
    displayComputerChoice.textContent = "";
    displayComputerChoice.style.display = "none";
    // Resetting winner display
    displayWinner.textContent = "";
    displayWinner.style.display = "none";
    // Setting submit button visibility to block
    submit.style.display = "block";
    // Toggling off the 'active' class from all buttons
    const activeButton = document.querySelector(".button-container button.active");
    if (activeButton) {
        activeButton.classList.remove('active');
    }
}









