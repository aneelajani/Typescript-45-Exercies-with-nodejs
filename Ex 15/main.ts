let guestlist = ["Shahana","Faiza","Anas","Komal"];

let dontCome =  guestlist[0];

console.log(dontCome, "nahi aa skti");

guestlist.splice(0, 1, "Amir");

guestlist.forEach(guest => console.log(`salam ${guest}, would you like to Dinner with me?`));

