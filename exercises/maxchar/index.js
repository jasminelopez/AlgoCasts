// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const count = {};

  for (let i = 0; i < str.length; i++) {
    if (!count[str[i]]) {
      count[str[i]] = 1;
    } else {
      count[str[i]]++;
    }
  }
  const largestNum = Math.max(...Object.values(count));
  const key = Object.keys(count).find(key => count[key] === largestNum);
  return key;
}

module.exports = maxChar;
