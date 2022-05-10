let confirm;
do {
    const num = Math.floor(Math.random() * 100 + 1);
    console.log(num);
    let rights = 1;
    let guess;
    while (rights < 6) {

        guess = prompt("guess a number");
        if (guess == num) {
            console.log("You guess right", rights, 'times');
            break;
        } else if (guess < num) {
            alert('guess up');
        } else if (guess > num) {
            alert('guess down');
        }
        console.log(rights)
        rights++;
    }
    if (guess != num) {
        console.log('You have lost');
    }
    console.log('Game Over!');
    confirm = prompt('press Y to play again');
} while (confirm == 'Y' || confirm == 'y')