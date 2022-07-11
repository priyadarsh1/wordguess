//Console game
// module.exports = () => {
//   let name, email
//   let words = ["paper", "plane", "weird", "tired", "vague", "pills", "wired", "bread", "broom", "bride", "beads",
//   "catch", "cough", "dread", "fight", "fruit", "guava", "great", "graft", "honor", "ideas", "indic", "lamps", "pests",
//   "queen", "quick", "quilt", "roast", "roots", "stink", "super", "tamed", "tried", "volvo", "wreak", "yield"];
//   let randomWord = words[Math.floor(Math.random() * words.length)];
  
//   function wordGuessingGame(attempt){
//     if(attempt < 6){
//       const reader = require("readline").createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });
      
//       let matrix;
      
//       reader.question('Please enter a word:', (line) => {
//           if(words.includes(line)){
//             matrix = line;
//             reader.close();
//           }
//           else{
//             console.log('Entered word not in the list. Please try again!');
//             process.exit();
//           }
//       });
      
//       reader.on('close', () => {
//         let res = checkWord(matrix);
//         attempt = attempt + 1;
//         console.log(`Your entered response has following result: ${res[0]} with a score of ${res[1]}`)
    
//         if(res[1] == 10){
//           console.log(`Congratulations ${name}! You guessed it right. The correct word is ${randomWord}`);
//           return;
//         }
//         else{
//           if(attempt == 6){
//             console.log(`Sorry ${name}! Your attempts are over. The correct word was ${randomWord}`);
//             return;
//           }
//           else{
//             console.log(`Hey ${name}. You still have ${6 - attempt} attempts. Please try again!`)
//             wordGuessingGame(attempt);
//           }
//         }
//       })
      
//       function checkWord(arr){
//         let result = [], sum = 0;
//         for(let i = 0; i < arr.length; i++){
//           if(arr[i] == randomWord[i]){
//             result.push('G')
//             sum = sum + 2;
//           }
//           else{
//             if(randomWord.indexOf(arr[i].toLowerCase()) == -1){
//               result.push('R')
//               sum = sum + 0;
//             }
//             else{
//               result.push('Y')
//               sum = sum + 1;
//             }
//           }
//         }
//         return [result, sum];
//       }
  
//     }
//   }
  
//   function takeUserDetails(){
//     const reader = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
  
//     reader.question('Please enter your name:', (nme) => {
//       name = nme;
//       reader.question('Please enter your email address:', (mail) => {
//         email = mail;
//         reader.close();
//         console.log('Please choose a word from the following list: ',words)
//         wordGuessingGame(0);
//       })
//     })
//   }

// }

//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