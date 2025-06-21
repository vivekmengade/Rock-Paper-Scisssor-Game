let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
let you = document.querySelector('#user-score');
let computer = document.querySelector('#comp-score');

const gencompchoice = () => {
    let options = ['rock', 'paper', 'scissor'];
    let randomid = Math.floor(Math.random() * 3);
    return options[randomid];
}

const showwinner = (user_win) => {
    if (user_win) {
        console.log('User wins!');
        msg.innerHTML = 'You win!';
        you.innerHTML = user_score;
        computer.innerHTML = computer_score;
    } else {
        console.log('Computer wins!');
        msg.innerHTML = 'Computer wins!';
        you.innerHTML = user_score;
        computer.innerHTML = computer_score;
    }
}

const playgame = (id) => {
    console.log(`User choice = ${id}`);
    const compchoice = gencompchoice();
    console.log(`Computer choice = ${compchoice}`);
    
    if (id === compchoice) {
        console.log('Game was a draw');
        msg.innerHTML = `It's a draw!`;
        return;
    }

    let user_win = true;

    if (id === 'rock' && compchoice === 'paper') {
        user_win = false;
        computer_score++;
    } else if (id === 'paper' && compchoice === 'scissor') {
        user_win = false;
        computer_score++;
    } else if (id === 'scissor' && compchoice === 'rock') {
        user_win = false;
        computer_score++;
    } else{
        user_win = true;
        user_score++;
    }
    showwinner(user_win);
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const id = choice.getAttribute('id');
        playgame(id);
    });
});
