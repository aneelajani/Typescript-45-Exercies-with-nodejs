// Array of current user
let current_users = ["Anas", "ali", "Areeba", "Zain", "Usama"]

// Array new user
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

//Loop through new_user to to check for usernames avaibility
new_users.forEach(new_one_user =>{
  
  // Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print Different message using If_Else statement
    if(our_condition){
   console.log(`sorry ${new_one_user} is already taken`)
}else{
      console.log(`This Username ${new_one_user} is available`)
}

})