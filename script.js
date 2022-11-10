let kilometers = prompt("How many kilometers do you have to do? ");
let age = prompt("How old are you? ");

let ticketPrice = kilometers * 0.21 ;

if (age < 18) {
    console.log(ticketPrice * 80/100)
}
else if (age > 65) {
    console.log(ticketPrice * 35/100)
}
else {
    console.log(ticketPrice)
}
