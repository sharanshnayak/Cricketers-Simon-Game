
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    started = true;
     $("button").text("Restart");
    nextSequence();
   
  }
});

function clicks(){
  if (!started) {
    started = true;
    $("button").text("Restart");
    nextSequence();
  }
  else{
    startagain();
  }
}
$(".btn").click(function() {
if(!started){
  alert("To start the Game Press any key or Click on Start Button");
}
else if(started===true){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
}
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } 
    else {
      playSound("wrong");
      $("button").removeClass(".click");
      $("#level-title").text("OUT!");
      $("#level-title").css("color", "red");
      $("#"+userClickedPattern[currentLevel]).removeClass(userClickedPattern[currentLevel]);
      $("#"+userClickedPattern[currentLevel]).addClass("game-over-2");

      if(userClickedPattern[currentLevel]==="green"){
      $("#red").removeClass("red");
      $("#red").addClass("game-over-1"); 
      $("#blue").removeClass("blue");
      $("#blue").addClass("game-over-1");
      $("#yellow").removeClass("yellow");
      $("#yellow").addClass("game-over-1");
      }

      else if(userClickedPattern[currentLevel]==="red"){
        $("#green").removeClass("green");
        $("#green").addClass("game-over-1"); 
        $("#blue").removeClass("blue");
        $("#blue").addClass("game-over-1");
        $("#yellow").removeClass("yellow");
        $("#yellow").addClass("game-over-1");
        }

      else  if(userClickedPattern[currentLevel]==="blue"){
          $("#red").removeClass("red");
          $("#red").addClass("game-over-1"); 
          $("#green").removeClass("green");
          $("#green").addClass("game-over-1");
          $("#yellow").removeClass("yellow");
          $("#yellow").addClass("game-over-1");
          }

      else if(userClickedPattern[currentLevel]==="yellow"){
            $("#red").removeClass("red");
            $("#red").addClass("game-over-1"); 
            $("#blue").removeClass("blue");
            $("#blue").addClass("game-over-1");
            $("#green").removeClass("green");
            $("#green").addClass("game-over-1");
            }


      setTimeout(function () {
        $("#green").addClass("green");
      $("#green").removeClass("game-over-1");
      $("#green").removeClass("game-over-2");
      $("#red").addClass("red");
      $("#red").removeClass("game-over-1");
      $("#red").removeClass("game-over-2");  
      $("#blue").addClass("blue");
      $("#blue").removeClass("game-over-1");
      $("#blue").removeClass("game-over-2");
      $("#yellow").addClass("yellow");
      $("#yellow").removeClass("game-over-1");
      $("#yellow").removeClass("game-over-2");

      $("#level-title").text(" Press A Key OR Click to Restart");
      $("#level-title").css("color", "#FEF2BF");
      $("button").text("Restart");
      }, 2250);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  
  $("#level-title").text("Score " + level);
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(150).fadeOut(150).fadeIn(150);
  playSound(randomChosenColour);
  
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
function startagain() {
  level = 0;
  gamePattern = [];
  started = false;
  clicks();
}
