var userX =[];
var user0 =[];
var clicks = 1;

var winnerChecker = function (userArray,opponentArray){
  var win = 0;
  var arrayOfWinningArrays = [["1","2","4"], ["8","16","32"], ["64","128","256"], ["1","16","256"],["2","16","128"], ["4 ","32","256"], ["1","8","64"], ["4","16","64"]];
  opponentArray.forEach(function(elementOfOpponentArray){
    var index = 0;
    arrayOfWinningArrays.forEach(function(winningArray){
      index ++;
      winningArray.forEach(function(elementOfWinningArray){
        if (elementOfOpponentArray === elementOfWinningArray) {
          opponentArray.splice(index -1,1);
          console.log(opponentArray);
        }
      })
    })
  })
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
        var x_locations = $(this).attr("id");
        $(this).text("X");
        userX.push(x_locations);
        winnerChecker(userX,user0);
      }
      else {
        var x_locations = $(this).attr("id");
        $(this).text("O");
        user0.push(x_locations);
        winnerChecker(user0,userX);
      }

    }
  })
})
// var defaultUser
// var easyComp = {
//   var easyLogic
// }
// var hardComp = {
//   var hardLogic =
//     // var compWin = [7, 56, 448, 73, 146, 292, 273, 84];
//     var compMoves =
// }
