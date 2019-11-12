// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

  //loop through the number of n times
    // for each iteration, we loop again
    // this time we add 2 # symbols on either side
    //but the previous # gets spaces added to it as well.

      // n = 3
      const midpoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
      let level = '';
      for (let column = 0; column < 2 * n -1; column++) {
        if (midpoint - row <= column  && midpoint + row >= column) {
          level += '#';
        } else {
          level += ' ';
        }
      }
      console.log(level);
    }
}

module.exports = pyramid;
