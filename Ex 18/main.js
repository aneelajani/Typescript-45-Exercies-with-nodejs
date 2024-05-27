var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries and print its orignal order 
var contriesToVisite = ["China", "Danmark", "Brazeel", "Argentina"];
console.log("orignal order:", contriesToVisite);
// print the arrary in alhabetical order without modifing the actul array list 
console.log("Alphabetical order:", __spreadArray([], contriesToVisite, true).sort());
//show that the arrar still in its orignal array
console.log("still in orignal order:", contriesToVisite);
// print the arrary in reverse  order without modifing the actul array list 
console.log("Reverse order:", __spreadArray([], contriesToVisite, true).reverse());
//show that the arrar still in its orignal array
console.log("still in orignal order:", contriesToVisite);
//we have change the orignal array order now
console.log("orignal array reversed:", contriesToVisite.reverse());
// print the array to show that its back to its orignal order
console.log("back to orignal order:", contriesToVisite.reverse());
// print the array to show that its order has been changed in alphabetical order
console.log("sorted in alphabetical order:", contriesToVisite.sort());
//we have change again the orignal array order now in revers order again
console.log("orignal array reversed again:", contriesToVisite.reverse());
