function palindrome(str) {
  //https://bobbyhadz.com/blog/javascript-remove-non-alphanumeric-characters-from-string
  let newStr = str.replace(/[^a-z0-9]/gi, ''); 

  let i = 0;
  let j = newStr.length - 1;
  while(i < j){
    let a = newStr[i];
    let b = newStr[j];
    console.log(a + b);
    if(a.toUpperCase() === b.toUpperCase()){
      i++;
      j--;
    }
    else{
      return false;
    }
  }
  return true;
}

//palindrome("_eye");
console.log(palindrome("_eye"));
