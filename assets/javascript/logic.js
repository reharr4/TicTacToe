$( document ).ready(function() {

// multiplayer 

arrayPosition = 0;

// score board 

var playerXScore = 0;
var playerOScore = 0;

$("#x-score").text(`"X's Score: ${playerXScore}"`);
$("#y-score").text(`"Y's Score: ${playerOScore}"`);

//initial state of game board
$(".gamepiece").text("_");


//function to apply victory conditions to id's
  function victoryClasses() {
    //horizontal win conditions
    $("#x1, #x1, #x3").addClass("top-hz");
    $("#y1, #y2, #y3").addClass("mid-hz");
    $("#z1, #z2, #z3").addClass("bot-hz");
    //vertical win conditions
    $("#x1, #y1, #z1").addClass("left-vr");
    $("#x2, #y2, #z2").addClass("mid-vr");
    $("#x3, #y3, #z3").addClass("left-vr");
    //diagonal win conditions
    $("#x1, #y2, #z3").addClass("bc-dia");
    $("#x3, #y2, #z1").addClass("fw-dia");
  };

victoryClasses();

//reset function 

function gameReset () {
  $(".gamepiece").text("_");
}

// && $(".mid-hz").text("X") && $(".bot-hz").text("X"))

console.log($(".top-hz").text());
// victory conditions 

// timer to check for victory 
  setInterval(function () {
    if ($(".top-hz").text() == "X" && $(".mid-hz").text() == "X" && $(".bot-hz").text() == "X")  {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();

    } else if ($(".top-hz").text() == "O" && $(".mid-hz").text() == "O" && $(".bot-hz").text() == "O") {
      alert("Y wins!");
      playerOScore++;
      $("#y-score").text(`"Y's Score: ${playerYScore}"`);
      gameReset();
    };
  }, 1000);



//click on grid to allow player to select "X" or "O"

$(".gamepiece").click(function() {
  var gamepieceArray = ["X", "O", "_"];
  if (arrayPosition === 3) {
    arrayPosition = 0;
  };
  $(this).html(gamepieceArray[arrayPosition]);
  arrayPosition++; 
});


});