//SOAL PROTOTYPE 1----------------------------------------
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("rotavator");
  //-------------------------------------------------------
