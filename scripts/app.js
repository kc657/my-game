console.log('sanity check')

// listener for "z" keypress

$(document).ready(function () {
  var firstPlace = null
  var secondPlace = null
  var gameOver = false
  var racerOnePosition = 0
  var racerTwoPosition = 0
  var racerThreePosition = 0
  var racerOne = $('.racerOne')
  var racerTwo = $('.racerTwo')
  var racerThree = $('.racerThree')
  var width = $(window).width()
  var cssWidth = $('.track').width()

  $(document).keydown(function (userInput) {
    if (userInput.keyCode === 90) {
      if (racerOnePosition <= cssWidth - (width - cssWidth)) {
        racerOnePosition += cssWidth / 25
        console.log('racer 1 is ', racerOne)
        racerOne.css({left: racerOnePosition})
      } else {
        if (firstPlace === null) {
          firstPlace = 'Player One'
          $('.results').append('<p>Player One Finished First and Lost!<p>')
          racerOne.off
        } else if (secondPlace === null && firstPlace !== 'Player One') {
          secondPlace = 'Player One'
          $('.results').append('<p>Player One Finished Second and Won!<p>')
        } else if (firstPlace && secondPlace !== null) {
          gameOver = true
          $('.results').append(`<p>Game has ended</p>`)
        }
      }
    } else if (userInput.keyCode === 78) {
      if (racerTwoPosition <= cssWidth - (width - cssWidth)) {
        racerTwoPosition += cssWidth / 25
        console.log('racer 1 is ', racerTwo)
        racerTwo.css({left: racerTwoPosition})
      } else {
        if (firstPlace === null) {
          firstPlace = 'Player Two'
          $('.results').append('<p>Player One Finished First and Lost!<p>')
          racerTwo.off
        } else if (secondPlace === null && firstPlace !== 'Player Two') {
          secondPlace = 'Player Two'
          $('.results').append('<p>Player Two Finished Second and Won!<p>')
        } else if (firstPlace && secondPlace !== null) {
          gameOver = true
          $('.results').append(`<p>Game has ended</p>`)
        }
      }
    } else if (userInput.keyCode === 39) {
      if (racerThreePosition <= cssWidth - (width - cssWidth)) {
        racerThreePosition += cssWidth / 25
        console.log('racer 1 is ', racerThree)
        racerThree.css({left: racerThreePosition})
      } else {
        if (firstPlace === null) {
          firstPlace = 'Player Three'
          $('.results').append('<p>Player Three Finished First and Lost!<p>')
          racerThree.off
        } else if (secondPlace === null && firstPlace !== 'Player Three') {
          secondPlace = 'Player Three'
          $('.results').append('<p>Player Three Finished Second and Won!<p>')
        } else if (firstPlace && secondPlace !== null) {
          gameOver = true
          $('.results').append(`<p>Game has ended</p>`)
        }
      }
    }
  })
})
// function (playerName) {
// if (firstPlace === null) {
//   firstPlace = 'Player One'
//   $('.results').append('<p>Player One Finished First and Lost!<p>')
//   racerOne.off
// } else if (secondPlace === null && firstPlace !== 'Player One') {
//   secondPlace = 'Player One'
//   $('.results').append('<p>Player One Finished Second and Won!<p>')
// }
