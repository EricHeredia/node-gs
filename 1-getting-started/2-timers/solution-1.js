const myInterval = delay => {
  setTimeout(() => {
    console.log('Hello World' + ' ' + delay)
    myInterval(++delay)
  }, delay * 1000)
}

myInterval(1)