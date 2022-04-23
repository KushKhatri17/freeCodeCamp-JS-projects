function checkCashRegister(price, cash, cid) {
  const currencyValMap = new Map ([
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
  ]);

  let changeGiven = []; 
  let totalCIR = 0;
  let changeDue = cash - price;
  for(let i = 0; i < cid.length; i++){
    totalCIR = totalCIR + cid[i][1];
  }
  
  if (totalCIR < changeDue){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if(totalCIR === changeDue){
    return {status: "CLOSED", change: cid};
  } else{
      for(let i = cid.length-1; i > -1; i--){
        if(changeDue < 0){
          break;
        } 
        if(cid[i][1] === 0){
          continue;
        }
        
        let currentCurrencyVal = currencyValMap.get(cid[i][0]);
        let currentCurrencyQuantity = cid[i][1]/currentCurrencyVal;
        let quantityToGive = ~~(changeDue/currentCurrencyVal);

        if (quantityToGive !== 0 ){
          if (quantityToGive <= currentCurrencyQuantity){
            let thisCurrencyGiven = quantityToGive * currentCurrencyVal;
            changeDue = Math.round((changeDue - thisCurrencyGiven) * 100) / 100;
            changeGiven.push([cid[i][0], thisCurrencyGiven]);
          } else {
            let thisCurrencyGiven = currentCurrencyQuantity * currentCurrencyVal;
            changeDue = changeDue - thisCurrencyGiven;
            changeGiven.push([cid[i][0], thisCurrencyGiven]);            
          }
        }

      }
      if(changeGiven.length === 0 || changeDue > 0 ){
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: changeGiven};
  }

}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
