// Creating a array
let userNames = ["Shahana", "Ali", "Zeeshan", "Admin", "Usman"];

userNames = []

if(userNames.length === 0){
   console.log("Your Array in Empty We need to find some user!")
}else{
    // using foreach loop on array
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
      console.log(`Hello ${oneUser}, would you like to see a status report?`)
    } else{
       console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }  
     
  })
}