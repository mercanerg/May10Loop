// **********************************************************************
// *                         Loops                                      *
// **********************************************************************

console.log(" ***** Loops ***** ");

//Math.floor() => round down
// Math.ceil() => round up
// Math.round() => round his value
// Math.trunc() => get integer part

for (let i = 1; i <= 10; i++) {
    const randomnubmber = Math.floor(Math.random() * 100 + 1);
    console.log(randomnubmber);
}

const n = prompt('enter n number');
let sum = 0;
for (let i = 1; i < 10; i++) {
    sum += i;
}
console.log('Sum = ', sum)

let i = 1;
while (i <= 5) {
    console.log('Hello - ', i);
    i++;
}

let prime = true;
for (i = 2; i < n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}
if (prime) console.log('Prime Number')
else console.log('Not prime')
prime = true;
for (i = 2; i < n; i++) {
    for (j = 2; j <= i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
        if (prime) {
            console.log(i);
        }
    }

    let grade;
    do {
        grade = prompt("0-100 enter a your point");
    } while ((grade > 100) || (grade < 0)) {
        console.log('Your score', grade);
    }
    let level;
    if (grade < 25) level = 'F'
    else if (grade < 50) level = 'E'
    else if (grade < 60) level = 'D'
    else if (grade < 70) level = 'C'
    else if (grade < 80) level = 'B'
    else if (grade <= 100) level = 'A'

    console.log('Your level is ', level);