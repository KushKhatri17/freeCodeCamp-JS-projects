/**
 * Resource used to understand how to get the numeric values
 * of characters: 
 * https://bobbyhadz.com/blog/javascript-increment-decrement-letter
 */

function rot13(str) {
  let rot13Str = "";
  for(let i = 0; i < str.length; i++){
    if(/[A-Z]/.test(str[i])){   //Check if current char is a alphabetic char
      rot13Str = rot13Str.concat(getRot13Char(str[i]));
    }
    else{
      rot13Str = rot13Str.concat(str[i]);
    }
  }
  return rot13Str;
}

function getRot13Char(char){
  //Char between A-M
  if(char.charCodeAt(0) < 78 ){
    return String.fromCharCode(char.charCodeAt(0) + 13);
  }
  // Char between N-Z
  return String.fromCharCode(char.charCodeAt(0) - 13);
}

console.log(rot13("SERR PBQR PNZC"));
