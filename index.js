// coding first class functions


//write first functions
function receivesAFunction(callback) {
    callback()
  }
  //write a named function
  function returnsANamedFunction() {
    return function named() {
      console.log("This code is.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('What is this annonymous function?')
    }
  }