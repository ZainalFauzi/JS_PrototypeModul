//SOAL PROTOTYPE 2-----------------------------
Number.prototype.primeCheck = function (n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
        return true;
  }
};
console.log(Number.prototype.primeCheck(93));
//----------------------------------------------
