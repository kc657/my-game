console.log('sanity check')

// $(window).onkeydown(function (key) {
//     //use e.which
//     var keyCode = key.which;
//     console.log(key, keyCode, key.which)
//     if (keyCode == 88) {
//         console.log("You pressed W!");
//         //alert("You pressed W!");
//     }
// })


//listener for "z" keypress
$(document).keydown(function(e){
if (e.keyCode==90)
    $("body").append("<p>z detected!</p>");
});

//listener for "b" keypress
$(document).keydown(function(e){
if (e.keyCode==66)
    $("body").append("<p>b detected!</p>");
});

//listener for "b" keypress
$(document).keydown(function(e){
if (e.keyCode==39)
    $("body").append("<p>left arrow detected!</p>");
});
