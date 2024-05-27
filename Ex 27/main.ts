//define variable
let alienColor1 = "green";

// using If and Else-If statement
if (alienColor1 === "green"){
    console.log("(version 1) you shot down green alien you have earned 5 point");
}

else if(alienColor1 === "yellow"){
    console.log("you shot down yellow alien you have earned 10 point");
}
else if(alienColor1 === "red"){
    console.log("you shot down red alien you have earned 15 point");
}
// version 2

let alienColor2 = "yellow";

if (alienColor2 === "green"){
    console.log("you shot down green alien you have earned 5 point");
}
else if  (alienColor2 === "yellow"){
    console.log("(version 2) you shot down yellow alien you have earned 10 point");
} 
else if  (alienColor2 === "red"){
    console.log("you shot down red alien you have earned 15 point"); 
}     

//version 3

let alienColor3 = "red";

if (alienColor3 === "green"){
    console.log("you shot down green alien you have earned 5 point");
}
else if  (alienColor3 === "yellow"){
    console.log("you shot down yellow alien you have earned 10 point");
}
if (alienColor3 === "red"){
    console.log("(version 3) you shot down red alien you have earned 15 point");
}
