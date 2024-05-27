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
//Making a veriable for storing a middle index of our guest list  array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new value at Middle index of array
guestList.splice(middleIndex, 0, "Shahana");
// print message of updated List
console.log("Updated List of Our Guest");
//sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", woud you like to Dinner with me?")); });
//inform that only two guest can be invited dinner
console.log("unfortunately,the new dinner tablewont arrive on time,so I can only invite two guest to dinner with me");
//using while-loop to remove guest from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry,".concat(removedGuest, ", i cant invite you to dinner"));
}
//sending a invitation to the last two guest on the list 
console.log("invitation to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ",your are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
