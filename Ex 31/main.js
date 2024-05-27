// Creating a array
var userNames = ["Shahana", "Ali", "Zeeshan", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some user!");
}
else {
    // using foreach loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
