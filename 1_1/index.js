function doubleNumber(number) {
  return new Promise((resolve, reject) => {
    const result = number * 2
    setTimeout(() => {
      resolve(result)
    }, 2000)
  })
}

doubleNumber(3).then((data) => console.log(data))
