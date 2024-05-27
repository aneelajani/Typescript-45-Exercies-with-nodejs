// Define a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an Array containing magicians name
var magicians_name = ["Hary poter", "Anas", "Usma"];
// Calling the function to print each magician name
show_magicians(magicians_name);
