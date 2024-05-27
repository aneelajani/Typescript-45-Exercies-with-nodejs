// Array of current user
var current_users = ["Anas", "Ali", "Areeba", "Zain", "Usama"];
// Array new user
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
//Loop through new_user to to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different message using If_Else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
