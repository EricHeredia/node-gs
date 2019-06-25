// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let count = 0
let helloLoop = setInterval(() => {
  if (count < 5) {
    console.log("Hello World")
    count++
  } else {
    console.log("Done")
    clearInterval(helloLoop)
  }
}, 1000)