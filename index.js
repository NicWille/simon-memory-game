const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let yourPattern = [];
let lvl = 0;
let started = false;
let numberOfClicks = 0;
let highscore = 0




$(document).keydown(function() {

  if (started === false) {
    started = true
    simonSays()
  }
});



function gameover() {

  if (lvl => highScore) highscore = lvl;
  $("body").addClass("game-over")
  $("#level-title").text("GAMEOVER")
  $("#score").text("Your high-score is " + highscore)
  // + break +"Your lvl is " + lvl + "!")
  console.log("gameover")
  console.log(yourPattern + " does not equal " + gamePattern)
  console.log("your lvl is " + lvl)
  gamePattern = [];
  yourPattern = [];
  lvl = 0;
  started = false;
  numberOfClicks = 0;

  //press any button,,,,,started equals false etc..
}

function restart() {
  $("#level-title").text("Press any Key to Start")
  $("body").removeClass("game-over")
}


function checkAnswer() {

  for (let i = 0; i < yourPattern.length; i++) {
    if (yourPattern[i] != gamePattern[i]) {
      gameover()
      setTimeout(restart, 2000);
      return
    }
  }

  if (numberOfClicks === gamePattern.length) {
    console.log(numberOfClicks + "=" + gamePattern.length)
    console.log("need no more clicks")
    numberOfClicks = 0
    yourPattern = []
    lvl++
    setTimeout(simonSays, 1000);
  }
}

$(".btn").click(function() {
  console.log(gamePattern)

  yourPattern.push(this.id)
  flashAndMakeSound(this.id)
  numberOfClicks++
  checkAnswer()
});


function randomColorGenerator() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);
};


function simonSays() {
  let timer = 600

  $("#level-title").text("Level " + lvl)
  randomColorGenerator();
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(flashAndMakeSound, timer, gamePattern[i]);
    timer = timer + 600
  };
  // lvl++
};


function flashAndMakeSound(currentColor) {
  var audio = new Audio("sounds/" + currentColor + ".mp3");

  audio.play();
  $("#" + currentColor).addClass("pressed").fadeIn(100).fadeOut(100).fadeIn(100).removeClass("pressed");
};
