$( document ).ready(function() {


// multiplayer 



function xOSelector () {
    if (selectXO = true) {
        $(".gamepiece").text("X");
    } else {
        $(".gamepiece").text("O");
    }
};

//click on grid to allow player to select "X" or "O"

$(".gamepiece").click(function() {
    var clicks = $(this).data('clicks');
  if (clicks) {
    selectXO = true; 
    xOSelector ();
  } else {
    selectXO = false; 
    xOSelector ();
  }
  $(this).data("clicks", !clicks);
});













 







});
