// Define a function to creat a car object with optional option....
function creat_car(manufacture, modle) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacture and modle
    var car = {
        manufacture: manufacture,
        modle: modle
    };
    // Add additional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to creat a car object
var my_car = creat_car("Toyota", "Corrolla", "color: Balack", "Sunroof: True", "Year: 2024");
//Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
