//BASKETBALL GAME PROJECT

//Scores of John
let johnScore1 = 89;
let johnScore2 = 120;
let johnScore3 = 103;

//Scores of Mike
let mikeScore1 = 116;
let mikeScore2 = 94;
let mikeScore3 = 123;

//Calculate Johns team score average
let averageScoreJohn = (johnScore1 + johnScore2 + johnScore3) / 3;
console.log(averageScoreJohn);

//Calculate Mikes team score average
let averageScoreMike = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
console.log(averageScoreMike);

//Decide which team wins

if (averageScoreJohn > averageScoreMike) {
  console.log(`John's team wins with '${averageScoreJohn}' points.`);
} else if (averageScoreJohn == averageScoreMike) {
  console.log(`No Wins! DRAW!`);
} else {
  console.log(`Mike's team wins with '${averageScoreMike}' points.`);
}
