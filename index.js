//readline boilerplate
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//handle await/ask within code
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//runs intro script
function start() {

  //introduction text
  console.log("Let's play a game where one of us picks a number and the other tries to guess it!")
  
  async function pickHigh() {
    //set minimum guess
    let min = 1
    
    //set counter for number of guesses
    let counter = 1

    let max = await ask("Please set the highest number. It should be any number greater than 1. ")
    //set max to Number value
    let pickMax = parseInt(max)
    
    console.log("\nYou set " + pickMax + " as the highest number.")
    //assign original "guess" to num
    let num = Math.floor((min + pickMax) / 2)
    
    //function that allows user to pick game type
    async function gamePick() {

      //asks user to decide game type
      let picker = await ask("Who would you like to guess the secret number?\n(H)uman or (C)omputer? ")

      //runs reverse game - user guesses
      if (picker === `H`) {
        console.log("\nYou have decided to guess the secret number. ")

        //game that allows user to guess number
        function gameReverse() {

          //generate random number between 1 and the chosen highest number
          let secretNum = Math.ceil(Math.random() * pickMax)
          console.log("I've chosen a secret number between " + min + " and " + pickMax + "! ")
          
          //tells user game has started
          console.log("\nNow let's play!")
  
          //runs guess loop - user guesses
          async function reverseGuess() {

            //ask use for guess
            let guessString = await ask("\nWhat is your guess? ")
            let guess = parseInt(guessString)
  
            //handle incorrect guess
            if (guess !== secretNum) {
              console.log("Nope!")
  
              //handle guess lower than secret
              if (guess < secretNum) {
                counter = counter + 1
                min = guess + 1
                console.log("Too low! Guess between " + min + " and " + pickMax + ".\n ")
                reverseGuess()
  
                //handle guess higher than secret
              } else if (guess > secretNum) {
                counter = counter + 1
                pickMax = guess - 1
                console.log("Too high! Guess between " + min + " and " + pickMax + ".\n ")
                reverseGuess()
              }
              //if secret number is guessed correctly
            } else if (guess === secretNum) {
              console.log("\nYay! You guessed the secret number was " + secretNum + "! Good game!")
              console.log("You guessed my number in " + counter + " tries!")
  
              //offer user to play again
              let again = await ask("\nWould you like to play again? (Y)es or (N)o? ")
  
                //handle replay input
                if (again === `Y`) {
                  
                  //call game again from begining
                  console.log("\nGood luck in the next round!\n")
                  start()
  
                } else if (again === `N`) {
                  //exit program
                  console.log("\nThanks for playing!")
                  process.exit();

                //error catch - incorrect user input
                } else {
                console.log("Please try another answer.")
                gameGuess()
                }
            }
          }
          //call function to guess in reverse game
          reverseGuess()
        }
        //call function to run reverse game
        gameReverse()
        
        //------------------------------------//

        //runs original game - computer guesses
      } else if (picker === `C`) {
        console.log("\nYou have chosen to pick a secret number. ")

        //function that handles user input at start of game
        async function gameStart() {

          //establish number to guess
          let secretNum = await ask("What is your secret number?\nPlease choose a number between 1 and " + pickMax + ".\nI won't peek, I promise...\n")
          
          //set secret to Number value
          let secretNumber = parseInt(secretNum)
          
          //tells user number entered
          console.log('You entered: ' + secretNumber)

          //tells user game has started
          console.log("Now let's play!")
          
          //async function to loop questions until number is guessed correctly
          async function gameGuess() {
            let guess = await ask("Is it... " + num + "? (Y)es or (N)o? ")
          
            //handle wrong number guess
            if (guess === `N` && num !== secretNumber) {
              let verify = await ask("Is it (H)igher or (L)ower than " + num + "? ") 
            
              //handle Higher - reassign minimum
              if (verify === `H` && num < secretNumber) {
                counter = counter + 1
                min = num + 1
                num = Math.floor((min + pickMax) / 2)
                console.log("Your number is between " + min + " and " + pickMax )
                gameGuess()
  
                //cheat catch - guess is lower than secret number
              } else if (verify === `H` && num > secretNumber) {
                console.log("Are you sure your number isn't lower than " + num + "? ")
                gameGuess()
  
                //handle Lower - reassign minimum
              } else if (verify === `L` && num > secretNumber) {
                counter = counter + 1
                pickMax = num - 1
                num = Math.floor((min + pickMax) / 2)
                console.log("Your number is between " + min + " and " + pickMax )
                gameGuess()
              
                //cheat catch - guess is higher than secret number
              } else if (verify === `L` && num < secretNumber) {
                console.log("Are you sure your number isn't higher than " + num + "? ")
                gameGuess()

                //error catch - incorrect user input
              } else {
                console.log("Please try another answer.")
                gameGuess()
              }

              //cheat catch - correct number
            } else if (guess === `N` && num === secretNumber) {
              console.log("Are you sure your number isn't " + num + "? ")
              gameGuess();
  
              //cheat catch - incorrect number
            } else if (guess === `Y` && num !== secretNumber) {
              console.log("Hey! Your number isn't " + num + "! No cheating!")
              gameGuess();
  
              //on correct guess
            } else if (guess === `Y` && num === secretNumber) {
              console.log("\nYay! Your number is " + num + "! Good game!")
              console.log("I guessed your number in " + counter + " tries!")
  
              //offer user to play again
              let again = await ask("\nWould you like to play again? (Y)es or (N)o? ")
  
                //handle replay input
                if (again === `Y`) {

                  //call game again from begining
                  console.log("\nGood luck in the next round!\n")
                  start()
  
                } else if (again === `N`) {
                  //exit program
                  console.log("\nThanks for playing!")
                  process.exit();
                  
                  //error catch - incorrect user input
                } else {
                console.log("Please try another answer.")
                gameGuess()
                }
              //error catch - incorrect user input
            } else {
            console.log("Please try another answer.")
            gameGuess()
            }
          }
          //call function of "guessing"
          gameGuess()
        }
        //call function to start game
        gameStart()

        //error catch - incorrect user input
      } else {
      console.log("Please try another answer.")
      gameGuess()
      }
    }
    //call function to pick game
    gamePick()
  }
  //call function to set Highest possible number
  pickHigh()  
}
//call program
start();