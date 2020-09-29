export function countsAsYes(userInput) {
    return userInput.charAt(0).toUpperCase() === 'Y';
}

export function checkScore(score) {
    if (score === 0) {
        return 'Oops you got 0/3!';
    }
    if (score === 1) {
        return 'You got 1/3 :(';
    }
    if (score === 2) {
        return 'OoOOo, almost there! You got 2/3';
    }
    if (score === 3) {
        return 'Congrats! You got a perfect 3/3.';
    }
}