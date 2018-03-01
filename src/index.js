module.exports = function check(str, bracketsConfig) {
  // your solution
  var str;
  var bracketsConfig;
  let arr = [];
  let strLen = str.length;
  bracketsConfigLen = bracketsConfig.length;

  for (let i = 0; i < strLen; i++) {
    for (let j = 0; j < bracketsConfigLen; j++) {
      if (bracketsConfig[j][1] === str[i] && bracketsConfig[j][0] === str[i]) {
        if (arr.indexOf(str[i]) === -1) {
          arr.push(str[i]);
        } else {
          if (bracketsConfig[j][0] === arr[arr.length - 1]) {
            arr.pop();
          } else {
            return false;
          }
        }

      } else if (bracketsConfig[j][0] === str[i]) {
        arr.push(str[i]);
      } else if (bracketsConfig[j][1] === str[i]) {
        if (arr[arr.length - 1] === bracketsConfig[j][0]) {
          arr.pop();
        } else return false;
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else return false;
}