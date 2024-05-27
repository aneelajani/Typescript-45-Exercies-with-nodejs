// Define afunction with a rest parameter that accept iteam arguments representing our sandwitsh
function makeSandwich(...items:string[]){
   console.log("\n Making a sendwich with the following iteams:\n")

   items.forEach(singleItem => console.log(singleItem));

   console.log("\n Now Enjoy Sandwich")
}

// Call the function 3 time with 3 different number of atguments
makeSandwich("Chiken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Chiken", "Cheese", "Mayo", "Egg");
