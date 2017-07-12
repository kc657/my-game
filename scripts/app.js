console.log('sanity check')

$(document).ready(function () {
  // defining variables
  var firstPlace = null
  var secondPlace = null
  var gameOver = false
  var racerOnePosition = 0
  var racerTwoPosition = 0
  var racerThreePosition = 0
  var racerOne = $('.racerOne')
  var racerTwo = $('.racerTwo')
  var racerThree = $('.racerThree')
  var chaser = $('.chaser')
  var chaserPosition = 0
  var width = $(window).width()
  var cssWidth = $('.track').width()

//chaser auto run
$(document).keydown(function(userInput) {
      // user input function
      if (userInput.keyCode === 32) {
        setInterval(function autoChasing() {
          if (chaserPosition <= cssWidth - (width - cssWidth)) {
            chaserPosition += 150
            chaser.css({
              left: chaserPosition
            })
            console.log('hello ' + chaserPosition)
          } else {
            autoChasing.off
          }
        }, 1850)
      }
    })

  //players function
  $(document).keydown(function (userInput) {
    // user input function
    if (userInput.keyCode === 90) {
      if (racerOnePosition <= cssWidth - (width - cssWidth)) {
        racerOnePosition += cssWidth / 25
        racerOne.css({left: racerOnePosition})
      } else {
        if (firstPlace === null) {
          racerOnePosition += 25
          racerOne.css({left: racerOnePosition})
          firstPlace = 'Player One'
          $('.results').append('<p>Player One Finished First and Lost!<p>')
          racerOne.off
        } else if (secondPlace === null && firstPlace !== 'Player One') {
          racerOnePosition += 25
          racerOne.css({left: racerOnePosition})
          secondPlace = 'Player One'
          $('.results').append('<p><span id="winner">Player One Finished Second and Won!</span><p>')
        } else if (firstPlace && secondPlace !== null) {
          gameOver = true
          $('.results').append(`<p>Game has ended. Press restart button to play again!</p>`)
        }
      }
    } else if (userInput.keyCode === 78) {
      if (racerTwoPosition <= cssWidth - (width - cssWidth)) {
        racerTwoPosition += cssWidth / 25
        racerTwo.css({left: racerTwoPosition})
      } else {
        if (firstPlace === null) {
          racerTwoPosition += 25
          racerTwo.css({left: racerTwoPosition})
          firstPlace = 'Player Two'
          $('.results').append('<p>Player One Finished First and Lost!<p>')
          racerTwo.off
        } else if (secondPlace === null && firstPlace !== 'Player Two') {
          racerTwoPosition += 25
          racerTwo.css({left: racerTwoPosition})
          secondPlace = 'Player Two'
          $('.results').append('<p><span id="winner">Player Two Finished Second and Won!</span><p>')
        } else if (firstPlace && secondPlace !== null) {
          gameOver = true
          $('.results').append(`<p>Game has ended. Press restart button to play again!</p>`)
        }
      }
    } else if (userInput.keyCode === 39) {
      if (racerThreePosition <= cssWidth - (width - cssWidth)) {
        racerThreePosition += cssWidth / 25
        racerThree.css({left: racerThreePosition})
      } else {
        if (firstPlace === null) {
          racerThreePosition += 25
          racerThree.css({left: racerThreePosition})
          firstPlace = 'Player Three'
          $('.results').append('<p>Player Three Finished First and Lost!<p>')
          racerThree.off
        } else if (secondPlace === null && firstPlace !== 'Player Three') {
          racerThreePosition += 25
          racerThree.css({left: racerThreePosition})
          secondPlace = 'Player Three'
          $('.results').append('<p><span id="winner">Player Three Finished Second and Won!</span><p>')
        } else if (firstPlace && secondPlace !== null) {
          gameOver = true
          $('.results').append(`<p>Game has ended. Press restart button to play again!</p>`)
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
