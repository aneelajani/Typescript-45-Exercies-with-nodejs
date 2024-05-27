// Define a function to creat a car object with optional option....
function creat_car(manufacture, modle, ...options){
   //Initialize a car object with manufacture and modle
   let car = {
    manufacture: manufacture,
    modle: modle
   };

   // Add additional option to the car object
   options.forEach(option => {
    let [key, value,] = option.split(":");
    car[key.trim()] = value.trim();
});

return car;
}

// call the function to creat a car object
let my_car = creat_car("Toyota", "Corrolla", "color: Balack", "Sunroof: True", "Year: 2024");

//Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);