const rockbtn = document.querySelector('.rock-btn');
rockbtn.addEventListener("click", function () {
    const your = document.getElementById('your');
    your.innerHTML = '<i class="fa-solid fa-hand-fist"></i> <h2>YOU</h2>';
});

const paperbtn = document.querySelector('.paper-btn');
paperbtn.addEventListener("click", function () {
    const your = document.getElementById('your');
    your.innerHTML = '<i class="fa-solid fa-hand"></i> <h2>YOU</h2>';
});

const scissorbtn = document.querySelector('.scissor-btn');
scissorbtn.addEventListener("click", function () {
    const your = document.getElementById('your');
    your.innerHTML = '<i class="fa-solid fa-hand-peace"></i> <h2>YOU</h2>';
});


let currentRound = 1;
let totalRounds = 5;
let gameFinished = false;
const fifthround = document.getElementById('fifth');
fifthround.addEventListener("click", function () {
    const circle = document.getElementById('circle');
    const circles = document.getElementById('circles');
    currentRound = 1;
    totalRounds = 5;
    gameFinished = false;
    circle.innerHTML = '<p>Rounds</p> <p>1/5</p>';
    circles.innerHTML =
        '<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>';
    circles.classList.remove('sevencircle');
    updateRound();
});

const seventhround = document.getElementById('seventh');
seventhround.addEventListener("click", function () {
    const circle = document.getElementById('circle');
    const circles = document.getElementById('circles');
    currentRound = 1;
    totalRounds = 7;
    gameFinished = false;
    circle.innerHTML = '<p>Rounds</p> <p>1/7</p>';
    circles.innerHTML =
        '<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>';
    circles.classList.add('sevencircle');
    updateRound();
});

const rockIcon = '<i class="fa-solid fa-hand-fist"></i>';
const paperIcon = '<i class="fa-solid fa-hand"></i>';
const scissorIcon = '<i class="fa-solid fa-hand-peace"></i>';
const computer = document.getElementById('computer');
const choices = ['Rock', 'Paper', 'Scissor'];
const rock = document.querySelector('.rock-btn');
rock.addEventListener('click', function () {
    if (gameFinished) {
        return;
    }
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    const yourChoice = 'Rock';
    getComputerChoice(computerChoice);
    console.log('computer choice is:', computerChoice);
    updateScore(yourChoice, computerChoice);
    currentRound++;
    updateRound();
    checkGameOver();
});

const paper = document.querySelector('.paper-btn');
paper.addEventListener('click', function () {
    if (gameFinished) {
        return;
    }
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    const yourChoice = 'Paper';
    getComputerChoice(computerChoice);
    console.log('computer choice is:', computerChoice);
    updateScore(yourChoice, computerChoice);
    currentRound++;
    updateRound();
    checkGameOver();
});

const scissor = document.querySelector('.scissor-btn');
scissor.addEventListener('click', function () {
    if (gameFinished) {
        return;
    }
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    const yourChoice = 'Scissor';
    getComputerChoice(computerChoice);
    console.log('computer choice is:', computerChoice);
    updateScore(yourChoice, computerChoice);
    currentRound++;
    updateRound();
    checkGameOver();
});

function getComputerChoice(computerChoice) {
    if (computerChoice === 'Rock') {
        computer.innerHTML =
            `${rockIcon}<h2>COMPUTER</h2>`;
    } else if (computerChoice === 'Paper') {
        computer.innerHTML =
            `${paperIcon}<h2>COMPUTER</h2>`;
    } else {
        computer.innerHTML =
            `${scissorIcon}<h2>COMPUTER</h2>`;
    }
}

const winScore = document.getElementById('win-score');
const computerScore = document.getElementById('score-comp');
const yourScore = document.getElementById('score-you');
const gameOver = document.getElementById('game-over');
const finalResult = document.getElementById('final-result');
const finalScore = document.getElementById('final-score');
const playAgain = document.getElementById('play-again');


function updateScore(yourChoice, computerChoice) {
    if (yourChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore.innerHTML =
            Number(computerScore.innerHTML) + 1;
        winScore.innerHTML =
            `<img src="./Public/icons/skull-svgrepo-com.svg" class="skull-icon"> <h3>YOU LOSE</h3> <img src="./Public/icons/skull-svgrepo-com.svg" class="skull-icon">`;
        winScore.className = 'celebration lose';
    } else if (yourChoice === 'Rock' && computerChoice === 'Scissor') {
        yourScore.innerHTML =
            Number(yourScore.innerHTML) + 1;
        winScore.innerHTML =
            `<img src="./Public/icons/clapping-clap-svgrepo-com.svg" class="clapping-icon"> <h3>YOU WIN</h3> <img src="./Public/icons/clapping-clap-svgrepo-com.svg" class="clapping-icon">`;
        winScore.className = 'celebration win';
    } else if (yourChoice === 'Paper' && computerChoice === 'Rock') {
        yourScore.innerHTML =
            Number(yourScore.innerHTML) + 1;
        winScore.innerHTML =
            `<img src="./Public/icons/clapping-clap-svgrepo-com.svg" class="clapping-icon"> <h3>YOU WIN</h3> <img src="./Public/icons/clapping-clap-svgrepo-com.svg" class="clapping-icon">`;
        winScore.className = 'celebration win';
    } else if (yourChoice === 'Paper' && computerChoice === 'Scissor') {
        computerScore.innerHTML =
            Number(computerScore.innerHTML) + 1;
        winScore.innerHTML =
            `<img src="./Public/icons/skull-svgrepo-com.svg" class="skull-icon"> <h3>YOU LOSE</h3> <img src="./Public/icons/skull-svgrepo-com.svg" class="skull-icon">`;
        winScore.className = 'celebration lose';
    } else if (yourChoice === 'Scissor' && computerChoice === 'Rock') {
        computerScore.innerHTML =
            Number(computerScore.innerHTML) + 1;
        winScore.innerHTML =
            `<img src="./Public/icons/skull-svgrepo-com.svg" class="skull-icon"> <h3>YOU LOSE</h3> <img src="./Public/icons/skull-svgrepo-com.svg" class="skull-icon">`;
        winScore.className = 'celebration lose';
    } else if (yourChoice === 'Scissor' && computerChoice === 'Paper') {
        yourScore.innerHTML =
            Number(yourScore.innerHTML) + 1;
        winScore.innerHTML =
            `<img src="./Public/icons/clapping-clap-svgrepo-com.svg" class="clapping-icon"> <h3>YOU WIN</h3> <img src="./Public/icons/clapping-clap-svgrepo-com.svg" class="clapping-icon">`;
        winScore.className = 'celebration win';
    } else {
        winScore.innerHTML =
            `<img src="./Public/icons/handshake-svgrepo-com.svg" class="handshake-icon"> <h3>DRAW</h3> <img src="./Public/icons/handshake-svgrepo-com.svg" class="handshake-icon">`;
        winScore.className = 'celebration draw';
    }
}


function checkGameOver() {
    if (currentRound > totalRounds) {
        gameFinished = true;
        gameOver.style.display = 'block';
        document.getElementById('game-dark').style.display = 'block';
        const you = Number(yourScore.innerHTML);
        const computer = Number(computerScore.innerHTML);
        finalScore.innerHTML =
            `You ${you} - ${computer} Computer`;
        if (you > computer) {
            finalResult.innerHTML = '🏆 YOU WIN!';
        } else if (computer > you) {
            finalResult.innerHTML = '😢 YOU LOSE!';
        } else {
            finalResult.innerHTML = '🤝 DRAW!';
        }
    }
}

function updateRound() {
    const roundCircles =
        document.querySelectorAll('#circles > div');
    roundCircles.forEach((circle, index) => {
        if (index + 1 <= currentRound) {
            circle.classList.add('active-round');
        } else {
            circle.classList.remove('active-round');
        }
    });
}
updateRound();

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', function () {
    yourScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    currentRound = 1;
    gameFinished = false;
    document.getElementById('your').innerHTML =
        '<i class="fa-solid fa-circle-question"></i><h2> YOU </h2>';
    document.getElementById('computer').innerHTML =
        '<i class="fa-solid fa-microchip"></i><h2> COMPUTER</h2>';
    winScore.innerHTML =
        `<img src="./Public/icons/restart-square-svgrepo-com.svg" class="restart-icon"><h3> GAME RESTARTED</h3>`;
    winScore.classList.add('celebration');
    updateRound();
});

playAgain.addEventListener('click', function () {
    yourScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    winScore.innerHTML = '<h3>PLAY AGAIN</h3>';
    winScore.className = 'celebration play-again';
    currentRound = 1;
    gameFinished = false;
    gameOver.style.display = 'none';
    document.getElementById('game-dark').style.display ='none';
    updateRound();
});

