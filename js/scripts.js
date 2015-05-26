var cryptosquare = function(string) {
  var cleanString = string.toLowerCase().replace(/[^a-z]/g, '')
  var group = Math.ceil(Math.sqrt(cleanString.length));
  var regEx = new RegExp(".{1," + group + "}", "g");
  var squareString =  cleanString.match(regEx);
  // var  = squareString.length
  var result = [];
  for (var letterIndex = 0; letterIndex < squareString[0].length; letterIndex += 1) {
    var word = "";
    for (var wordIndex = 0; wordIndex < squareString.length; wordIndex += 1 ) {
      if (typeof letterIndex !== 'undefined') {
        word = word + squareString[wordIndex].charAt(letterIndex);
      }
    }
    result.push(word);
  }
  return result.join("");
};
