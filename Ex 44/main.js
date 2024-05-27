// Define afunction with a rest parameter that accept iteam arguments representing our sandwitsh
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sendwich with the following iteams:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
// Call the function 3 time with 3 different number of atguments
makeSandwich("Chiken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Chiken", "Cheese", "Mayo", "Egg");
