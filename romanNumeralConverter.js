function convertToRoman(num) {
  let numStr = String(num);
  let romanNum = "";
  const thouMap = new Map([
    ["0",""],
    ["1", "M"],
    ["2", "MM"],
    ["3", "MMM"]
  ]);

  const hunMap = new Map([
    ["0",""],
    ["1", "C"],
    ["2", "CC"],
    ["3", "CCC"],
    ["4", "CD"],
    ["5", "D"],
    ["6", "DC"],
    ["7", "DCC"],
    ["8", "DCCC"],
    ["9", "CM"]
  ])

  const tenMap = new Map([
    ["0",""],
    ["1", "X"],
    ["2", "XX"],
    ["3", "XXX"],
    ["4", "XL"],
    ["5", "L"],
    ["6", "LX"],
    ["7", "LXX"],
    ["8", "LXXX"],
    ["9", "XC"]
  ])

  const oneMap = new Map([
    ["0",""],
    ["1", "I"],
    ["2", "II"],
    ["3", "III"],
    ["4", "IV"],
    ["5", "V"],
    ["6", "VI"],
    ["7", "VII"],
    ["8", "VIII"],
    ["9", "IX"]
  ])

  if(num > 999){ // 4 digit number  
    romanNum = romanNum.concat(thouMap.get(numStr[0]));
    romanNum = romanNum.concat(hunMap.get(numStr[1]));
    romanNum = romanNum.concat(tenMap.get(numStr[2]));
    romanNum = romanNum.concat(oneMap.get(numStr[3]));

  }
  else if(num > 99 && num < 1000){
    romanNum = romanNum.concat(hunMap.get(numStr[0]));
    romanNum = romanNum.concat(tenMap.get(numStr[1]));
    romanNum = romanNum.concat(oneMap.get(numStr[2]));
  }
  else if(num > 9 && num < 100){
    romanNum = romanNum.concat(tenMap.get(numStr[0]));
    romanNum = romanNum.concat(oneMap.get(numStr[1]));
  }
  else{
    romanNum = romanNum.concat(oneMap.get(numStr[0]));
  }
  return romanNum;
}

console.log(convertToRoman(3999));
