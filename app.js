// Traxck the score
let userScore = 0;
let compScore = 0;          


// Access the choices step 1
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");


// here computer choice generate using array
const getCompChoice = () =>{
    const options = ["rock","paper","scissors"]; // we store strings as array to use random
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; //choose index postion  
}

// no need to update score for draw
const drawGame = () =>{
    msg.innerText =(" Game was Draw. Play again!");
    msg.style.backgroundColor = "rgba(167, 153, 158, 0.842)";
};

// last step userwin update userscore or update compscore
const showWinnner= (userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// we have user choice
const playGame= (userChoice) =>{
    const compChoice = getCompChoice(); // Generate comp choice  opption[randIdx]

    if(userChoice === compChoice){ // fight 
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissor,rock
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock, paper
            userWin= compChoice ==="rock" ? false : true;
        }
        showWinnner(userWin, userChoice, compChoice); // final winner
    }
};

// Event Listener step 2
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
      const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});





























