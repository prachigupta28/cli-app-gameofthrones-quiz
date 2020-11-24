var readLineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var quizBankLevel1 = [
{question: "Who is Jon Snow’s mother? ", answer: "Lyanna Stark", options: ["Lyanna Stark", "Lysa Arryn", "Cersei Lannister", "an unnamed prostitute"]},
{question: "How did Joffrey die? ", answer: "Poisoned at his own wedding feast", options: ["Struck by an errant crossbow shot","Stabbed by a horde of small children","Poisoned at his own wedding feast","Thrown from the walls of the Red Keep"]},
{question: "Which of the following is NOT one of Daenerys's titles? ", answer: "The Unsullied", options: ["Breaker of Chains", "Khaleesi", "The Unsullied", "Mother of Dragons"]},
{question: "How are Jon and Daenerys related to each other? ", answer: "Aunt / nephew", options: ["Brother / sister", "Aunt / nephew", "Cousins", "They aren't"]},
{question: "Which of these characters was NOT killed by Arya? ", answer: "Tywin Lannister", options: ["Petyr Baelish", "Walder Frey", "Tywin Lannister", "The Night King"]}
];

var highScores = [{name: "Daenerys", score: 5},
        {name: "Tyrion", score: 5},
        {name: "Jon", score: 4}]

function play(question, options, answer){
  console.log(question);
var userAnswerIndex = readLineSync.keyInSelect(options,"Please select the answer", {cancel: false});
if(options[userAnswerIndex] === answer){
  score = score+1;
  console.log(chalk.bgGreen.black.bold("\n"+"Congratulations, you won another war!!"));
}else{ 
  console.log(chalk.bgRed("\n"+"You know nothing, Jon Snow!"));
}
console.log(chalk.bgBlue.white.bold("Gold coins earned: ",score));
console.log("--------------------------------------");
}
console.log("\n"+"--------------------------------------");
console.log(chalk.bgGreen.black.bold("How Well Do You Know Game of Thrones?"));
console.log("--------------------------------------");

console.log(chalk.red("Prepare to journey into the mythos of the Seven Kingdoms and take the trivia challenge that any true heir to the Iron Throne would survive."))
console.log(chalk.bgRed("\n"+"\"When you play the game of thrones, you win or you die. There is no middle ground. — Cersei\""));

for(var i=0; i<quizBankLevel1.length; i++){
  console.log(chalk.blue("\n"+"Question no."+ (i+1) +":"));
play(quizBankLevel1[i].question, quizBankLevel1[i].options, quizBankLevel1[i].answer);
}
if(score >= highScores[highScores.length-1].score){
        console.log(chalk.bgRed.bold("\n"+"Congratulations!! You have made it to the list of top scorers. Total no of gold coins earned: "+ score+". Please send us a screenshot on abc@gmail.com, to get you name added into the following list."));
      }else{
    console.log(chalk.bgBlue.white.bold("Total no of gold coins earned: "+score+"!!"));
      }
      console.log(chalk.bgBlue.white.bold("\n"+"HighScores: "));
      for(var i=0; i<highScores.length; i++){
      console.log("Name: ",highScores[i].name,", Score: "+highScores[i].score);
      }
console.log(chalk.green.bold("\n"+"Thanks for taking the quiz!!"));

console.log(chalk.bgRed.bold("\n"+"\"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you. — Tyrion\""));

