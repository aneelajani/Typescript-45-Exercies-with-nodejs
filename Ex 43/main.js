// Define the  function to show magician names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
// Define an Array of magicians name
var magician_names = ["Hary poter", "Anas", "Usman"];
//making a copy of orijnal array through .slice() function
var copy_magician_names = magician_names.slice();
// modify the coped array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays orijnal and copied
// Orijnal
console.log("Orijnal Array");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
