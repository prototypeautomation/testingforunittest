var message = true

function test(message) {
    if (message){
        console.log("true")
    } else {
        // reject(new Error("Error!"));
    }
}

var p1 = new Promise((resolve) => {
    if (message){
        console.log("true")
        message = "mantab"
    } else {
        // reject(new Error("Error!"));
    }
    resolve(message);
  });

  var p2 = p1.then(
    (value) => {
      console.log(p1); // Success!
    }
  );


  module.exports = {
    p2,
    p1
  };