function squareNumber(number) {
  return new Promise((resolve, reject) => {
    const result = number * number
    resolve(result)
  })
}

function squareMulti(number) {
  return squareNumber(number)
    .then((number) => squareNumber(number))
    .then((number) => squareNumber(number))
}

squareMulti(3).then((result) => console.log(result))
