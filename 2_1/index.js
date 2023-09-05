function randomNumber() {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) + 1
    if (number < 6) reject(number)
    else resolve(number)
  })
}

randomNumber()
  .then((data) => console.log(data))
  .catch((data) => console.log(data))
