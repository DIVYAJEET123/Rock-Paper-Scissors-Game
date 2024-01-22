let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-para");

const userScorePara = document.querySelector("#user-value");
const compScorePara = document.querySelector("#comp-value");

const genCompChoice = ()=>{
    const options = ["stone","paper","scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
};

const drawGame = ()=>{
    msg.innerText = "Game was Draw. Try Again..";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice)=>{

    const compChoice = genCompChoice(); 

    if(userChoice === compChoice){
        //game draw.
        drawGame();
    }else{

        let userWin = true;
        if(userChoice === "stone"){
            //paper , Scissors
           userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors"? false : true;
        }
        else{
            //rock , paper
            userWin = compChoice === "stone"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach( (choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});