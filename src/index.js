const cardValidator = (cardNumber) => {
  
  cardNumber = cardNumber.replace(/\D/g, "");

  if (cardNumber === "0000000000000000" ||
      cardNumber === "1111111111111111" ||
      cardNumber === "2222222222222222" ||
      cardNumber === "3333333333333333" ||
      cardNumber === "4444444444444444" ||
      cardNumber === "5555555555555555" ||
      cardNumber === "6666666666666666" ||
      cardNumber === "7777777777777777" ||
      cardNumber === "8888888888888888" ||
      cardNumber === "9999999999999999") {
    return false
  }

  cardNumber = cardNumber.split('').map(digito => parseInt(digito))

  const lastDigit = cardNumber.pop()

  cardNumber.reverse()

  const evenIndex = cardNumber.map((item, index) => index % 2 === 0 ? cardNumber[index] * 2 : cardNumber[index])

  const valuesGreaterThanNine = evenIndex.map((item, index) => evenIndex[index] > 9 ? evenIndex[index] - 9 : evenIndex[index])

  const sum = valuesGreaterThanNine.reduce((value, total) => value + total)

  const isValid = lastDigit + sum;

  cardNumber.reverse()

  cardNumber.push(lastDigit)

  cardNumber = cardNumber.join('')

  if (isValid% 10 === 0) {
    return true
  } 
  else {
    return false
  }
}
  
  console.log(cardValidator('5114020449830736'))

  export { cardValidator }