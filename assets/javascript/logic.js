$( document ).ready(function() {


// multiplayer 



function xOSelector () {
    var selectXO = "";
    if (selectXO = true) {
        $(".gamepiece").text("X");
    } else {
        $(".gamepiece").text("O");
    }
};

//click on grid to allow player to select "X" or "O"

$(".gamepiece").click(function() {
    selectXO = true; 
    xOSelector ();
});





















});
