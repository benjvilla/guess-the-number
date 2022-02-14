const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber); 

  
    console.log("Now let's play!")

    let min = 1
    let max = 100
    let num = Math.floor((min + max) / 2)

  
    let input = await ask("Is it... " + num + "? Y or N "); {
    while (input !== `Y`); 
      
    // had a bunch of code here that was good ideas but not helping
    // deleted most of it and made more progress than I did all weekend
      
    }
  



  // Now try and complete the program.
  process.exit();
}
