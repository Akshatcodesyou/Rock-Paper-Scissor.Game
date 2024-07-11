let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () =>{
    console.log("game was draw.");
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText = `You Win!`;
        userScore++;
        uScore.innerText = userScore;
    } else {
        msg.innerText = `You lose`;
        compScore++;
        cScore.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //generate comp choice
    const compChoice = gencompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ?  false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
