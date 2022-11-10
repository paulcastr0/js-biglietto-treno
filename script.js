//Input da inserire
let kilometers = prompt("How many kilometers do you have to do? ");
let age = prompt("How old are you? ");

let ticketPrice = kilometers * 0.21 ;

//arrotondamento fino a seconda cifra decimale
ticketPrice = (Math.round(ticketPrice * 100)/100).toFixed(2);

//operazione per il calcolo del
if (age < 18) {
    console.log(ticketPrice * 80/100)
}
else if (age > 65) {
    console.log(ticketPrice * 35/100)
}
else {
    console.log(ticketPrice)
} 