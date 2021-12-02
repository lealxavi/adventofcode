function nMeasurementWindowed (input, n) {
  var output = []
  for (var i = 0; i <= input.length - n; ++i) {
    var value = 0
    for (var j = i; j < i + n; ++j) {
      value += parseInt(input[j])
    }
    output.push(value)
  }
  return output
}

function requestListener () {
  var numberOfIncreases = 0
  var input = this.responseText.split("\n")
  var input = nMeasurementWindowed(input.slice(0,input.length - 1),3)

  for (var i = 1; i < input.length; ++i)
    if (input[i]-input[i-1]>0) 
      numberOfIncreases++
        
  console.log(numberOfIncreases)
}

var request = new XMLHttpRequest();
request.addEventListener("load", requestListener);
request.open("GET", "https://adventofcode.com/2021/day/1/input");
request.send();