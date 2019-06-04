$( document ).ready(function() {

// multiplayer ;

var result = $("#x1").html();

console.log(result);

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


// victory conditions 


// timer to check for victory 
  // setInterval(function () {
  //   if ($(".top-hz:contains('X')") && $(".mid-hz:contains('X')") && $(".bot-hz:contains('X')")) {
  //     alert("X wins!");
  //   };
  // }, 500);


//click on grid to allow player to select "X" or "O"

  $("#x1").click( function () {
    var xOselector = Math.floor(Math.random() * 2); 
    
    
    if (xOselector === 0) {
    $("#x1").text("X");
    xOselector = 1;
    } else {
      $("#x1").text("O");
      xOselector = 0;
    }
  });

  $("#x2").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#x2").text("X");
    xOselector = 1;
    } else {
      $("#x2").text("O");
      xOselector = 0;
    }
  });
  
  $("#x3").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#x3").text("X");
    xOselector = 1;
    } else {
      $("#x3").text("O");
      xOselector = 0;
    }
  });

  $("#y1").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#y1").text("X");
    xOselector = 1;
    } else {
      $("#y1").text("O");
      xOselector = 0;
    }
  });

  $("#y2").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#y2").text("X");
    xOselector = 1;
    } else {
      $("#y2").text("O");
      xOselector = 0;
    }
  });

  $("#y3").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#y3").text("X");
    xOselector = 1;
    } else {
      $("#y3").text("O");
      xOselector = 0;
    }
  });

  $("#z1").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#z1").text("X");
    xOselector = 1;
    } else {
      $("#z1").text("O");
      xOselector = 0;
    }
  });

  $("#z2").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#z2").text("X");
    xOselector = 1;
    } else {
      $("#z2").text("O");
      xOselector = 0;
    }
  });

  $("#z3").click( function () {
    var xOselector = Math.floor(Math.random() * 2);
    
    
    if (xOselector === 0) {
    $("#z3").text("X");
    xOselector = 1;
    } else {
      $("#z3").text("O");
      xOselector = 0;
    }
  });









 







});
