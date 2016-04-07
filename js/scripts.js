var userX =[];
var user0 =[];
var manORcomputer = "";
var clicks = 1;
var computerTurn = 0;
var arrayOfWinningArraysForComputer = [["1","2","4"], ["8","16","32"], ["64","128","256"], ["1","16","256"],["2","16","128"], ["4 ","32","256"], ["1","8","64"], ["4","16","64"]];



var computerMoves = function (){
  // computerTurn ++;
  clicks ++;
  // if (computerTurn % 2 != 0) {
    console.log("computer turn");
    var targetVariable = arrayOfWinningArraysForComputer[0][0];
    $("#" + targetVariable + "").text("0");
    arrayOfWinningArraysForComputer[0].shift();
    console.log("The array which I'm targetin now contains" + arrayOfWinningArraysForComputer[0]);
    // }
  }

var arrayRemoversFromComputer = function(userXelement){
    var index = 0;
    arrayOfWinningArraysForComputer.forEach(function(winningArray){
      index ++;
      winningArray.forEach(function(elementOfWinningArray){
        if (userXelement === elementOfWinningArray) {
          arrayOfWinningArraysForComputer.splice(index -1,1);
        }
      })
    })
    console.log("the Array Romevers has been run. arrayOfWinningArraysForComputer is now " + arrayOfWinningArraysForComputer);
  }



var winnerChecker = function (userArray,opponentArray){
  var win = 0;
  var arrayOfWinningArrays = [["1","2","4"], ["8","16","32"], ["64","128","256"], ["1","16","256"],["2","16","128"], ["4 ","32","256"], ["1","8","64"], ["4","16","64"]];

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

  $("#pvp").click(function() {
    manORcomputer = "pvp";
  });

  $("#pVScomputer").click(function() {
    manORcomputer = "pVScomputer";
  });
  // $(".col-md-2").one("click", function() {
    $(".col-md-2").click(function() {
    clicks ++;
      if (clicks % 2 === 0) {
        var x_locations = $(this).attr("id");
        arrayRemoversFromComputer(x_locations);
        $(this).text("X");
        console.log("user is X");
        userX.push(x_locations);
        winnerChecker(userX,user0);
      }

      // to reactivate user 0 I need to uncomment this lines
      // else {
      //   var x_locations = $(this).attr("id");
      //   $(this).text("O");
      //   console.log("user is 0");
      //   user0.push(x_locations);
      //   winnerChecker(user0,userX);
      // }
    computerMoves();
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
