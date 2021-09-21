const chalk = require('chalk');
var readLineSync =require('readline-sync');
var name=readLineSync.question(chalk.yellow("whats your name? "));
var score=0;
var highScore=
[
  {name:"akshat",
  score:5},
  {name:"mom",
    score:3 },
{
name:"shweta",
score:4
},
]
console.log(chalk.blue("hey welcome "+name));
console.log(chalk.blue("do you know tanay "+name));
function play(question, answer)
{
  var useranswer=readLineSync.question(chalk.magenta(question));
  if (useranswer===answer)
  {
    console.log(chalk.green("you are right"));
     score = score + 1
  }else
  {
    console.log(chalk.red("you are wrong"));
  }
  console.log("your current score is "+score)
}
  var series=[
  {
    question: "where do i live?\n\
              a)India\n\
              b)Bangladesh\n\
              c)America\n\
              ",
    answer:"a"
  },
  {
    question:"what is my nick name?\n\
    a)Nikki\n\
    b)Shankey\n\
    c)AKi\n\
    ",
    answer:"b"
  },
  {
    question:"whoes akshats favourite character?\n\
    a)Thor\n\
    b)Iron Man\n\
    c)Black Widow\n\
    d)Green Lantern\n\
    ",
    answer:"a"

  },
  {
    question:"whats favourite dish?\n\
    a)Chole-Bhature\n\
    b)Chole-chawal\n\
    c)Burger\n\
    d)momos\n\
    ",
    answer:"a"

  },
  {
    question:"whats Akshat favourtie sports?\n\
    a)kabaddi\n\
    b)Football\n\
    c)Tennis\n\
    d)Cricket\n\
    ",
    answer:"b"
  }];

  for( var i=0;i<series.length;i=i+1 )
  {
    var quiz=series[i];
    play(quiz.question,quiz.answer);
  }
  console.log("your final score = "+score);
  
  for(var u=0;u<=2; u++ )
  {
    var scoring=highScore[u];
    console.log(scoring.name+" and their high score "+scoring.score)
  }

  
  