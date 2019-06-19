function getEvenNumbers(numbersArray){
    return  numbersArray.filter((params) => {
        return params%2===0;
    })
  }