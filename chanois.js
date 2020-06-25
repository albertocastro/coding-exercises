const game = (input) =>{

    const options = {
        1: "Scissors",
        2:"Paper",
        3:"Dwayne 'the rock' Johnson"
    }

    const machineOption = Math.ceil(Math.random() * 3)

    console.log("My Option", options[input])
    console.log("Machine's Option", options[machineOption])

    // Tie
    if(input === machineOption){
        console.log("Empate prra")
    }
    
    // Scissors
    if(input === 1 && machineOption === 2){
        console.log("Yo gané ")
    }
    if(input === 1 && machineOption === 3){
        console.log("Perdí ")

    }
    // Paper
    if(input === 2 && machineOption === 1){
        console.log("Perdí ")
        
    }
    if(input === 2 && machineOption === 3){
        console.log("Yo gané ")
    }
    // Rock
    if(input === 3 && machineOption === 1){
        console.log("Yo gané ")
        
    }
    if(input === 3 && machineOption === 2){
        console.log("Perdí ")
    }
    
}





game(3)