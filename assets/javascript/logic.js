$( document ).ready(function() {
// multiplayer 

var arrayPosition = 0;

// score board 

var playerXScore = 0;
var playerOScore = 0;

$("#x-score").text(`X's Score: ${playerXScore}`);
$("#o-score").text(`O's Score: ${playerOScore}`);

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

//reset functions

function oWins () {
  alert("O wins!");
  playerOScore++;
  $("#o-score").text(`O's Score: ${playerOScore}`);
  $(".gamepiece").html("_");
  $(".gamepiece").css("color", "black");
};

function xWins () {
  alert("X wins!");
  playerXScore++;
  $("#x-score").text(`X's Score: ${playerXScore}`);
  $(".gamepiece").html("_");
  $(".gamepiece").css("color", "black");
};

// victory configuration color function



  // timer to check for victory 
  setInterval(function () {
  //X victory conditions 
    //top horizontal win
    if ($("#x1").html() == "X" && $("#x2").html() == "X" && $("#x3").html() == "X")  {
      xWins();
      //mid horizontal win
    } else if ($("#y1").html() == "X" && $("#y2").html() == "X" && $("#y3").html() == "X") {
      xWins();
      
      //bottom horizontal win
    } else if ($("#z1").html() == "X" && $("#z2").html() == "X" && $("#z3").html() == "X") {
      xWins();
      
      //left vertical win
    } else if ($("#x1").html() == "X" && $("#y1").html() == "X" && $("#z1").html() == "X") {
      xWins();
      
      //mid vertical win
    } else if ($("#x2").html() == "X" && $("#y2").html() == "X" && $("#z2").html() == "X") {
      xWins();
      
      //right vertical win
    } else if ($("#x3").html() == "X" && $("#y3").html() == "X" && $("#z3").html() == "X") {
      xWins();
      
      //backslash diagonal win
    } else if ($("#x1").html() == "X" && $("#y2").html() == "X" && $("#z3").html() == "X") {
      xWins();
      
      //forwardslash diagonal win
    } else if ($("#x3").html() == "X" && $("#y2").html() == "X" && $("#z1").html() == "X") {
      xWins();
      
    }
  //O victory conditions 
      //top horizontal win 
      else if ($("#x1").html() == "O" && $("#x2").html() == "O" && $("#x3").html() == "O") {
        oWins();
        //mid horizontal win
      } else if ($("#y1").html() == "O" && $("#y2").html() == "O" && $("#y3").html() == "O") {
        oWins();
        //bottom horizontal win
      } else if ($("#z1").html() == "O" && $("#z2").html() == "O" && $("#z3").html() == "O") {
        oWins();
        //left vertical win
      } else if ($("#x1").html() == "O" && $("#y1").html() == "O" && $("#z1").html() == "O") {
        oWins();
        //mid vertical win
      } else if ($("#x2").html() == "O" && $("#y2").html() == "O" && $("#z2").html() == "O") {
        oWins();
        //right vertical win
      } else if ($("#x3").html() == "O" && $("#y3").html() == "O" && $("#z3").html() == "O") {
        oWins();
        //backslash diagonal win
      } else if ($("#x1").html() == "O" && $("#y2").html() == "O" && $("#z3").html() == "O") {
        oWins();
        //forwardslash diagonal win
      } else if ($("#x3").html() == "O" && $("#y2").html() == "O" && $("#z1").html() == "O") {
        oWins();
       // cat
      };
      // else if ($("#x1").html() == "O" || $("#x1").html() == "X" && $("#x2").html() == "O" || $("#x2").html() == "X" && $("#x3").html() == "O" || $("#x3").html() == "X"
      //   && $("#y1").html() == "O" || $("#y1").html() == "X" && $("#y2").html() == "O" || $("#y2").html() == "X" && $("#y3").html() == "O" || $("#y3").html() == "X"
      //   && $("#z1").html() == "O" || $("#z1").html() == "X" && $("#z2").html() == "O" || $("#z2").html() == "X" && $("#z3").html() == "O" || $("#z3").html() == "X") {
      //   alert("Cat Game!");
      //   gameReset();
      //   }
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