var guestlist = ["Shahana", "Faiza", "Anas", "Komal"];
var dontCome = guestlist[0];
console.log(dontCome, "nahi aa skti");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to Dinner with me?")); });
