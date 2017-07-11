console.log('sanity check')

// listener for "z" keypress

$(document).ready(function () {
  var firstPlace = ''
  var secondPlace = ''
  var racerOnePosition = 0
  var racerTwoPosition = 0
  var racerThreePosition = 0
  var racerOne = $('.racerOne')
  var racerTwo = $('.racerTwo')
  var racerThree = $('.racerThree')
  var width = $(window).width()
  var cssWidth = $('.track').width()

  console.log(cssWidth)

  $(document).keydown(function (userInput) {
    if (userInput.keyCode === 90) {
      if (racerOnePosition <= cssWidth - (width - cssWidth)) {
        racerOnePosition += cssWidth / 25
        console.log('racer 1 is ', racerOne)
        racerOne.css({left: racerOnePosition})
      } else {
        console.log('Game Over')
      }
    } else if (userInput.keyCode === 78) {
      if (racerTwoPosition <= cssWidth - (width - cssWidth)) {
        racerTwoPosition += cssWidth / 25
        console.log('racer 1 is ', racerTwo)
        racerTwo.css({left: racerTwoPosition})
      } else {
        console.log('Game Over')
      }
    } else if (userInput.keyCode === 39) {
      if (racerThreePosition <= cssWidth - (width - cssWidth)) {
        racerThreePosition += cssWidth / 25
        console.log('racer 1 is ', racerThree)
        racerThree.css({left: racerThreePosition})
      } else {
        console.log('Game Over')
      }
    }
  })
})
