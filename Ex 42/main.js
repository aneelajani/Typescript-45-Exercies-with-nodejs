// Define the  function to show magician names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
// Define an Array of magicians name
var magicians_name = ["Hary poter", "Anas", "Usman"];
var great_magicians = make_great(magicians_name);
console.log(great_magicians);
show_magicians(great_magicians);
