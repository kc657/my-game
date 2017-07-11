console.log('sanity check')

// listener for "z" keypress
$(document).keydown(function (pressZ) {
  if (pressZ.keyCode == 90) { $('body').append('<p>z detected!</p>') }
})

// listener for "b" keypress
$(document).keydown(function (pressB) {
  if (pressB.keyCode == 66) {
    $('body').append('<p>b detected!</p>')
  }
})

// listener for "b" keypress
$(document).keydown(function (pressRight) {
  if (pressRight.keyCode == 39) {
    $('body').append('<p>Right arrow detected!</p>')
  }
})
