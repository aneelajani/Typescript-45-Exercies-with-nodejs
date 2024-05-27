// Define the  function to show magician names
function show_magicians(magician: string[]){
    magician.forEach(name =>console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magician: string[]){
   return magician.map(name => `The great ${name}`);
}

// Define an Array of magicians name
let magicians_name = ["Hary poter", "Anas", "Usman"]

// Call make great function to modify magicians names
let great_magicians = make_great(magicians_name);

// call show_magicians that show modified list of magicians
show_magicians(great_magicians)
