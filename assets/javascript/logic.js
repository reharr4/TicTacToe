$( document ).ready(function() {

// multiplayer 

arrayPosition = 0;

// score board 

var playerXScore = 0;
var playerOScore = 0;

$("#x-score").text(`"X's Score: ${playerXScore}"`);
$("#o-score").text(`"O's Score: ${playerOScore}"`);

//initial state of game board
$(".gamepiece").text("_");


//function to apply victory conditions to id's
  function victoryClasses() {
    //horizontal win conditions
    $("#x1, #x2, #x3").addClass("top-hz");
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
  $(".gamepiece").html("_");
};


  // victory conditions 

  // timer to check for victory 
  setInterval(function () {
  //X victory conditions 
    //top horizontal win
    if ($("#x1" && "#x2" && "#x3").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
      //mid horizontal win
    } else if ($("#y1" && "#y2" && "#y3").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
      //bottom horizontal win
    } else if ($("#z1" && "#z2" && "#z3").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
      //left vertical win
    } else if ($("#x1" && "#y1" && "#z1").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
      //mid vertical win
    } else if ($("#x2" && "#y2" && "#z2").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
      //right vertical win
    } else if ($("#x3" && "#y3" && "#z3").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
      //backslash diagonal win
    } else if ($("#x1" && "#y2" && "#z3").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
      //forwardslash diagonal win
    } else if ($("#x3" && "#y2" && "#z1").html() == "X") {
      alert("X wins!");
      playerXScore++;
      $("#x-score").text(`"X's Score: ${playerXScore}"`);
      gameReset();
    }
  //Y victory conditions 
      //top horizontal win 
      else if ($("#x1" && "#x2" && "#x3").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
        //mid horizontal win
      } else if ($("#y1" && "#y2" && "#y3").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
        //bottom horizontal win
      } else if ($("#z1" && "#z2" && "#z3").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
        //left vertical win
      } else if ($("#x1" && "#y1" && "#z1").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
        //mid vertical win
      } else if ($("#x2" && "#y2" && "#z2").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
        //right vertical win
      } else if ($("#x3" && "#y3" && "#z3").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
        //backslash diagonal win
      } else if ($("#x1" && "#y2" && "#z3").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
        //forwardslash diagonal win
      } else if ($("#x3" && "#y2" && "#z1").html() == "O") {
        alert("O wins!");
        playerOScore++;
        $("#o-score").text(`"O's Score: ${playerOScore}"`);
        gameReset();
      };
    }, 1000);



//click on grid to allow player to select "X" or "O"

$(".gamepiece").click(function() {
  var gamepieceArray = ["X", "O",];
  if (arrayPosition === 2) {
    arrayPosition = 0;
  };
  $(this).html(gamepieceArray[arrayPosition]);
  arrayPosition++; 
});


});