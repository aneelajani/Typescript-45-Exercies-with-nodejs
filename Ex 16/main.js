// creating a list arry
var guestList = ["Shahana", "Faiza", "Anas", "Komal"];
// Making veriable for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "nahi aa skti");
//add a remove values from guest list array
guestList.splice(0, 1, "Amir");
//Message print for Bigger Table
console.log("Good News ! we have Found a Bigger Table For Dinner");
//adding a new guest at starting of array
guestList.unshift("Ali");
//adding a new guest at eding index of array
guestList.push("Zain");
//Get  a middle index of our guest list  array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new value at Middle index of array
guestList.splice(middleIndex, 0, "Shahana");
console.log("Updated List of Our Guest");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", woud you like to Dinner with me?")); });
