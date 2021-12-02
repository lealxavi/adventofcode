function requestListener () {
  var numberOfIncreases = 0
  var input = this.responseText.split("\n")

  for (var i = 1; i < input.length - 1; ++i)
    if (input[i]-input[i-1]>0) 
      numberOfIncreases++
        
  console.log(numberOfIncreases)
}

var request = new XMLHttpRequest();
request.addEventListener("load", requestListener);
request.open("GET", "https://adventofcode.com/2021/day/1/input");
request.send();