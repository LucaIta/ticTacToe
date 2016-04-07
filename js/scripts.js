var userX =[];
var user0 =[];
var clicks = 1;

var winnerChecker = function (userArray){
  var win = 0;
  var arrayOfWinningArrays = [["a","b","c"], ["d","e","f"], ["g","h","l"], ["a","d","g"],["b","e","h"], ["c","f","l"], ["a","e","l"], ["c","e","g"]];
  arrayOfWinningArrays.forEach(function(winningArray){
  win = 0;
  winningArray.forEach(function(elementOfWinningArray){
    userArray.forEach(function(elementOFUSerArray){
      if (elementOFUSerArray === elementOfWinningArray){
         win ++;
         } else {
         }
      })
      if (win === 3){
        alert ("you win");
      }
    })
  })
}

$(document).ready(function(){
  $(".col-md-2").one("click", function() {
    clicks ++;
    if (clicks < 11){
      if (clicks % 2 === 0) {
        console.log("user x turn");
        var x_locations = $(this).attr("id");
        $(this).text("X");
        userX.push(x_locations);
        winnerChecker(userX);
        console.log(userX);
      }
      else {
        console.log("user 0 turn");
        var x_locations = $(this).attr("id");
        $(this).text("O");
        user0.push(x_locations);
        winnerChecker(user0);
        console.log(user0);
      }

    }
  })
})
