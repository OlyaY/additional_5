module.exports = function check(str, bracketsConfig) {
  // your solution
  var str;
  var bracketsConfig;
  var arr = [];

  for (i = 0; i < arr.lenght; i++) {
    for (j = 0; j < bracketsConfig; j++) {
      if (bracketsConfig[j][0] === bracketsConfig[j][1] &&
        bracketsConfig[j][1] === str[i] || bracketsConfig[j][0] === str[i]) {
        arr.push(str[i]);
      } else if (str[i] === arr[arr.length - 1] || str[i] === bracketsConfig[j][1])
        arr.pop();
    }
  }
  if (arr.length === 0) return true;
}
