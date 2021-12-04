function initializeArray(value,length) {
    var array = []
    for (var i = 0; i < length; ++i)
      array.push(value)
    return array
}

function createRate(numberOfOnes, reportLength, type){

  var binnaryRate = ""
  numberOfOnes.forEach(function(amount){
    switch (type) {
      case "gamma"  : binnaryRate += (amount >= reportLength/2)?1:0 ; break;
      case "epsilon": binnaryRate += (amount <  reportLength/2)?1:0 ; break;
    }  
  })

  return parseInt(binnaryRate,2)
}

function requestListener () {

  var input = this.responseText.split("\n")
  // var input = ["101000001100","011111100111","111100001110",""]
  var numberOfOnes = initializeArray(0,input[0].length)
  input.slice(0, input.length - 1).forEach(function(line){
    line.split("").forEach(function(bit, position){
      if (parseInt(bit) == 1)
        numberOfOnes[position]++
    })
  })

  gammaRate   = createRate(numberOfOnes, input.length - 1, "gamma")
  epsilonRate = createRate(numberOfOnes, input.length - 1, "epsilon")
  console.log(gammaRate*epsilonRate)

}

var request = new XMLHttpRequest();
request.addEventListener("load", requestListener);
request.open("GET", "https://adventofcode.com/2021/day/3/input");
request.send();