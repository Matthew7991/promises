function timeout(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 1000) + 1
      resolve(randomNumber)
    }, number)
  })
}

Promise.all([timeout(1000), timeout(2000), timeout(3000)]).then((values) =>
  values.map((value) => console.log(value))
)
