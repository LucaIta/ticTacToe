var userX =[];
var user0 =[];
var clicks = 1;

$(document).ready(function(){
  $(".col-md-2").click(function() {
    clicks ++;
    if (clicks < 11){
      if (clicks % 2 === 0) {
        console.log("user x turn");
        var x_locations = $(this).attr("id");
        // $(this).show();
        // $("#showX").click(function(){
        //    $("#showX").show();
        // })
        // $(this).show();
        userX.push(x_locations);
        console.log(userX);
      }
      else {
        console.log("user 0 turn");
        var x_locations = $(this).attr("id");
        // $(this).show();
        user0.push(x_locations);
        console.log(user0);
      }
    }
  })
})


 //
 //  var playerX = function(){
 //     $(".col-md-2").click(function() {
 //       var x_locations =  $(this).index()
 //       newarray.push(x_locations);
 //      });
 //   }
 // })
// insert string into div and make new array of the div id locations
// do the same for playerO




// })

//
  // var winArrayX =[[a,b,c], [d,e,f], [g,h,l], [a,d,g],
  //             [b,e,h], [c,f,l], [a,e,l], [c,e,g]]


            // }

//
// var winnerX
// Array.prototype.contains = function(obj) {
//   // where playerx exists in any of the full array values for winArray
//   return true
//   alert("O is the winner")}
//
// var winnerO =
// Array.prototype.contains = function(obj) {
//   alert("O is the winner");
// };
