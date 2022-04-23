function telephoneCheck(str) {
    let openingBrackets = str.match(/[(]/g)
    let closingBrackets = str.match(/[)]/g)

    let totalOpeningBrackets = 0;
    let totalClosingBrackets = 0;
    // check wheter there is an opening bracket, if there is get its length
    if(openingBrackets != null){
      totalOpeningBrackets = openingBrackets.length;
    }

    // check wheter there is an closing bracket, if there is get its length
    if(closingBrackets != null){
      totalClosingBrackets = closingBrackets.length;
    }

    // total opening brackets = total closing brackets = 1
    if(totalOpeningBrackets !== totalClosingBrackets){
      return false;
    } else if(totalOpeningBrackets > 1) {
      return false;
    } else if(totalOpeningBrackets === 1){
      //get the contents inside the bracket
      let insideBrackets = str.match(/\(.*?\)/g)
      // a valid number will have 3 characters enclosed in brackets
      if(insideBrackets[0].length - 2 !==3 ){
        return false;
      }
    }

    // get the total spaces and dashes in the number
    let spaceAndDash = str.match(/[\s-]/g)
    if(spaceAndDash != null){
      let totalSpaceAndDash = spaceAndDash.length
      if(totalSpaceAndDash > 3){
        return false;
      }
    }

  let newNum = str.replace(/\D/g, "") //returns a string with only numbers
  //console.log(newNum);
  //check the length of the returned string

  if(newNum.length === 11){
    if(newNum[0] != 1){ //check country code = 1
      return false;
    }
  } else if (newNum.length !== 10){  //invlaid number
    return false;
  }
  return true;
}

telephoneCheck("5555555555");
