// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`Creating  a ${size} shirt with the ${printMessage} print on shirt`)
    }
    
    // Calling a Function with by-defalt values
    make_shirt();

    // Calling a Function now with medium size and defalt message
    make_shirt("Medium")

    // Calling a Function now with small size and also different print message
    make_shirt("Small", "I Love javascript")
    