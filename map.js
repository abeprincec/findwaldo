var words = ['ground', 'control', 'to', 'major', 'tom'];

function map(arr, callBack) {
  var results = [];

  arr.forEach(element => {
    results.push(callBack(element));
  });

  return results;
}

console.log(
  map(words, function(word) {
    return word.length;
  })
);

console.log(
  map(words, function(word) {
    return word.toUpperCase();
  })
);

console.log(
  map(words, function(word) {
    return word
      .split('')
      .reverse()
      .join('');
  })
);
