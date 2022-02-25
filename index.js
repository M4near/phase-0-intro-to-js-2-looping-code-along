const names = ["Guadalupe", "Ollie", "Aki"];

const event = ["Surprise"]

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push (`Thank you, ${names [i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(number){
    let countdown = number;
    while (countdown >= 0){
        console.log(countdown--);
    }
}
countDown(10);