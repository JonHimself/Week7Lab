const uniqueCharacters = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) !== i) {
      return false;
    }
  }
  return true;
};

// this time complexity if O(n^2) because our for loops has a time compelxity of O(n) and the lastIndexOf method runs through our word again backwards so we have second loop

function longestWord(string) {
  let words = string.split(" ");
  let strLength = 0;
  let word = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > strLength) {
      strLength = words[i].length;
      word = words[i];
    }
  }
  return [word, strLength];
}

//Time complexity if o(n) because we have a for loop that iterates over an array of words and that is all. I am also questioning if it is O(n log n) simply because we have a conditional statement as well that goes back to check a variable value.
