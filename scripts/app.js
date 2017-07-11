console.log('sanity check')

// listener for "z" keypress

$(document).ready(function(){
  var firstPlace = ''
  var secondPlace = ''
  var racerOnePosition = 0
  var racerTwoPosition = 0
  var racerThreePosition = 0
  var racerOne = $('.racerOne')
  var racerTwo = $('.racerTwo')
  var racerThree = $('.racerThree')

  $(document).keydown(function pressZ (userInput){
    if(userInput.keyCode === 90){
      racerOnePosition += 25;
      console.log("racer 1 is ", racerOne)
      racerOne.css({left: racerOnePosition});
    } else if (userInput.keyCode === 78){
      racerTwoPosition += 25;
      console.log("racer 1 is ", racerTwo)
      racerTwo.css({left: racerTwoPosition});
    } else if(userInput.keyCode === 39){
      racerThreePosition += 25;
      console.log("racer 1 is ", racerThree)
      racerThree.css({left: racerThreePosition});
    }
  })
});
